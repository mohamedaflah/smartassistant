import { ChevronUp } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { PlusLogo, SearchIcon } from "@/constants/asset-imports";

interface HeaderProp {
  withSearch: boolean;
}
export default function Header({ withSearch = true }: HeaderProp) {
  return (
    <>
      <header className="flex justify-between items-center">
        <div className="justify-center flex-col items-center  inline-flex max-w-34 bg">
          <img src={PlusLogo} alt="" />
          <h3 className="text-[10px] text-center mt-2 text-maincolor tracking-[3px]">
            AI POWERED SMART ASSISTANT
          </h3>
        </div>
        {withSearch && (
          <>
            <div className="h-12 px-5 bg-white rounded-3xl border  items-center hidden md:flex w-[35rem] ">
              <img src={SearchIcon} alt="" />
              <input
                type="text"
                className="text-[13px] h-full flex-1 px-3 outline-none"
                placeholder="Search anything by patient name, ID, health issue, medicine etc"
              />
            </div>
          </>
        )}

        <Popover>
          <PopoverTrigger>
            <div className="flex items-center gap-1.5">
              <div className="size-12 rounded-full border-yellow-500/50 border bg-yellow-200/40 flex justify-center items-center text-maincolor font-semibold">
                SV
              </div>
              <ChevronUp className="w-5" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-1.5 w-28 p-2">
            <button className="w-full h-8 rounded-md text-sm flex justify-center items-center hover:bg-maincolor/20">
              Profile
            </button>
            <button className="w-full h-8 rounded-md text-sm flex justify-center items-center hover:bg-maincolor/20">
              Logout
            </button>
          </PopoverContent>
        </Popover>
      </header>
      <header className="w-full flex justify-center md:hidden mt-8">
        {withSearch && (
          <>
            <div className="h-12 px-5 bg-white rounded-3xl border  items-center flex w-full ">
              <img src={SearchIcon} alt="" />
              <input
                type="text"
                className="text-[13px] h-full flex-1 px-3 outline-none"
                placeholder="Search anything by patient name, ID, health issue, medicine etc"
              />
            </div>
          </>
        )}
      </header>
    </>
  );
}
