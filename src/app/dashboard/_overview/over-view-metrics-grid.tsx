import { SearchCheck } from "lucide-react";
import { Metric } from "~/types/metric";
import MetricCard from "../components/metric-card";
import {
  IconBasketCheck,
  IconShirt,
  IconTax,
  IconUsers,
} from "@tabler/icons-react";

const OverViewMetricsGrid = () => {
  const metrics: Metric[] = [
    {
      title: "Sales Count",
      count: 200,
      icon: IconBasketCheck,
      iconStyle: "border-green-500 text-green-500", // Updated to a softer green
    },
    {
      title: "Total Revenue",
      count: 10,
      icon: IconTax,
      iconStyle: "border-orange-500 text-orange-500", // Changed to orange for a financial feel
    },
    {
      title: "Products Sold",
      count: 10,
      icon: IconShirt,
      iconStyle: "border-blue-500 text-blue-500", // Changed to blue for a more neutral, product-focused color
    },
    {
      title: "New Customers",
      count: 10,
      icon: IconUsers,
      iconStyle: "border-purple-500 text-purple-500", // Changed to purple to signify growth and newness
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
