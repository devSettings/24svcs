import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";

import { Globe, Smartphone, StoreIcon } from "lucide-react";
// import { FaStoreAlt } from "react-icons/fa";
import { Source } from "~/types/orders";
import { IconDevices } from "@tabler/icons-react";

interface OrderSourceBadgeProps {
  source: Source;
}

const sourceConfig: Record<
  Source,
  { label: string; icon: React.ElementType; className: string }
> = {
  WEB: {
    label: "Web",
    icon: Globe,
    className:
      "bg-cyan-500/20 text-cyan-400 border-cyan-500/50 hover:bg-cyan-500/30 hover:border-cyan-400",
  },

  POS: {
    label: "POS",
    icon: IconDevices,
    className:
      "bg-slate-500/20 text-slate-400 border-slate-500/50 hover:bg-slate-500/30 hover:border-slate-400",
  },
};

export default function OrderSourceBadge({ source }: OrderSourceBadgeProps) {
  const {
    label,
    icon: Icon,
    className,
  } = sourceConfig[source] || sourceConfig.POS;

  return (
    <Badge
      variant="outline"
      className={cn(
        "border-[0.1px] px-2 py-1.5 text-xs font-medium transition-colors duration-200",
        "shadow-lg shadow-black/10",
        className,
      )}
    >
      <Icon className="mr-2 h-4 w-4 stroke-current" />
      {label}
    </Badge>
  );
}
