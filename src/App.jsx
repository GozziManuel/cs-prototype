import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import DefaultLayout from "./Layout/DefaultLayout";
import Triplist from "./pages/Triplist";
import UserListPage from "./pages/UserListPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/trips" element={<Triplist />} />
          <Route path="/trips/:id" element={<UserListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
