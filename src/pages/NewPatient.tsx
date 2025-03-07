import PatientAddForm from "@/components/app/PatientAddFrm";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PlusLogo } from "@/constants/asset-imports";
import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function AddNewPatient() {
  return (
    <main className="w-full min-h-[100dvh]">
      <section className="py-6 px-6 ">
        <div className="flex justify-between items-start">
          <Link to={'/'} className="justify-center flex-col items-center  inline-flex max-w-34 bg">
            <img src={PlusLogo} alt="" />
            <h3 className="text-[10px] text-center mt-2 text-maincolor tracking-[3px]">
              AI POWERED SMART ASSISTANT
            </h3>
          </Link>

          <div className="hidden lg:block">
            <PatientAddForm />
          </div>

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
        </div>
        <div className="md:w-[90%] w-full lg:hidden block mx-auto mt-5">
            <PatientAddForm/>
        </div>
      </section>
    </main>
  );
}
