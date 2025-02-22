import React, { SetStateAction, useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
} from "../ui/alert-dialog";
import { doctors } from "@/constants/demmy";
import { X } from "lucide-react";

interface AutoOpenDialogProps {
  setDoctors: React.Dispatch<SetStateAction<IDoctor[]>>;
}
export default function AutoOpenDialog({ setDoctors }: AutoOpenDialogProps) {
  const [dialogopen, setDialogOpen] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setDialogOpen(true);
    }, 6000);
  }, [dialogopen]);
  return (
    <AlertDialog open={dialogopen} onOpenChange={setDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogDescription className="relative">
            <AlertDialogCancel className="p-2 flex justify-center items-center absolute top-0 right-0 text-black shadow-md border border-black">
              <X className="w-4"/>
            </AlertDialogCancel>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => setDoctors([])}
                className="h-10 px-4 rounded-2xl capitalize bg-red-500 text-white text-sm flex items-center justify-center"
              >
                show empty state
              </button>
              <button
                onClick={() => setDoctors(doctors)}
                className="h-10 px-4 rounded-2xl capitalize bg-green-500 text-white text-sm flex items-center justify-center"
              >
                show data state
              </button>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
