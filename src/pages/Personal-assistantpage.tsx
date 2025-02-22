import AssistantSideBar from "@/components/app/assistant-sidebar";
import NewChatEnry from "@/components/app/assistant-start";
import AssistantPageHead from "@/components/app/Assistantpage-header";
import ContinueExisting from "@/components/app/continueexisting-chat";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ClipIcon, PlusLogo } from "@/constants/asset-imports";
import {
  ChevronUp,
  Diamond,
  MessageCircleMore,
  MoveUp,
  Sparkle,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PersonAssistancePage() {
  const [inital, setInital] = useState<boolean>(false);
  const [generating, setGenerating] = useState<boolean>(false);
  return (
    <main className="w-full min-h-[100dvh] ">
      <section className="p-6 min-h-[100dvh] flex flex-col flex-1 ">
        <div className="flex justify-between items-start">
          <Link to={'/'} className="justify-center flex-col items-center  inline-flex max-w-34 bg">
            <img src={PlusLogo} alt="" />
            <h3 className="text-[10px] text-center mt-2 text-maincolor tracking-[3px]">
              AI POWERED SMART ASSISTANT
            </h3>
          </Link>

          <div className="hidden lg:block">
            <AssistantPageHead />
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
          <AssistantPageHead />
        </div>
        <div className="w-full mt-5  flex-1 grid grid-cols-10 ">
          <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
            <AssistantSideBar />
          </div>
          <div className="lg:col-span-7 xl:col-span-8 col-span-10  relative ">
            <div className="w-full  lg:w-[80%] h-full justify-between flex flex-col overflow-y-auto  mx-auto  relative">
              <div className="w-full h-full  max-h-[460px] overflow-y-auto space-y-5 md:space-y-0">
                {!inital ? (
                  <>
                    <NewChatEnry setInitial={setInital} />
                  </>
                ) : (
                  <>
                    <ContinueExisting />
                    <section className="w-full space-y-5 md:space-y-0">
                      <div className="w-full flex  justify-end ">
                        <div className="px-4 max-w-52 min-h-9 py-2 text-sm rounded-3xl bg-[#D1F3FF] text-maincolor">
                          Show Patient History
                        </div>
                      </div>
                      {generating && (
                        <>
                          <div className="w-full flex  justify-start ">
                            <div className="flex ">
                              <div className="h-full flex items-start">
                                <div className="h-9 w-11 bg-maincolor rounded-3xl relative flex justify-center items-center">
                                  <Sparkle
                                    className="w-3 text-white absolute -top-0 -right-0"
                                    fill="#ffff"
                                  />
                                  <MessageCircleMore
                                    className="w-5 text-white "
                                    strokeWidth={2}
                                  />
                                </div>
                              </div>
                              <div className="max-w-full md:max-w-2xl pt-7  pl-4 ">
                                <div className="w-full">
                                  <div className="flex gap-1 items-start">
                                    <div className="size-[5px] rounded-full bg-maincolor animate-bounce delay-0"></div>
                                    <div className="size-[5px] rounded-full bg-maincolor animate-bounce delay-100"></div>
                                    <div className="size-[5px] rounded-full bg-maincolor animate-bounce delay-200"></div>
                                  </div>
                                </div>
                                <div className="mt-4 flex flex-col gap-3 font-medium"></div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </section>
                    {/* <ContinueExisting />
                    <ContinueExisting />
                    <ContinueExisting /> */}
                  </>
                )}
              </div>
              {inital && (
                <>
                  <div className="   w-full">
                    <div className="w-full  left-0 bottom-0 min-h-28 border bg-white rounded-tl-lg rounded-tr-lg rounded-bl-4xl rounded-br-4xl p-3 relative ">
                      <textarea
                        className="w-full h-20 outline-none text-sm resize-none border-none"
                        placeholder="Ask YPA anything  about your patients"
                      />
                      <div className="absolute bottom-0  left-0 w-full min-h-12  flex justify-between items-start p-3">
                        <button className="size-10 rounded-full bg-[#D1F3FF] flex justify-center items-center">
                          <img src={ClipIcon} alt="" />
                        </button>
                        <button
                          onClick={() => setGenerating(!generating)}
                          className="size-10 rounded-full bg-maincolor text-white flex justify-center items-center"
                        >
                          {!generating ? (
                            <>
                              <MoveUp className="w-5" />
                            </>
                          ) : (
                            <>
                              <Diamond className="w-5 rotate-45" fill="white" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
