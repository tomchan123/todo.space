"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Logo from "@/components/Logo";

export default function Home() {
  const router = useRouter();

  /** TODO: check if user already has an account before redirecting */
  useEffect(() => {
    router.replace("/welcome");
  }, [router.replace]);

  return (
    <div className="flex flex-col justify-center items-center h-full gap-2">
      <Logo />
      <main>
        <p>Home Page</p>
      </main>
    </div>
  );
}
