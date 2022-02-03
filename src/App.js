import "./App.css";
import ContextPants from "./Components/Context/ContextPants.Component";
import ContextShirt from "./Components/Context/ContextShirt.Component";
import ContextShoes from "./Components/Context/ContextShoes.Component";
import SportsEquipmentContext from "./Components/Context/SportsEquipmentContext.Component";
import Pants from "./Components/Pants/Pants.Component";
import Shirt from "./Components/Shirt/Shirt.Component";
import Shoes from "./Components/Shoes/Shoes.Component";
import SportsEquipment from "./Components/SportsEquipment/SportsEquipment.Component";

function App() {

  return (
    <div className="App">
      <h1>App : </h1>
      <ContextShoes>
      <Shoes/>
      </ContextShoes>
      <ContextPants>
        <Pants/>
      </ContextPants>
      <ContextShirt>
        <Shirt/>
      </ContextShirt>
      <SportsEquipmentContext>
        <SportsEquipment/>
      </SportsEquipmentContext>
    </div>
  );
}

export default App;
