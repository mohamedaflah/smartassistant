"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "@/constants/asset-imports";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      rowSelection,
      columnFilters,
    },
  });

  return (
    <div className="w-full h-full  relative pb-16 ">
      <div className="flex items-center p-3">
        <div className="flex items-center px-3 border rounded-md h-8 mb-3 shadow-sm w-[30%]">
          <img src={SearchIcon} className="w-4" alt="" />
          <Input
            placeholder="Search..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="border-none px-2 text-xs bg-transparent shadow-none flex-1 outline-none focus-visible:ring-0"
          />
        </div>
      </div>
      <div className="rounded-md    flex flex-col justify-between  ">
        <div className="w-full overflow-auto">
          <Table className="w-full ">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="">
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="lg:p-3 ">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="border-none"
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className={`lg:p-3 `}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="w-full absolute bottom-0 left-0 border-t h-10 flex items-center px-3 py-1 justify-between ">
        <div className="text-sm">1-4 of 4</div>

        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-1.5">
            <span className="text-xs">Rows per page: </span>
            <Select>
              <SelectTrigger className="w-14 text-xs ring-0 focus:ring-0 shadow-none bg-transparent outline-none border-none pl-1  pr-5">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"10"}>10</SelectItem>
                <SelectItem value={"11"}>11</SelectItem>
                <SelectItem value="12">12</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="size-6 border-2 rounded-md shadow-md flex justify-center items-center"
            >
              <ChevronLeft className="w-3" />
            </button>
            <div className="h-10 flex items-center text-xs px-1 font-serif">
              1/1
            </div>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="size-6 border-2 rounded-md shadow-md flex justify-center items-center"
            >
              <ChevronRight className="w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
