import "./App.css";
import ContextPants from "./Components/Context/ContextPants.Component";
import ContextShirt from "./Components/Context/ContextShirt.Component";
import ContextShoes from "./Components/Context/ContextShoes.Component";
import Footer from "./Components/Parts/Footer/Footer.Component";
import Haeder from "./Components/Parts/Header/Header.Component";
import NavBar from "./Components/Parts/NavBar/NavBar.Component";
import Shirt from "./Components/Shirt/Shirt.Component";
import Shoes from "./Components/Shoes/Shoes.Component";
import SportsEquipment from "./Components/SportsEquipment/SportsEquipment.Component";

function App() {
  return (
    <div className="App">
   
      {/* <Pants /> */}
      <Haeder/>
      <NavBar/>
      <Shoes />
      <Footer/>
       {/* <RouterApp/> */}
      {/* <Shirt /> */}
      {/* <SportsEquipmentContext>
        <SportsEquipment/>
      </SportsEquipmentContext> */}
    </div>
  );
}

export default App;
