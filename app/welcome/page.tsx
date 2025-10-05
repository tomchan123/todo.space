import type { Metadata } from "next";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Welcome | todo.space",
};

export default function WelcomePage() {
  return (
    <div className="flex flex-col h-full justify-center items-center gap-2">
      <Logo />
      <main>Welcome Page</main>
    </div>
  );
}
