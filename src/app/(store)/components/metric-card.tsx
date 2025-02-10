import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { Metric } from "../../../types/metric";

interface Props {
  metric: Metric;
}

const MetricCard = async ({ metric }: Props) => {
  return (
    <Card className="border-zinc-900 bg-[#0a0a0a]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs font-semibold text-muted-foreground">
          {metric.title}
        </CardTitle>
        <div
          className={cn(
            "rounded-sm p-1 text-xs font-medium shadow-lg transition-colors duration-200",
            "cursor-pointer rounded-full border border-muted/50 bg-muted/50 bg-white dark:bg-black",
            metric.iconStyle,
          )}
        >
          <metric.icon strokeWidth={1.5} size={20} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-2 text-2xl font-bold">
          {metric.count.toLocaleString()}
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
