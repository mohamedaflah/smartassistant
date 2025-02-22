import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function AssistantPageHead() {
  return (
    <main className="w-full  lg:w-[730px]">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3 items-center">
          {/* <img src={BackArrow} className="w-7"/> */}
          <Link to={"/"}>
            <ArrowLeft className="w-7 text-maincolor" />
          </Link>
          <h2 className="text-lg font-semibold">
            YPA {"("}
            <span className="capitalize">Your Personal assistant</span>
            {")"}
          </h2>
        </div>
      </div>
    </main>
  );
}
