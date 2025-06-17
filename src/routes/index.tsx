import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <main className="container py-6 md:py-12 grow">
        <h1>Home</h1>

        <p>Welcome to the home page!</p>
      </main>
    </>
  );
}
