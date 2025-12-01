import SignUpForm from "@/components/form/auth/signup-form";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-auto pt-4 md:pt-12 pb-8 md:pb-30">
      {/* Image Container */}
      <div className="hidden md:block relative w-full h-[78vh]">
        <Image
          alt="Login illustration"
          src="/auth.jpg"
          fill
          priority
          sizes="50vw"
          className=" object-center"
          quality={100}
        />
      </div>

      {/* Form Container */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-[371px] grid gap-2">
          <h2 className="text-3xl mb-4 font-semibold ">Log in to Exclusive</h2>
          <p className="text-sm">Enter your details below</p>

          <SignUpForm />

          <p className="text-center text-sm py-4">
            Already have an account?{" "}
            <Link
              href={"/login"}
              className="border-b-2 text-text-secondary"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
