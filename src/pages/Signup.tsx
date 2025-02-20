import SignupForm from "@/components/app/SignupForm";
import { LoginSignupPageImage } from "@/constants/asset-imports";

export default function Signup() {
  return (
    <main className="w-full h-[100dvh] ">
      <section className="w-full h-full grid md:grid-cols-2 grid-cols-1">
        <div className="w-full h-full hidden md:block ">
          <img
            src={LoginSignupPageImage}
            className="w-full h-full  object-cover"
            alt="mainImage"
          />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <SignupForm />
        </div>
      </section>
    </main>
  );
}
