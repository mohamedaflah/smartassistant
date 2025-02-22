/* eslint-disable @typescript-eslint/no-explicit-any */
// import { BackArrow } from "@/constants/asset-imports";
import { Draw, DrawCl, Write, WriteCl } from "@/constants/asset-imports";
import { ArrowLeft, CalendarIcon, Keyboard } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import CanvasDraw from "react-canvas-draw";
import { Link } from "react-router-dom";

export default function PatientAddForm() {
  const [date, setDate] = useState<Date>();
  const [popOpen, setPopOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<"write" | "form">("write");
  const [canvasRef, setCanvasRef] = useState<CanvasDraw | null>(null);
  return (
    <main className="w-full  lg:w-[680px]">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3 items-center">
          {/* <img src={BackArrow} className="w-7"/> */}
          <Link to={"/"}>
            <ArrowLeft className="w-7 text-maincolor" />
          </Link>
          <h2 className="text-lg font-semibold">New Patient {"(1st)"}</h2>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => setMode("write")}
            className={cn("h-9 px-3  rounded-tl-[12px] rounded-bl-[12px]", {
              "bg-maincolor": mode == "write",
              "bg-maincolor/15": mode !== "write",
            })}
          >
            <img src={mode == "write" ? Draw : DrawCl} alt="" />
          </button>
          <button
            onClick={() => setMode("form")}
            className={cn("h-9 px-3  rounded-tr-[12px] rounded-br-[12px] ", {
              "bg-maincolor": mode == "form",
              "bg-maincolor/15": mode !== "form",
            })}
          >
            <img src={mode == "write" ? Write : WriteCl} alt="" />
            <Keyboard className="w-4  text-maincolor hidden" />
          </button>
        </div>
      </div>
      {mode == "write" ? (
        <div className="w-full mt-8 flex flex-col gap-2">
          <div className="w-full">
            <h2 className="uppercase tracking-[1px] f">
              KEYWORDS WILL HELP YOU ORGANISE THE PATIENT INFORMATION
            </h2>
          </div>
          <div className="w-full">
            <h4 className=" text-sm text-maincolor">
              This must include patient details, medical profile & contact
              details
            </h4>
          </div>
          <div className="w-full grid grid-cols-2 gap-3">
            <Popover defaultOpen={popOpen} onOpenChange={setPopOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full h-10 bg-white justify-between cursor-pointer  text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  {date ? (
                    format(date, "PPP")
                  ) : (
                    <span className="text-foreground/45 ml-2">
                      Date of birth
                    </span>
                  )}
                  <CalendarIcon className="mr-2 h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className=" w-auto p-0">
                <Calendar
                  mode="single"
                  captionLayout="dropdown-buttons"
                  selected={date}
                  onSelect={(date) => {
                    setDate(date);
                    setPopOpen(false);
                  }}
                  fromYear={1960}
                  toYear={2030}
                />
              </PopoverContent>
            </Popover>

            <Select>
              <SelectTrigger className="w-full h-10 border bg-white rounded-md shadow-none px-5 text-black ">
                <span className="text-foreground/50">
                  <SelectValue placeholder="Gender" />
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full h-[500px] rounded-[12px] bg-white shadow-md overflow-hidden border-gray-200 mt-3 relative">
            <CanvasDraw
              ref={(canvas: any) => setCanvasRef(canvas)}
              brushRadius={1} // Adjust pen thickness
              brushColor="black" // Pen color
              canvasWidth={700} // Adjust size
              canvasHeight={500}
              hideGrid
              //   brushRadius={2}
              // brushStyle="round" // Adjust brush style
              className="border rounded-md  w-full h-full object-cover"
            />
            {/* Controls */}
            <div className="absolute bottom-3 right-3 flex gap-3">
              <button
                onClick={() => canvasRef?.clear()}
                className="h-9 px-4 bg-red-500/80 text-white rounded-lg"
              >
                Clear
              </button>
              <button
                onClick={() => canvasRef?.undo()}
                className="h-9 px-4 bg-gray-500/80 text-white rounded-lg"
              >
                Undo
              </button>
            </div>
          </div>

          <div className="w-full flex justify-end items-center gap-4 mt-7">
            <button className="h-9 px-4 rounded-[12px] bg-maincolor/15 flex justify-center items-center text-maincolor text-sm font-semibold">
              Cancel
            </button>
            <button className="h-9 px-4 rounded-[12px] bg-maincolor flex justify-center items-center text-white text-sm font-semibold">
              Organise
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full p-5 rounded-md shadow-md border-gray-100 border bg-white mt-8 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="w-full text-sm">
              <h3 className="uppercase font-semibold tracking-[2px]">
                personal details
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                className="h-10 w-full rounded-md border pl-5 pr-2  text-sm"
                placeholder="First name"
              />
              <input
                type="text"
                className="h-10 w-full rounded-md border pl-5 pr-2  text-sm"
                placeholder="Last name"
              />
              <Popover defaultOpen={popOpen} onOpenChange={setPopOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full h-10 bg-transparent justify-between cursor-pointer  text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? (
                      format(date, "PPP")
                    ) : (
                      <span className="text-foreground/45 ml-2">
                        Date of birth
                      </span>
                    )}
                    <CalendarIcon className="mr-2 h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className=" w-auto p-0">
                  <Calendar
                    mode="single"
                    captionLayout="dropdown-buttons"
                    selected={date}
                    onSelect={(date) => {
                      setDate(date);
                      setPopOpen(false);
                    }}
                    fromYear={1960}
                    toYear={2030}
                  />
                </PopoverContent>
              </Popover>

              <Select>
                <SelectTrigger className="w-full h-10 border bg-transparent rounded-md shadow-none px-5 text-black ">
                  <span className="text-foreground/50">
                    <SelectValue placeholder="Gender" />
                  </span>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <div className="w-full text-sm">
              <h3 className="uppercase font-semibold tracking-[2px]">
                medical profile
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="w-full text-sm">
              <h4 className="text-sm">Current condition</h4>
            </div>
            <div>
              <Textarea
                className="w-full border h-22 p-3 resize-none"
                placeholder="Start typing here..."
              />
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="w-full text-sm">
              <h4 className="text-sm">Ongoing Medications (if any)</h4>
            </div>
            <div>
              <Textarea
                className="w-full border h-22 p-3 resize-none"
                placeholder="Start typing here..."
              />
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="w-full text-sm">
              <h4 className="text-sm">Goal</h4>
            </div>
            <div>
              <Textarea
                className="w-full border h-22 p-3 resize-none"
                placeholder="Start typing here..."
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full text-sm">
              <h3 className="uppercase font-semibold">contact details</h3>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  className="h-10 w-full rounded-md border pl-5 pr-2  text-sm"
                  placeholder="Email"
                />
                <input
                  type="number"
                  accept="number"
                  className="h-10 w-full rounded-md border pl-5 pr-2  text-sm"
                  placeholder="Phone No."
                />
              </div>
              <div className="grid grid-cols-5 mt-2">
                <input
                  type="number"
                  className="h-10 col-span-3 w-full rounded-md border pl-5 pr-2  text-sm"
                  placeholder="Emergency Contact"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end items-center gap-4 mt-7">
            <button className="h-9 px-4 rounded-[12px] bg-maincolor/15 flex justify-center items-center text-maincolor text-sm font-semibold">
              Cancel
            </button>
            <button className="h-9 px-4 rounded-[12px] bg-maincolor flex justify-center items-center text-white text-sm font-semibold">
              Save
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
