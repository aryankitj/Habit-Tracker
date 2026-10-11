import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "ghost-destructive";

type Buttonprops = {
  // children:ReactNode //Already included in ComponentProps
  variant?: Variant;
} & ComponentProps<"button">;

export function Button({
  variant = "primary",
  className,
  ...props
}: Buttonprops) {
  return (
    <button
      {...props}
      className={twMerge(
        ` rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed ${getVariantStyles(variant)}  ${className}`,
      )}
    >
      {/* {children} */}
    </button>
  );
}

function getVariantStyles(variant: Variant) {
  switch (variant) {
    case "primary":
      return "bg-violet-600 hover:bg-violet-400 transition-colors";
    case "secondary":
      return "bg-zinc-800 hover:bg-zinc-700 transition-colors";
    case "ghost-destructive":
      return "bg-transparent text-red-500 hover:text-black hover:bg-red-800 transition-colors";
    default:
      throw new Error(`Unknown variant: ${variant}`);
  }
}
