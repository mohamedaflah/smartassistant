import DashboardCard from "@/components/app/dashboard-card";
import { DataTable } from "@/components/app/data-table";
import { DoctorTableColumn } from "@/components/app/table-columns.tsx/doctor-table-col";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AddIcon,
  ClosedApplicationImage,
  NoPatientsImage,
  OpenApplicationImage,
  PlusLogo,
  SearchIcon,
  TotalPatientsImage,
  UploadIcon,
} from "@/constants/asset-imports";
import { doctors } from "@/constants/demmy";
import { ChevronUp, MessageCircleMore, Sparkle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <main className="min-h-[100dvh] ">
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
        <section className="mt-8    ">
          <div className="w-full  lg:grid lg:grid-cols-12 lg:grid-rows-none flex flex-col   ">
            <div className="lg:col-span-3   ">
              <div className="w-full h-12 flex items-center"></div>
              <div className="flex flex-col lg:mt-6 gap-4 lg:pr-12">
                <DashboardCard
                  path="total-patient"
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
            <div className="xl:col-span-7 lg:col-span-8 overflow-x-auto  flex flex-col h-full">
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
                  <Link
                    to={"/add-patient"}
                    className="h-10 px-4 rounded-md flex justify-center items-center gap-2 bg-maincolor"
                  >
                    <img className="w-5" src={AddIcon} alt="" />
                    <h2 className="text-white text-sm font-semibold">
                      Add new
                    </h2>
                  </Link>
                </div>
              </div>
              <div className="lg:mt-6 w-full flex-1    shadow-maincolor/10 shadow-md border  border-gray-100 rounded-md bg-white  flex ">
                {doctors.length <= 0 ? (
                  <div className="w-full h-full p-6">
                    <div className="w-full flex justify-center items-center flex-col gap-1.5">
                      <h3 className="text-2xl">Hey Shikhin</h3>
                      <h4 className="text-lg">
                        managing your patients just got <b>faster</b> and{" "}
                        <b>easier!</b>
                      </h4>
                    </div>
                    <div className="flex flex-col mt-7 gap-6">
                      <div className="w-full flex justify-center">
                        <img src={NoPatientsImage} className="w-48" alt="" />
                      </div>
                      <div className="w-full flex justify-center">
                        <h5>Add your first patient now</h5>
                      </div>
                      <div className="w-full flex justify-center">
                        <Link
                          to={"/add-patient"}
                          className="h-10 px-4 rounded-md flex justify-center items-center gap-2 bg-maincolor"
                        >
                          <img className="w-5" src={AddIcon} alt="" />
                          <h2 className="text-white text-sm font-semibold">
                            Add new
                          </h2>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <DataTable columns={DoctorTableColumn} data={doctors} />
                  </>
                )}
              </div>
            </div>
            <div className="xl:col-span-2 lg:col-span-1 h-14 lg:h-auto ">
              <section className="w-full lg:h-full mt-3 lg:mt-0 flex items-end justify-end lg:pr-6">
                <Link to={""}>
                  {/* <img src={AiGenerateImage} alt="" /> */}
                  <div className="w-12 h-9 rounded-3xl bg-[#D1F3FF] flex justify-center items-center relative">
                    <Sparkle
                      className="w-4 text-maincolor absolute -top-1 -right-1"
                      fill="#1883A6"
                    />
                    <MessageCircleMore
                      className="w-5 text-maincolor"
                      strokeWidth={2}
                    />
                  </div>
                </Link>
              </section>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
