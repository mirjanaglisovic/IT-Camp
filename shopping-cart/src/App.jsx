import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./commponents/Header/Header";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Footer from "./commponents/Footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <main className=""></main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
