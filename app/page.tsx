import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-2">
      <Logo />
      <main>
        <p>Home Page</p>
      </main>
    </div>
  );
}
