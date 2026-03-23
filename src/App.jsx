export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
