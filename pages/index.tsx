import { signIn, useSession } from "next-auth/react";

import OAuthButton from "@/components/Button/OAuthButton";
import DefaultLayout from "@/layouts/Default";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    router.push("/dashboard");
    return <Loader title="Redirecting to dashboard" />;
  }

  return (
    <DefaultLayout
      title="Sign up | OpeninApp"
      description="Signup page for OpeninApp"
      container={true}
      className="bg-[#F5F5F5]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="relative flex-[0.7] flex items-center justify-center bg-black h-full w-full min-h-[20vh] lg:min-h-screen">
          <h1 className="text-[72px] font-bold text-white z-[2]">Board.</h1>
          <div className="bg-black h-full w-[200%] translate-x-[-50%] z-[1] absolute"></div>
        </div>
        <div className="flex-[1] bg-[#F5F5F5] w-full h-full flex flex-col min-h-[80vh] px-[32px] lg:px-[0] lg:min-h-screen items-center justify-center relative">
          <div className="flex flex-col items-start justify-start max-w-[385px] mx-auto w-full">
            <h2 className="text-[36px] font-bold">Sign In</h2>
            <p className="text-[16px] font-lato">Sign in to your account</p>
            <div className="grid md:grid-cols-2 gap-[10px] md:gap-[25px] w-full my-[26px]">
              <OAuthButton
                logoUrl="/assets/icons/google.svg"
                alt="Google Logo"
                height={14}
                width={14}
                buttonText="Sign in with Google"
                key="Google Auth"
                onClick={() => signIn()}
              />
              <OAuthButton
                logoUrl="/assets/icons/apple.svg"
                alt="Apple Logo"
                height={14}
                width={11}
                buttonText="Sign in with Apple"
                key="Apple Auth"
                onClick={() => alert("Apple authentication is TODO")}
              />
            </div>
            <form className="bg-white rounded-[20px] p-[30px] w-full flex flex-col">
              <label
                htmlFor="email"
                className="font-lato text-[16px] leading-[19.2px] font-normal"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="font-lato mt-[10px] px-[15px] py-[10px] bg-[#F5F5F5] rounded-[10px] text-[16px]"
                placeholder="Enter your email here"
              />
              <label
                htmlFor="password"
                className="font-lato mt-[20px] text-[16px] leading-[19.2px] font-normal"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="font-lato mt-[10px] px-[15px] py-[10px] bg-[#F5F5F5] rounded-[10px] text-[16px]"
                placeholder="Enter your password here"
              />
              <a
                href="#"
                className="font-lato text-[16px] text-[#346BD4] my-[20px]"
              >
                Forgot password?
              </a>
              <button className="w-full py-[9px] px-[20px] rounded-[10px] text-[16px] leading-[19.2px] font-bold bg-black text-white">
                Sign In
              </button>
            </form>
            <p className="text-center mt-[20px] w-full font-lato text-[16px] text-[#858585]">
              Don’t have an account?{" "}
              <a href="#" className="font-lato text-[#346BD4]">
                Register here
              </a>
            </p>
          </div>
          <div className="bg-[#F5F5F5] h-full translate-x-[50%] z-[-1] absolute"></div>
        </div>
      </div>
    </DefaultLayout>
  );
}
