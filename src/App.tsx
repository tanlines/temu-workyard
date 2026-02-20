import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Workyard from "./pages/Workyard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/workyard" replace />} />
        <Route path="/workyard" element={<Workyard />} />
      </Routes>
    </BrowserRouter>
  );
}
