import { Field as HeadlessField } from "@headlessui/react";
import { tm } from "@/lib/utils";

export type FieldProps = React.ComponentProps<typeof HeadlessField>;

export default function Field({ children, className, ...props }: FieldProps) {
  return (
    <HeadlessField {...props} className={tm("flex flex-col gap-1", className)}>
      {children}
    </HeadlessField>
  );
}
