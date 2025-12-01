import { NextAuthOptions, Session } from "next-auth";
import { getServerSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "@/schema/auth/login-schema";
import { loginMockApi } from "@/utills/auth-function";

export const options: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        emailOrPhone: {
          label: "Email or Phone",
          type: "text",
          placeholder: "Enter email or phone",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.emailOrPhone || !credentials?.password) {
          throw new Error("Please provide email/phone and password");
        }

        try {
          // Validate credentials with Zod schema
          const validatedFields = loginSchema.safeParse({
            emailOrPhone: credentials.emailOrPhone,
            password: credentials.password,
          });

          if (!validatedFields.success) {
            throw new Error("Invalid credentials format");
          }

          // Call local mock API function
          const result = await loginMockApi({
            emailOrPhone: credentials.emailOrPhone,
            password: credentials.password,
          });

          if (!result.success || !result.data) {
            throw new Error("Invalid email/phone or password");
          }

          // Return user data (exclude password)
          const { password: _, ...userWithoutPassword } = result.data;

          return {
            id: userWithoutPassword.id,
            name: userWithoutPassword.name,
            email: userWithoutPassword.email,
            phone: userWithoutPassword.phone,
          };
        } catch (error) {
          if (error instanceof Error) {
            throw new Error(error.message);
          }
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      // On first sign in, add user data to token
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.phone = user.phone;
      }
      return token;
    },
    async session({ session, token }) {
      // Add token data to session
      if (session.user) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.phone = token.phone as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    // maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  // debug: process.env.NODE_ENV === "development",
};

export const getUserSession = (): Promise<Session | null> => {
  return getServerSession(options);
};
