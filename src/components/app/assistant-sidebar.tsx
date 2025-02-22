export default function AssistantSideBar() {
  return (
    <div className="lg:col-span-3 xl:col-span-2  lg:flex flex-col gap-4 h-full bg-[#EFF9FC] rounded-2xl border border-gray-200 p-4">
      <div className="w-full">
        <div className="w-full">
          <h4 className="uppercase text-sm text-maincolor/80">today</h4>
        </div>
        <div className="flex flex-col mt-2">
          <button className="w-full h-10 rounded-[12px] flex items-center px-4 line-clamp-1 bg-[#D1F3FF] text-sm capitalize text-maincolor">
            New Inquiry
          </button>
          <button className="w-full h-10 rounded-[12px] flex items-center px-4 bg-transparent text-sm capitalize">
            <span className="truncate w-full overflow-hidden whitespace-nowrap text-start">
              Create Prescription for Mr. A.
            </span>
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full">
          <h4 className="uppercase text-sm text-maincolor/80">yesterday</h4>
        </div>
        <div className="flex flex-col mt-2">
          {/* <button className="w-full h-10 rounded-[12px] flex items-center px-4 line-clamp-1 bg-[#D1F3FF] text-sm capitalize text-maincolor">
              New Inquiry
            </button> */}
          <button className="w-full h-10 rounded-[12px] flex items-center px-4 bg-transparent text-sm capitalize">
            <span className="truncate w-full overflow-hidden whitespace-nowrap text-start">
              Create Prescription for Mr. A.
            </span>
          </button>
          <button className="w-full h-10 rounded-[12px] flex items-center px-4 bg-transparent text-sm capitalize">
            <span className="truncate w-full overflow-hidden whitespace-nowrap text-start">
              Create Prescription for Mr. A.
            </span>
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full">
          <h4 className="uppercase text-sm text-maincolor/80">last 7 days</h4>
        </div>
        <div className="flex flex-col mt-2">
          <button className="w-full h-10 rounded-[12px] flex items-center px-4 bg-transparent text-sm capitalize">
            <span className="truncate w-full overflow-hidden whitespace-nowrap text-start">
              Create Prescription for Mr. A.
            </span>
          </button>
          <button className="w-full h-10 rounded-[12px] flex items-center px-4 bg-transparent text-sm capitalize">
            <span className="truncate w-full overflow-hidden whitespace-nowrap text-start">
              Create Prescription for Mr. A.
            </span>
          </button>
          <button className="w-full h-10 rounded-[12px] flex items-center px-4 bg-transparent text-sm capitalize">
            <span className="truncate w-full overflow-hidden whitespace-nowrap text-start">
              Create Prescription for Mr. A.
            </span>
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full">
          <h4 className="uppercase text-sm text-maincolor/80">last 3 months</h4>
        </div>
        <div className="flex flex-col mt-2">
          <button className="w-full h-10 rounded-[12px] flex items-center px-4 bg-transparent text-sm capitalize">
            <span className="truncate w-full overflow-hidden whitespace-nowrap text-start">
              Create Prescription for Mr. A.
            </span>
          </button>
          <button className="w-full h-10 rounded-[12px] flex items-center px-4 bg-transparent text-sm capitalize">
            <span className="truncate w-full overflow-hidden whitespace-nowrap text-start">
              Create Prescription for Mr. A.
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
