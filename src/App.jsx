import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import DefaultLayout from "./Layout/DefaultLayout";
import Triplist from "./pages/Triplist";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/trips" element={<Triplist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
