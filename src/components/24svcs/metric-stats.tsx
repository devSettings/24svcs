import type React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";

interface StatCardProps {
  number: string;
  text: string;
  showStar?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  number,
  text,
  showStar = false,
}) => {
  return (
    <Card className="relative border-0 bg-transparent text-center after:absolute after:-right-4 after:top-1/4 after:hidden after:h-1/2 after:w-px after:bg-zinc-700 after:content-[''] last:after:hidden lg:after:block">
      <CardContent className="pt-6">
        <div className="mb-2 flex items-center justify-center gap-2 text-4xl font-bold text-white">
          {number}
          {showStar && <Star className="h-6 w-6 fill-white" />}
        </div>
        <div className="text-zinc-400">{text}</div>
      </CardContent>
    </Card>
  );
};

const MetricsStats: React.FC = () => {
  return (
    <div className="w-full bg-black px-4 py-24 text-white">
      <div className="mx-auto max-w-6xl space-y-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
          Ready to build your marketplace?
        </h2>
        <p className="mx-auto max-w-3xl text-base text-zinc-400 lg:text-xl">
          Transform your business with our powerful marketplace platform
          designed to connect buyers and sellers worldwide.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <StatCard number="1M+" text="Active sellers" />
          <StatCard number="$56.5B" text="Sales generated" />
          <StatCard number="4.8" text="Customer satisfaction" showStar />
          <StatCard number="200+" text="Countries reached" />
        </div>
      </div>
    </div>
  );
};

export default MetricsStats;
