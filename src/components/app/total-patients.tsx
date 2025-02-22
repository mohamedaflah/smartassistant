import { AddIcon, UploadIcon } from "@/constants/asset-imports";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { DataTable } from "./data-table";
import { DoctorTableColumn } from "./table-columns.tsx/doctor-table-col";
import { doctors } from "@/constants/demmy";

export default function TotalPatientList() {
  return (
    <main className="w-full  lg:w-[730px]">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3 items-center">
          {/* <img src={BackArrow} className="w-7"/> */}
          <Link to={"/"}>
            <ArrowLeft className="w-7 text-maincolor" />
          </Link>
          <h2 className="text-lg font-semibold">Total Patients {"(4)"}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-10 md:px-4 px-2 rounded-md flex justify-center items-center gap-2 bg-[#D1F3FF]">
            <img className="md:w-5 w-4" src={UploadIcon} alt=""  />
            <h2 className="text-maincolor md:text-sm text-xs font-semibold">
              Bulk upload
            </h2>
          </button>
          <Link
            to={"/add-patient"}
            className="h-10 md:px-4 px-2 rounded-md flex justify-center items-center gap-2 bg-maincolor"
          >
            <img className="md:w-5 w-4" src={AddIcon} alt="" />
            <h2 className="text-white md:text-sm font-semibold text-xs ">Add new</h2>
          </Link>
        </div>
      </div>
      <div className="flex gap-2.5 my-5">
        <button className="h-9 px-5 bg-maincolor text-white text-sm flex justify-center items-center rounded-3xl">
          All
        </button>
        <button className="h-9 px-5 bg-maincolor/15 text-maincolor text-sm flex justify-center items-center rounded-3xl">
          Closed
        </button>
        <button className="h-9 px-5 bg-maincolor/15 text-maincolor text-sm flex justify-center items-center rounded-3xl">
          Opened
        </button>
      </div>
      <div className="lg:mt-6 w-full flex-1    shadow-maincolor/10 shadow-md border  border-gray-100 rounded-md bg-white  flex ">
        <>
          <DataTable columns={DoctorTableColumn} data={doctors} />
        </>
      </div>
    </main>
  );
}
