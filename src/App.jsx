import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
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

export default App;
