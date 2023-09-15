import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Homepage, Error, Capsules, Cores, Dragons } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/capsules" element={<Capsules />}></Route>
        <Route path="/cores" element={<Cores />}></Route>
        <Route path="/dragons" element={<Dragons/>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
