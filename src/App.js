import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      {/* Anything put above or bellow the Routes will show up on all the pages */}
      <nav>Navbar</nav>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          {/* This will catch any url request that doesn't match out routes */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <footer>Footer</footer>
    </BrowserRouter>
  );
}

export default App;
