import * as React from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "radar";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-slate-50 text-slate-900 hover:bg-slate-50/90": variant === "default",
            "border border-white/10 bg-transparent hover:bg-white/10 text-slate-100": variant === "outline",
            "hover:bg-white/10 text-slate-100": variant === "ghost",
            "bg-blue-900/40 text-blue-400 border border-blue-500/50 hover:bg-blue-900/60 shadow-[0_0_15px_rgba(37,99,235,0.2)]": variant === "radar",
            "h-9 px-4 py-2": size === "default",
            "h-8 rounded-md px-3 text-xs": size === "sm",
            "h-10 rounded-md px-8": size === "lg",
            "h-9 w-9": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
