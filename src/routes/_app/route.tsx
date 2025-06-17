// IMPORTANT
// sert de layout à toutes les pages de l'application
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <main className="container py-6 md:py-12 grow">
        <Outlet />
      </main>
    </>
  );
}
