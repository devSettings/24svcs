import { Card, CardContent, CardHeader } from "~/components/ui/card";
import TableData from "../components/table-data";
import OverViewMetricsGrid from "./_components/over-view-metrics-grid";
import { RecentSalesChart } from "./_components/recent-sales-chart";
import { Suspense } from "react";
import { Button } from "~/components/ui/button";
import { CircleFadingPlus, FolderInput } from "lucide-react";
import Link from "next/link";
import { cn } from "~/lib/utils";
import Search from "~/components/search";
import { IconAdjustmentsSpark } from "@tabler/icons-react";
import { RecentOrders } from "~/types/orders";
import OrderSourceBadge from "../orders/_components/order-source-badge";
import OrderStatusBadge from "../orders/_components/order-status-badge";

const OverView = () => {
  const columns: {
    key: "id" | "customer" | "items" | "amount" | "status" | "source" | "date";
    label: string;
    isBadge?: boolean;
    Badge?: any;
  }[] = [
    { key: "id", label: "ID" },
    { key: "customer", label: "Customer" },
    { key: "source", label: "Source", isBadge: true, Badge: OrderSourceBadge },
    { key: "items", label: "Items" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status", isBadge: true, Badge: OrderStatusBadge },
    { key: "date", label: "Date" },
  ];

  return (
    <div className="space-y-4">
      <OverViewMetricsGrid />
      <div className="">
        <RecentSalesChart />
      </div>
      <Card className="flex-1 overflow-hidden border-zinc-900 bg-[#0a0a0a]">
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              <Suspense fallback={<div>Loading search...</div>}>
                <Search className="bg-white dark:bg-black" />
              </Suspense>
              <Suspense fallback={"loading"}>
                <Button variant="default" className={cn("h-10 border-none")}>
                  <IconAdjustmentsSpark />
                </Button>
              </Suspense>
              <Suspense fallback="loading...">
                {/* <ProductTypeFilter /> */}
              </Suspense>
            </div>

            {/* <div className="flex items-center gap-3">
              <Link href="/inventory/new">
                <Button
                  size={"lg"}
                  className={cn(
                    "h-10 bg-[#115e59] px-3 text-white hover:bg-main/80",
                  )}
                >
                  <CircleFadingPlus className="h-4 w-4" />
                  Nouveau produit
                </Button>
              </Link>
            </div> */}
          </div>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div>Loading orders...</div>}>
            <TableData data={recentOrders} columns={columns} />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverView;

const recentOrders: RecentOrders[] = [
  {
    id: "ORD1001",
    customer: "John Doe",
    items: 3,
    amount: 45.99,
    date: "2025-02-09",
    status: "DELIVERED",
    source: "WEB",
  },
  {
    id: "ORD1002",
    customer: "Jane Smith",
    items: 5,
    amount: 89.5,
    date: "2025-02-08",
    status: "SHIPPED",
    source: "POS",
  },
  {
    id: "ORD1003",
    customer: "Alice Johnson",
    items: 2,
    amount: 29.99,
    date: "2025-02-07",
    status: "PROCESSING",
    source: "WEB",
  },
  {
    id: "ORD1004",
    customer: "Bob Williams",
    items: 1,
    amount: 15.0,
    date: "2025-02-06",
    status: "CANCELLED",
    source: "POS",
  },
  {
    id: "ORD1005",
    customer: "Emma Brown",
    items: 4,
    amount: 64.75,
    date: "2025-02-05",
    status: "DELIVERED",
    source: "WEB",
  },
  {
    id: "ORD1006",
    customer: "David Lee",
    items: 2,
    amount: 39.99,
    date: "2025-02-04",
    status: "SHIPPED",
    source: "POS",
  },
  {
    id: "ORD1007",
    customer: "Sophia Miller",
    items: 6,
    amount: 112.0,
    date: "2025-02-03",
    status: "SHIPPED",
    source: "WEB",
  },
  {
    id: "ORD1008",
    customer: "Michael Johnson",
    items: 3,
    amount: 55.5,
    date: "2025-02-02",
    status: "FAILED",
    source: "POS",
  },
  {
    id: "ORD1009",
    customer: "Olivia Martinez",
    items: 1,
    amount: 19.99,
    date: "2025-02-01",
    status: "DELIVERED",
    source: "WEB",
  },
  {
    id: "ORD1010",
    customer: "James Anderson",
    items: 7,
    amount: 125.75,
    date: "2025-01-31",
    status: "FAILED",
    source: "POS",
  },
  {
    id: "ORD1011",
    customer: "Isabella Thomas",
    items: 4,
    amount: 78.9,
    date: "2025-01-30",
    status: "DELIVERED",
    source: "WEB",
  },
  {
    id: "ORD1012",
    customer: "William Garcia",
    items: 3,
    amount: 49.99,
    date: "2025-01-29",
    status: "DELIVERED",
    source: "POS",
  },
  {
    id: "ORD1013",
    customer: "Ethan Robinson",
    items: 5,
    amount: 99.5,
    date: "2025-01-28",
    status: "DELIVERED",
    source: "WEB",
  },
  {
    id: "ORD1014",
    customer: "Charlotte Lopez",
    items: 2,
    amount: 34.5,
    date: "2025-01-27",
    status: "CANCELLED",
    source: "POS",
  },
  {
    id: "ORD1015",
    customer: "Daniel Clark",
    items: 8,
    amount: 150.0,
    date: "2025-01-26",
    status: "DELIVERED",
    source: "WEB",
  },
  {
    id: "ORD1016",
    customer: "Ava Lewis",
    items: 1,
    amount: 12.99,
    date: "2025-01-25",
    status: "PROCESSING",
    source: "POS",
  },
  {
    id: "ORD1017",
    customer: "Mason Walker",
    items: 3,
    amount: 54.0,
    date: "2025-01-24",
    status: "DELIVERED",
    source: "WEB",
  },
  {
    id: "ORD1018",
    customer: "Lucas Young",
    items: 6,
    amount: 105.75,
    date: "2025-01-23",
    status: "DELIVERED",
    source: "POS",
  },
  {
    id: "ORD1019",
    customer: "Harper Hall",
    items: 2,
    amount: 42.5,
    date: "2025-01-22",
    status: "FAILED",
    source: "WEB",
  },
  {
    id: "ORD1020",
    customer: "Benjamin Allen",
    items: 4,
    amount: 79.99,
    date: "2025-01-21",
    status: "CANCELLED",
    source: "POS",
  },
];
