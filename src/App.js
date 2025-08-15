import { Route, BrowserRouter, Routes } from "react-router-dom";
import Iedconfig from "./pages/IedConfig/Iedconfig";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Iedconfig />} />
      </Routes>
    </BrowserRouter>
  );
}