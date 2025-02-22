import { ArrowLeft, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import AssistantSideBar from "./assistant-sidebar";

export default function AssistantPageHead() {
  return (
    <main className="w-full  lg:w-[730px]">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3 items-center">
          {/* <img src={BackArrow} className="w-7"/> */}
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger>
                {" "}
                <button className="lg:hidden">
                  <Menu className="w-7 text-maincolor" />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetDescription>
                    <AssistantSideBar />
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Link to={"/"}>
              <ArrowLeft className="w-7 text-maincolor" />
            </Link>
          </div>
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
