import { useReducer, useState } from "react";
import "./App.css";
import { up } from "./Action/CountAction";
import ContextPants from "./Components/Context/ContextPants.Component";
import ContextShirt from "./Components/Context/ContextShirt.Component";
import ContextShoes from "./Components/Context/ContextShoes.Component";
import SomeReducer from "./Reducer/Count-Reducer";
import Footer from "./Components/Parts/Footer/Footer.Component";
import Haeder from "./Components/Parts/Header/Header.Component";
import NavBar from "./Components/Parts/NavBar/NavBar.Component";
import Shirt from "./Components/Shirt/Shirt.Component";
import Shoes from "./Components/Shoes/Shoes.Component";
import SportsEquipment from "./Components/SportsEquipment/SportsEquipment.Component";
import RouterApp from "./Components/RouterApp";

// const SomeReducer = (state, action) => {
//   switch (action.type) {
//     case "up":
//       return state + 1;
//     case "dwon":
//       return state - 1;
//     case "reset":
//       return 0;
//       case "plus":
//         return state + action.payload;
//     default:
//       return state;
//   }
// };
function App() {
  const [countInput,setCountInput] = useState(0);
  const [count, dispatch] = useReducer(SomeReducer, 0);
const UpCount=()=>{
  dispatch(up())
}
const DwonCount=()=>{
dispatch({type:"dwon"})
}
const ResetCount=()=>{
dispatch({type:"reset"})
}
const PlusCount=()=>{
  dispatch({type:"plus",payload:countInput})
}
  return (
    <div className="App">
      {/* {count}
      <button onClick={UpCount}>up</button>
      <button onClick={DwonCount}>down</button>
      <button onClick={ResetCount}>reset</button>
      <input onChange={(event) => setCountInput(event.target.value)} type="number" />
      <button onClick={PlusCount}>Plus</button> */}
      {/* <Pants /> */}
      <RouterApp/>
      {/* <NavBar />
      <Haeder /> */}
      {/* <Shoes /> */}
      {/* <Footer /> */}
      {/* <RouterApp/> */}
      {/* <Shirt /> */}
      {/* <SportsEquipmentContext>
        <SportsEquipment/>
      </SportsEquipmentContext> */}
    </div>
  );
}

export default App;
