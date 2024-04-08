import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppBar from "./components/Navbar";
import ProductCardContainer from "./components/ProductCardContainer";
import ProductPage from "./components/ProductPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CarouselCard from "./components/CarouselCard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
      {window.location.pathname !== '/signin' && <AppBar />}
          {/* <AppBar /> */}
        <Routes>
          <Route path="/product" element={<ProductCardContainer />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <CarouselCard/>

    </>
  );
}

export default App;
