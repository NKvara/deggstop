import {Outlet} from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
