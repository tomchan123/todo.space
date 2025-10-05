import { Button as HeadlessButton } from "@headlessui/react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { tm } from "@/lib/utils";

const ButtonVariants = tv({
  base: "flex items-center justify-center rounded-3xl cursor-pointer font-semibold text-sm",
  variants: {
    variant: {
      primary:
        "bg-primary text-primary-foreground data-[hover]:bg-primary/80 data-[active]:bg-primary/80",
      outline:
        "bg-transparent text-foreground data-[hover]:bg-background/10 data-[active]:bg-background/10 border-border border",
    },
    size: {
      md: "h-9 px-4",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});
type ButtonVariants = VariantProps<typeof ButtonVariants>;

type ButtonProps = ButtonVariants &
  React.ComponentProps<typeof HeadlessButton> & {
    className?: string;
    children?: React.ReactNode;
  };

export function Button({
  children,
  className,
  size,
  variant,
  ...props
}: ButtonProps) {
  return (
    <HeadlessButton
      {...props}
      className={tm(ButtonVariants({ variant, size }), className)}
    >
      {children}
    </HeadlessButton>
  );
}
