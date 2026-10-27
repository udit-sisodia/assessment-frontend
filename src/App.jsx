import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SearchByStatePage from "./pages/SearchByStatePage";
import SearchPage from "./pages/SearchPage";
import AddIncidentPage from "./pages/AddIncidentPage";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/by-state" element={<SearchByStatePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/add" element={<AddIncidentPage  />} />
        </Routes>
      </main>
    </>
  );
}
