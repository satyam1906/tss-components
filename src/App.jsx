import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppBar from "./components/Navbar";
import ProductCardContainer from "./components/ProductCardContainer";
import ProductPage from "./components/ProductPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/product" element={<ProductCardContainer />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/SingIn" element={<SignIn />} />
          <Route path="/SingUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
