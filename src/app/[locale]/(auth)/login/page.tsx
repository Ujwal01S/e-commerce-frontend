import LoginForm from "@/components/form/auth/login-form";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 pt-6 md:pt-12 md:pb-30 pb-8">
      {/* Image Container */}
      <div className="hidden md:block relative w-full h-[78vh]">
        <Image
          alt="Login illustration"
          src="/auth.jpg"
          fill
          priority
          sizes="50vw"
          className="object-center"
          quality={100}
        />
      </div>

      {/* Form Container */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-[371px]">
          <h1 className="text-2xl font-bold mb-4">Log in to Exclusive</h1>
          <p>Enter your details below</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
