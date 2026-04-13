import type { ButtonHTMLAttributes, ReactNode } from "react";

const variantClass = {
  navy: "border-white/45 bg-[rgba(3,0,51,0.78)] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_4px_20px_rgba(3,0,51,0.45)] [&>span]:[text-shadow:0_1px_1px_rgba(0,0,0,0.28)]",
  azure:
    "border-white/50 bg-[rgba(1,148,236,0.82)] text-[#030033] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.48),0_4px_20px_rgba(1,148,236,0.38)] [&>span]:[text-shadow:0_1px_0_rgba(255,255,255,0.4)]",
  brand:
    "border-white/42 bg-[rgba(0,86,161,0.82)] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.32),0_4px_20px_rgba(0,86,161,0.42)] [&>span]:[text-shadow:0_1px_1px_rgba(0,0,0,0.22)]",
} as const;

export type GlassCtaVariant = keyof typeof variantClass;

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
  variant: GlassCtaVariant;
  children: ReactNode;
};

export default function GlassCtaButton({
  variant,
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center rounded-[10px] border p-[10px] backdrop-blur-md backdrop-saturate-150 motion-safe:transition-[transform,box-shadow,filter] motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:brightness-[1.06] motion-safe:active:translate-y-0 motion-safe:active:scale-[0.99] ${variantClass[variant]} ${className}`}
      {...rest}
    >
      <span className="relative font-[inherit] leading-[inherit]">
        {children}
      </span>
    </button>
  );
}
