import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppBar from "./components/Navbar";
import ProductCardContainer from "./components/ProductCardContainer";
import ProductPage from "./components/ProductPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CarouselCard from "./components/CarouselCard";
<<<<<<< HEAD
import Home from "./components/pages/Home";
=======
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 1c6d0a3f6bfd97370a61d34ec681d5f0d91af9a8

function App() {
  return (
    <>
      <BrowserRouter>
<<<<<<< HEAD
      {(window.location.pathname !== '/signin' && window.location.pathname !== '/signup') && <AppBar />}
        <Routes>
          {/* <AppBar /> */}
          <Route path="/" element={<Home/>} />
=======
      {window.location.pathname !== '/signin' && <AppBar />}
          {/* <AppBar /> */}
        <Routes>
>>>>>>> 1c6d0a3f6bfd97370a61d34ec681d5f0d91af9a8
          <Route path="/product" element={<ProductCardContainer />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <CarouselCard/>

    </>
  );
}

export default App;
