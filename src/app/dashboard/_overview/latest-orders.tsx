import clsx from "clsx";
import Image from "next/image";
import { inter } from "~/app/layout";
import { BorderBeam } from "~/components/magicui/border-beam";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { LatestOrders } from "~/types/orders";

export default async function LatestInvoices({
  latestInvoices,
}: {
  latestInvoices: LatestOrders[];
}) {
  return (
    <Card className="relative border border-zinc-900/50 bg-muted/20 p-2">
      {/* <CardHeader>
        <CardTitle>Best Selling Products</CardTitle>
        <CardDescription>Top 5 most selling products</CardDescription>
      </CardHeader> */}
      <CardContent className="p-2">
        <div className="rounded-lg border border-dashed border-zinc-900 bg-muted/10 p-4">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
                className={clsx(
                  "flex flex-row items-center justify-between py-3",
                  {
                    "border-t border-zinc-900": i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {invoice.name}
                    </p>
                    <p className="hidden text-xs text-muted-foreground sm:block">
                      {invoice.email}
                    </p>
                  </div>
                </div>
                <p
                  className={`${inter.className} truncate text-sm font-medium md:text-base`}
                >
                  {invoice.amount}
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>

      {/* <BorderBeam
        duration={6}
        size={400}
        className="from-transparent via-red-500 to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        className="from-transparent via-cyan-500 to-transparent"
      /> */}
      {/* <BorderBeam duration={8} size={100} /> */}
    </Card>
  );
}
