import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "blue" | "gold" | "green" | "purple" | "orange" | "teal";
  badge?: string;
  className?: string;
}

const colorStyles = {
  blue: {
    bg: "bg-navy/10",
    icon: "bg-navy text-primary-foreground",
    hover: "hover:border-navy/30",
  },
  gold: {
    bg: "bg-gold/10",
    icon: "bg-gold text-accent-foreground",
    hover: "hover:border-gold/30",
  },
  green: {
    bg: "bg-emerald-500/10",
    icon: "bg-emerald-500 text-primary-foreground",
    hover: "hover:border-emerald-500/30",
  },
  purple: {
    bg: "bg-violet-500/10",
    icon: "bg-violet-500 text-primary-foreground",
    hover: "hover:border-violet-500/30",
  },
  orange: {
    bg: "bg-orange-500/10",
    icon: "bg-orange-500 text-primary-foreground",
    hover: "hover:border-orange-500/30",
  },
  teal: {
    bg: "bg-teal-500/10",
    icon: "bg-teal-500 text-primary-foreground",
    hover: "hover:border-teal-500/30",
  },
};

export const ServiceCard = ({
  title,
  description,
  icon: Icon,
  color,
  badge,
  className,
}: ServiceCardProps) => {
  const styles = colorStyles[color];

  return (
    <button
      className={cn(
        "group relative flex flex-col items-start rounded-2xl border border-border bg-card p-6 text-left shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        styles.hover,
        className
      )}
    >
      {badge && (
        <span className="absolute -top-2 right-4 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-accent-foreground">
          {badge}
        </span>
      )}

      <div
        className={cn(
          "mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
          styles.icon
        )}
      >
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">
        {title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      <div className="mt-4 flex items-center text-sm font-medium text-primary transition-colors group-hover:text-navy-light">
        Acceder
        <svg
          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </button>
  );
};
