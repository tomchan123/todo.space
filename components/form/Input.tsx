import { Input as HeadlessInput } from "@headlessui/react";
import { tm } from "@/lib/utils";

export type InputProps = React.ComponentProps<typeof HeadlessInput> &
  React.HTMLProps<HTMLInputElement>;

export default function Inputs({ className, ...props }: InputProps) {
  return (
    <HeadlessInput
      {...props}
      className={tm(
        "border-border border h-9 px-4 rounded-3xl placeholder:text-sm",
        className
      )}
    />
  );
}
