export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <main>
        <h1>
          Welcome to{" "}
          <span className="italic font-mono before:[clip-path:rect(0_100%_14px_0)] before:-left-1 before:text-shadow-lg before:text-shadow-blue-500 before:content-['todo.space'] before:absolute before:bg-background after:[clip-path:rect(70%_100%_100%_0%)] after:left-1 after:text-shadow-lg after:text-shadow-blue-500 after:content-['todo.space'] after:absolute after:bg-background relative text-3xl">
            todo.space
          </span>
        </h1>
      </main>
    </div>
  );
}
