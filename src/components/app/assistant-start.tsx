import { ClipIcon, Modulation } from "@/constants/asset-imports";
import React, { SetStateAction } from "react";

interface NewChatEnryProp {
  setInitial: React.Dispatch<SetStateAction<boolean>>;
}
export default function NewChatEnry({ setInitial }: NewChatEnryProp) {
  return (
    <div className="w-full mt-10 flex flex-col gap-5">
      <div className="flex justify-center">
        <h4 className="font-semibold text-3xl">What can I help you with ?</h4>
      </div>
      <div className="w-full min-h-28 border bg-white rounded-tl-lg rounded-tr-lg rounded-bl-4xl rounded-br-4xl p-3 relative ">
        <textarea
          className="w-full h-20 outline-none text-sm resize-none border-none"
          placeholder="Ask YPA anything  about your patients"
        />
        <div className="absolute bottom-0  left-0 w-full min-h-12  flex justify-between items-start p-3">
          <button className="size-10 rounded-full bg-[#D1F3FF] flex justify-center items-center">
            <img src={ClipIcon} alt="" />
          </button>
          <button className="size-10 rounded-full bg-[#D1F3FF] flex justify-center items-center">
            <img src={Modulation} alt="" />
          </button>
        </div>
      </div>
      <div className="mt-5 flex justify-center items-center flex-wrap gap-2 w-[90%] mx-auto ">
        <button
          onClick={() => setInitial(true)}
          className="h-9 px-4 font-semibold hover:bg-maincolor/40 flex justify-center items-center border rounded-3xl text-sm text-maincolor border-maincolor/50"
        >
          Show Patient History
        </button>
        <button
          onClick={() => setInitial(true)}
          className="h-9 px-4 font-semibold hover:bg-maincolor/40 flex justify-center items-center border rounded-3xl text-sm text-maincolor border-maincolor/50"
        >
          Create prescription
        </button>
        <button
          onClick={() => setInitial(true)}
          className="h-9 px-4 font-semibold hover:bg-maincolor/40 flex justify-center items-center border rounded-3xl text-sm text-maincolor border-maincolor/50"
        >
          Help me Diagnose
        </button>
        <button
          onClick={() => setInitial(true)}
          className="h-9 px-4 font-semibold hover:bg-maincolor/40 flex justify-center items-center border rounded-3xl text-sm text-maincolor border-maincolor/50"
        >
          Clinical Support
        </button>
        <button
          onClick={() => setInitial(true)}
          className="h-9 px-4 font-semibold hover:bg-maincolor/40 flex justify-center items-center border rounded-3xl text-sm text-maincolor border-maincolor/50"
        >
          Medical Terminologies
        </button>
        <button
          onClick={() => setInitial(true)}
          className="h-9 px-4 font-semibold hover:bg-maincolor/40 flex justify-center items-center border rounded-3xl text-sm text-maincolor border-maincolor/50"
        >
          Review Patient Case
        </button>
        <button
          onClick={() => setInitial(true)}
          className="h-9 px-4 font-semibold hover:bg-maincolor/40 flex justify-center items-center border rounded-3xl text-sm text-maincolor border-maincolor/50"
        >
          Show latest developments
        </button>
      </div>
    </div>
  );
}
