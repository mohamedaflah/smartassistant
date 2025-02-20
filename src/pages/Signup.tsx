import SignupForm from "@/components/app/SignupForm";
import { LoginSignupPageImage } from "@/constants/asset-imports";

export default function Signup() {
  return (
    <main className="w-full h-[100dvh] overflow-hidden">
      <section className="w-full h-full grid md:grid-cols-2 grid-cols-1">
        <div className="w-full h-full hidden md:block overflow-hidden ">
          <img
            src={LoginSignupPageImage}
            className="w-full   object-contain"
            alt="mainImage"
          />
        </div>
        <div className="w-full  h-full flex justify-center items-center">
          <SignupForm />
        </div>
      </section>
    </main>
  );
}
