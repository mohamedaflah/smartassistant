import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnSorting } from "@/constants/asset-imports";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
export const DoctorTableColumn: ColumnDef<IDoctor>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="rounded-[4px] bg-white shadow-sm border-gray-300 "
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <div className="h-full lg:pr-3">
        <Checkbox
          className="rounded-[4px] bg-white shadow-sm border-gray-300 mb-4"
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
    
  },
  {
    accessorKey: "tempId",
    header: () => (
      <div>
        <Button
          variant={"ghost"}
          className="flex justify-start px-0 items-center"
        >
          <span className="italic">#</span>
          <img src={ColumnSorting} className="w-4 h-4" alt="" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      return <div className="h-full  mb-3 w-5">{row.index + 1}</div>;
    },
  },
  {
    accessorKey: "name",
    header: () => (
      <Button
        variant={"ghost"}
        className="flex justify-start px-0 items-center"
      >
        <h4 className="uppercase text-xs text-bl">name</h4>
        <img src={ColumnSorting} className="w-4 h-4" alt="" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex-col  w-24 gap-1.5 lg:pr-5">
        <h3 className="font-semibold  text-[0.78rem]">{row.original.name}</h3>
        <h4 className="text-xs">{row.original.experience} Years M</h4>
      </div>
    ),
  },
  {
    accessorKey: "conditions",
    header: () => <h4 className="uppercase text-xs">conditions</h4>,
    cell: ({ row }) => (
      <div className="text-xs line-clamp-2 lg:pr-5">
        {row.original.conditions.slice(0, 50)}
        <span className="text-maincolor font-semibold">more</span>
      </div>
    ),
  },
  {
    accessorKey: "medications",
    header: () => <h4 className="uppercase text-xs">medications </h4>,
    cell: ({ row }) => (
      <div className="text-xs line-clamp-2 lg:pr-5">
        {row.original.medications.slice(0, 50)}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: () =>   <Button
    variant={"ghost"}
    className="flex justify-start px-0 items-center"
  >
    <h4 className="uppercase text-xs text-bl">status</h4>
    <img src={ColumnSorting} className="w-4 h-4" alt="" />
  </Button>,
    cell: ({ row }) => {
      return (
        <div className=" lg:pr-4">
          <div
            className={cn(
              "text-xs h-6 px-2  flex justify-center items-center rounded-sm",
              {
                "bg-yellow-500/30 capitalize text-yellow-600 ":
                  row.original.status == "open",
                "bg-green-500/30 capitalize text-green-600":
                  row.original.status == "closed",
              }
            )}
          >
            {row.original.status}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "_id",
    header: () => <h4 className="uppercase text-xs">actions</h4>,
    cell: () => <div className="lg:w-24 w-10"></div>,
  },
];
