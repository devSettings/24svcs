import { SearchCheck } from "lucide-react";
import MetricCard from "../../components/metric-card";
import { Metric } from "../../../../types/metric";
const OverViewMetricsGrid = () => {
  const metrics: Metric[] = [
    {
      title: "Sales Count",
      count: 200,
      icon: SearchCheck,

      iconStyle: "border-emerald-600 text-emerald-600",
    },
    {
      title: "Total Revenue",
      count: 10,
      icon: SearchCheck,

      iconStyle: "border-yellow-600 text-yellow-600",
    },
    {
      title: "Products Sold",
      count: 10,
      icon: SearchCheck,

      iconStyle: "border-indigo-600 text-indigo-600",
    },
    {
      title: "New Customers",
      count: 10,
      icon: SearchCheck,

      iconStyle: "border-indigo-600 text-indigo-600",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} metric={metric} />
      ))}
    </div>
  );
};

export default OverViewMetricsGrid;
