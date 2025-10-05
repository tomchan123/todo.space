import { Label as HeadlessLabel } from "@headlessui/react";
import { tm } from "@/lib/utils";

export type LabelProps = React.PropsWithChildren<{ className?: string }>;

export default function Label({ children, className }: LabelProps) {
  return (
    <HeadlessLabel
      className={tm("font-semibold text-base text-foreground", className)}
    >
      {children}
    </HeadlessLabel>
  );
}
