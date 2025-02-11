import { CircleFadingPlus } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { DateRangePicker } from "~/components/date-range-picker";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { cn } from "~/lib/utils";
import { RecentOrders } from "~/types/orders";
import LatestInvoices from "./_overview/latest-orders";
import OverViewMetricsGrid from "./_overview/over-view-metrics-grid";
import { TopBestSellingProducts } from "./_overview/top-best-products";
import TableData from "./components/table-data";
import OrderSourceBadge from "./orders/_components/order-source-badge";
import OrderStatusBadge from "./orders/_components/order-status-badge";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

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
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-2 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <DateRangePicker />
              <Button className="bg-cyan-600">Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6">
              <OverViewMetricsGrid />
              <div className="grid w-full grid-cols-2 gap-4">
                <TopBestSellingProducts />
                <LatestInvoices latestInvoices={latestOrders} />
              </div>
              <Card className="flex-1 overflow-hidden border border-muted/40 bg-gray-50 shadow-none dark:bg-muted/20">
                <CardHeader className="flex flex-row justify-between">
                  <div className="">
                    <CardTitle className="text-2xl">
                      Recent Transactions
                    </CardTitle>
                    <CardDescription>
                      List of the recent transactions made from all channels
                    </CardDescription>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center gap-3">
                      <Link href="/inventory/new">
                        <Button
                          variant="outline"
                          size={"lg"}
                          className={cn("h-10 bg-cyan-700 px-3 text-black")}
                        >
                          <CircleFadingPlus className="h-4 w-4" />
                          Add Transactions
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Suspense fallback={<div>Loading orders...</div>}>
                    <TableData data={recentOrders} columns={columns} />
                  </Suspense>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics">Your Store Analitics</TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default OverView;

const recentOrders: RecentOrders[] = [
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
];
export type LatestOrders = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

export const latestOrders: LatestOrders[] = [
  {
    id: "ORD2001",
    name: "John Doe",
    image_url: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "johndoe@example.com",
    amount: "$45.99",
  },
  {
    id: "ORD2002",
    name: "Jane Smith",
    image_url: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "janesmith@example.com",
    amount: "$89.50",
  },
  {
    id: "ORD2003",
    name: "Alice Johnson",
    image_url: "https://randomuser.me/api/portraits/women/3.jpg",
    email: "alicejohnson@example.com",
    amount: "$29.99",
  },
  {
    id: "ORD2004",
    name: "Bob Williams",
    image_url: "https://randomuser.me/api/portraits/men/4.jpg",
    email: "bobwilliams@example.com",
    amount: "$15.00",
  },
  {
    id: "ORD2005",
    name: "Emma Brown",
    image_url: "https://randomuser.me/api/portraits/women/5.jpg",
    email: "emmabrown@example.com",
    amount: "$64.75",
  },
];
