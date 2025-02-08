import { cn } from "~/lib/utils";
import type React from "react"; // Import React
import {
  IconLayoutDashboard,
  IconDeviceMobile,
  IconDevices,
  IconCreditCard,
  IconBoxSeam,
  IconChartBar,
  IconHeadset,
  IconPalette,
} from "@tabler/icons-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Easy Marketplace Setup",
      description:
        "Launch your online store quickly with our intuitive marketplace builder.",
      icon: <IconLayoutDashboard />,
    },
    {
      title: "Seamless POS Integration",
      description:
        "Connect your physical store with our powerful Point of Sale system.",
      icon: <IconDeviceMobile />,
    },
    {
      title: "Multi-channel Selling",
      description:
        "Sell across web, mobile, and social platforms with unified inventory.",
      icon: <IconDevices />,
    },
    {
      title: "Secure Payments",
      description:
        "Process transactions safely with our built-in payment gateway.",
      icon: <IconCreditCard />,
    },
    {
      title: "Inventory Management",
      description:
        "Keep track of your stock in real-time across all sales channels.",
      icon: <IconBoxSeam />,
    },
    {
      title: "Analytics Dashboard",
      description:
        "Gain insights into your sales performance with detailed reports.",
      icon: <IconChartBar />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our dedicated team is always available to help you and your customers.",
      icon: <IconHeadset />,
    },
    {
      title: "Customizable Themes",
      description: "Design your marketplace to match your brand identity.",
      icon: <IconPalette />,
    },
  ];
  return (
    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col py-10 dark:border-neutral-800 lg:border-r",
        (index === 0 || index === 4) && "dark:border-neutral-800 lg:border-l",
        index < 4 && "dark:border-neutral-800 lg:border-b",
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-cyan-500 dark:bg-neutral-700" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  );
};
