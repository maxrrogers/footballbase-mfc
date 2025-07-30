// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold">FootballBase</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Dashboard</Link>
        </div>
      </nav>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
