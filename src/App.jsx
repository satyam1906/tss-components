import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppBar from "./components/Navbar";
import ProductCardContainer from "./components/ProductCardContainer";
import ProductPage from "./components/ProductPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CarouselCard from "./components/CarouselCard";
import Home from "./components/pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./components/Dashboard";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
      {(window.location.pathname !== '/signin' && window.location.pathname !== '/signup') && <AppBar />}
        <Routes>
          {/* <AppBar /> */}
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<ProductCardContainer />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Dashboard/>} />
          <Route path="/profile-page" element={<ProfilePage/>} />
        </Routes>
      </BrowserRouter>
      

    </>
  );
}

export default App;
