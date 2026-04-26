import "../index.css";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="root">
      <header>
        <h1>Country Facts</h1>

        <nav>
          <Link to="/">Countries</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
