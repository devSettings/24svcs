"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { BorderBeam } from "~/components/magicui/border-beam";

import { Card, CardContent } from "~/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

const chartData = [
  { product: "Laptop", sales: 1200, fill: "hsl(var(--chart-1))" },
  { product: "Smartphone", sales: 950, fill: "hsl(var(--chart-2))" },
  { product: "Headphones", sales: 850, fill: "hsl(var(--chart-3))" },
  { product: "Tablet", sales: 650, fill: "hsl(var(--chart-4))" },
  { product: "Smartwatch", sales: 450, fill: "hsl(var(--chart-5))" },
];

const chartConfig = {
  sales: {
    label: "Sales",
  },
  Laptop: {
    label: "Laptop",
    color: "hsl(var(--chart-1))",
  },
  Smartphone: {
    label: "Smartpho",
    color: "hsl(var(--chart-2))",
  },
  Headphones: {
    label: "Headphones",
    color: "hsl(var(--chart-3))",
  },
  Tablet: {
    label: "Tablet",
    color: "hsl(var(--chart-4))",
  },
  Smartwatch: {
    label: "Smartwatch",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function TopBestSellingProducts() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Card className="relative border border-muted/30 bg-muted/20 p-2">
      <CardContent className="h-full p-2">
        <div className="h-full rounded-lg border border-dashed border-zinc-900 bg-muted/10 p-4">
          <div className="mb-10 space-y-2">
            <h2 className="text-xl font-semibold">Best Selling Products</h2>
            <p className="font-mono text-xs text-muted-foreground">
              Top 5 most selling products
            </p>
          </div>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="product"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis axisLine={false} tickLine={false} tickMargin={10} />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Bar
                  dataKey="sales"
                  strokeWidth={2}
                  radius={8}
                  activeBar={({ ...props }) => {
                    return (
                      <Rectangle
                        {...props}
                        fillOpacity={0.8}
                        stroke={props.payload.fill}
                        strokeDasharray={4}
                        strokeDashoffset={4}
                      />
                    );
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
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
    </Card>
  );
}
