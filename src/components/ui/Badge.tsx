import * as React from "react";
import { cn } from "@/utils/cn";

export type BadgeProps = React.ComponentProps<"div"> & {
  variant?: "default" | "secondary" | "destructive" | "outline" | "radar";
};

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",
        {
          "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80": variant === "default",
          "border-transparent bg-slate-800 text-slate-100 hover:bg-slate-800/80": variant === "secondary",
          "border-transparent bg-red-900 text-slate-50 hover:bg-red-900/80": variant === "destructive",
          "text-slate-100 border-white/20": variant === "outline",
          "border-blue-500/50 bg-blue-900/40 text-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.2)]": variant === "radar",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
