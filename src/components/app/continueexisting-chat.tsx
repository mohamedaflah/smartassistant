import { MessageCircleMore, Sparkle } from "lucide-react";

export default function ContinueExisting() {
  return (
    <section className="w-full space-y-5 md:space-y-0">
      <div className="w-full flex  justify-end ">
        <div className="px-4 max-w-52 min-h-9 py-2 font-medium text-sm rounded-3xl bg-[#D1F3FF] text-maincolor">
          Show Patient History
        </div>
      </div>
      <div className="w-full flex  justify-start ">
        <div className="flex ">
          <div className="h-full flex items-start">
            <div className="h-9 w-11 bg-maincolor rounded-3xl relative flex justify-center items-center">
              <Sparkle
                className="w-3 text-white absolute -top-0 -right-0"
                fill="#ffff"
              />
              <MessageCircleMore className="w-5 text-white " strokeWidth={2} />
            </div>
          </div>
          <div className="max-w-full md:max-w-2xl pt-2 pl-4 ">
            <div className="w-full">
              <p className="text-sm text-maincolor font-medium">
                I'd be happy to show you the patient history! To get started,
                could you provide a bit more context? Specifically:
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-3 font-medium">
              <div className="flex gap-2">
                <div className="h-full text-sm text-maincolor">1.</div>
                <div className="text-sm text-maincolor">
                  What kind of patients are you looking with?{" "}
                  {"(e.g.,name, age, medical condition, medicines etc)"}
                </div>
              </div>
              <div className="flex gap-2">
                <div className="h-full text-sm text-maincolor">2.</div>
                <div className="text-sm text-maincolor">
                  How much time has passed since you registered this patient?
                </div>
              </div>
              <div className="flex gap-2">
                <div className="h-full text-sm text-maincolor">3.</div>
                <div className="text-sm text-maincolor">
                  Also, upload a patient related file if you have any.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
