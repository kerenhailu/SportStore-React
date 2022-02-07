import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pants from "./Pants/Pants.Component";
import Footer from "./Parts/Footer/Footer.Component";
import Haeder from "./Parts/Header/Header.Component";
import NavBar from "./Parts/NavBar/NavBar.Component";
import Shirt from "./Shirt/Shirt.Component";
import Shoes from "./Shoes/Shoes.Component";
const RouterApp = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Haeder/>
          <Shoes/>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/Shirt" element={<Shirt />} />
        <Route exact path="/Pants" element={<Pants />} />
        <Route exact path="/Shoes" element={<Shoes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default RouterApp;
