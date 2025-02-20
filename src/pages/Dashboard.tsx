import DashboardCard from "@/components/app/dashboard-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AddIcon,
  ClosedApplicationImage,
  OpenApplicationImage,
  PlusLogo,
  SearchIcon,
  TotalPatientsImage,
  UploadIcon,
} from "@/constants/asset-imports";
import { ChevronUp } from "lucide-react";

export default function Dashboard() {
  return (
    <main className="h-[100dvh]">
      <section className="py-6 px-6 ">
        <header className="flex justify-between items-center">
          <div className="justify-center flex-col items-center  inline-flex max-w-34 bg">
            <img src={PlusLogo} alt="" />
            <h3 className="text-[10px] text-center mt-2 text-maincolor tracking-[3px]">
              AI POWERED SMART ASSISTANT
            </h3>
          </div>

          <div className="h-12 px-5 bg-white rounded-3xl border  items-center hidden md:flex w-[35rem] ">
            <img src={SearchIcon} alt="" />
            <input
              type="text"
              className="text-[13px] h-full flex-1 px-3 outline-none"
              placeholder="Search anything by patient name, ID, health issue, medicine etc"
            />
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
        </header>
        <header className="w-full flex justify-center md:hidden mt-8">
          <div className="h-12 px-5 bg-white rounded-3xl border  items-center flex w-full ">
            <img src={SearchIcon} alt="" />
            <input
              type="text"
              className="text-[13px] h-full flex-1 px-3 outline-none"
              placeholder="Search anything by patient name, ID, health issue, medicine etc"
            />
          </div>
        </header>
        <section className="mt-8 h-full">
          <div className="w-full grid lg:grid-cols-12 lg:grid-rows-none grid-rows-3 ">
            <div className="lg:col-span-3  ">
              <div className="w-full h-12 flex items-center"></div>
              <div className="flex flex-col lg:mt-6 gap-4 lg:pr-12">
                <DashboardCard
                  title="Total Patients"
                  count={4}
                  imagePath={TotalPatientsImage}
                />
                <DashboardCard
                  title="Closed Applications"
                  count={2}
                  imagePath={ClosedApplicationImage}
                />
                <DashboardCard
                  title="Open Applications"
                  count={2}
                  imagePath={OpenApplicationImage}
                />
              </div>
            </div>
            <div className="lg:col-span-6  ">
              <div className="w-full lg:flex-row flex-col gap-2 flex justify-between items-center min-h-12 my-4 lg:my-0 ">
                <h2 className="font-bold lg:text-[1.2rem] md:text-sm">
                  Recently Visited Patients
                </h2>

                <div className="flex items-center gap-2">
                  <button className="h-10 px-4 rounded-md flex justify-center items-center gap-2 bg-[#D1F3FF]">
                    <img className="w-5" src={UploadIcon} alt="" />
                    <h2 className="text-maincolor text-sm font-semibold">
                      Bulk upload
                    </h2>
                  </button>
                  <button className="h-10 px-4 rounded-md flex justify-center items-center gap-2 bg-maincolor">
                    <img className="w-5" src={AddIcon} alt="" />
                    <h2 className="text-white text-sm font-semibold">
                      Add new
                    </h2>
                  </button>
                </div>
              </div>
              <div className="lg:mt-6 w-full   shadow-maincolor/10 shadow-md border border-gray-100 rounded-md p-3 bg-white">
                k
              </div>
            </div>
            <div className="lg:col-span-3 ">ad</div>
          </div>
        </section>
      </section>
    </main>
  );
}
