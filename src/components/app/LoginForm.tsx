import { EmailOutline, LockOutline, PlusLogo } from "@/constants/asset-imports";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <section className="w-[85%] md:w-[70%] bg-white shadow-2xl  shadow-maincolor/20 min-h-[60%] rounded-xl p-5">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <img src={PlusLogo} alt="" />
        <h4 className="text-[10px] text-maincolor tracking-[3px] font-semibold">
          AI POWERED SMART ASSISTANT
        </h4>
      </div>
      <div className="w-full mt-8 flex flex-col justify-center items-center gap-2">
        <h2 className="font-semibold text-[1.7rem] text-maincolor">Welcome!</h2>
        <h5 className="text-maincolor">Login to your account</h5>
      </div>
      <form className="w-full mt-8 px-4">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full h-10 rounded-md border px-5 flex items-center">
            <div className="h-full flex items-center">
              <img src={EmailOutline} alt="" />
            </div>
            <input
              type="text"
              placeholder="Email"
              className="h-full bg-transparent outline-none pl-4 text-sm flex-1"
            />
          </div>
          <div className="w-full h-10 rounded-md border px-5 flex items-center">
            <div className="h-full flex items-center">
              <img src={LockOutline} alt="" />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="h-full bg-transparent outline-none pl-4 text-sm flex-1"
            />
          </div>
        </div>
        <div className="w-full mt-8">
          <button className="w-full h-10 rounded-md flex justify-center items-center text-white bg-maincolor">
            Login
          </button>
        </div>
        <div className="w-full flex justify-center mt-8">
          <h5 className="text-maincolor text-sm">
            New here? <Link to="/signup" className="font-semibold text-maincolor">Signup</Link>
          </h5>
        </div>
      </form>
    </section>
  );
}
