import { Button as HeadlessButton } from "@headlessui/react";
import { tv, type VariantProps } from "tailwind-variants";

const ButtonVariants = tv({
  base: "flex items-center justify-center rounded-md cursor-pointer",
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground hover:bg-primary/80",
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

type ButtonProps = ButtonVariants & React.PropsWithChildren;

export function Button(props: ButtonProps) {
  return (
    <HeadlessButton className={ButtonVariants(props)}>
      {props.children}
    </HeadlessButton>
  );
}
