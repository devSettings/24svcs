import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import { Suspense } from "react";
import { cn } from "~/lib/utils";

import EmptyTable from "./empty-table";

interface Column<T> {
  key: keyof T;
  label: string;
  isBadge?: boolean;
  Badge?: React.ComponentType<{ value: any }>;
}

interface Data<T> {
  data: T[];
  columns: Column<T>[];
}

export default function TableData<T>({ data, columns }: Data<T>) {
  if (data.length === 0) {
    return (
      <EmptyTable
        heading="No data found!"
        description="There is no data available - add some data to see it here."
      />
    );
  }
  return (
    <div className="">
      <Card className="overflow-hidden border-[01.px] border-zinc-900">
        <CardContent className="pt-4">
          <Table>
            <TableHeader>
              <TableRow className="h-14">
                <TableHead>
                  <Checkbox className="rounded-md shadow-none"></Checkbox>
                </TableHead>
                {columns.map((column, index) => (
                  <TableHead
                    key={index}
                    className={cn("text-nowrap text-sm font-normal")}
                  >
                    {column.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow
                  key={index}
                  className={cn("h-14 cursor-pointer text-muted-foreground", {
                    "bg-gray-50 dark:bg-muted/10": index % 2 === 0,
                  })}
                >
                  <TableCell>
                    <Checkbox className="rounded-md shadow-none" />
                  </TableCell>
                  {columns.map((column, colIndex) => (
                    <TableCell key={colIndex} className="text-sm">
                      {column.isBadge && column.Badge ? (
                        <column.Badge value={item[column.key]} />
                      ) : (
                        String(
                          typeof item[column.key] === "object"
                            ? JSON.stringify(item[column.key])
                            : item[column.key],
                        )
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Suspense fallback={<div>Loading pagination...</div>}></Suspense>
        </CardFooter>
      </Card>
    </div>
  );
}
