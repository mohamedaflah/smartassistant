// import { EmailOutline, LockOutline, PlusLogo } from "@/constants/asset-imports";
import { BackArrow } from "@/constants/asset-imports";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";

export default function SignupForm() {
  const [date, setDate] = useState<Date>();
  const [popOpen, setPopOpen] = useState<boolean>(false);
  return (
    <section className="w-[85%]  md:w-[70%] bg-white shadow-2xl  shadow-maincolor/20 min-h-[60%] rounded-xl border border-gray-100 p-5">
      <div className="w-full flex justify-center items-center relative">
        <Link to={"/login"} className="absolute left-0 ">
          <img src={BackArrow} alt="" />
        </Link>
        <h2 className="text-2xl font-semibold text-maincolor">Sign Up</h2>
      </div>
      <div className="flex flex-col w-full mt-8 px-3">
        <div className="flex flex-col gap-2">
          <div className="w-full text-sm">
            <h3 className="uppercase font-semibold">personal details</h3>
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
      </div>
      <div className="flex flex-col w-full mt-8 px-3">
        <div className="flex flex-col gap-2">
          <div className="w-full text-sm">
            <h3 className="uppercase font-semibold">personal details</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              className="h-10 w-full rounded-md border pl-5 pr-2  text-sm"
              placeholder="Medical License number"
            />
            <input
              type="text"
              className="h-10 w-full rounded-md border pl-5 pr-2  text-sm"
              placeholder="Specialisation"
            />
            <input
              type="text"
              className="h-10 w-full rounded-md border pl-5 pr-2  text-sm"
              placeholder="Years of Experience"
            />
            <input
              type="text"
              className="h-10 w-full rounded-md border pl-5 pr-2  text-sm"
              placeholder="Hospital Affiliation"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mt-8 px-3">
        <div className="flex flex-col gap-2">
          <div className="w-full text-sm">
            <h3 className="uppercase font-semibold">contact details</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              className="h-10 w-full rounded-md border pl-5 pr-2  text-sm"
              placeholder="Email"
            />
            <input
              type="text"
              className="h-10 w-full rounded-md border pl-5 pr-2  text-sm"
              placeholder="Phone No."
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-1.5 w-full mt-8 px-3 justify-center  items-center">
        <Checkbox className="rounded-[3px] scale-100 border-gray-500 " />
        <h4 className="text-[11.4px]">
          By signing up, you agree on having consent to{" "}
          <Link to={""} className="underline text-maincolor font-semibold">
            data privacy
          </Link>{" "}
          &
          <Link to={""} className="underline text-maincolor font-semibold">
            {" "}
            HIPAA compliance
          </Link>
        </h4>
      </div>
      <div className="flex flex-row gap-1.5 w-full mt-8 px-3 justify-center  items-center">
        <button className="h-10 rounded-md w-full bg-maincolor text-white ">
          Sign up
        </button>
      </div>
      <div className="flex flex-row gap-1.5 w-full mt-8 px-3 justify-center  items-center" />
    </section>
  );
}
