import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { Metric } from "../../../types/metric";

interface Props {
  metric: Metric;
}

const MetricCard = async ({ metric }: Props) => {
  return (
    <div className="rounded-xl border border-zinc-900/50 bg-muted/20 p-2">
      <Card className="rounded-md border border-dashed border-zinc-900/50 bg-muted/10">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xs font-medium text-muted-foreground">
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
          <div className="text-2xl font-semibold">
            {metric.count.toLocaleString()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetricCard;
