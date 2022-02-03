import React, { useContext } from "react";
import { ContextShirtProvider } from "../../Context/ContextShirt.Component";
import CardShirt from "./CardShirt.Component";

const CardsShirt = () => {
  const { shirt, setShirt } = useContext(ContextShirtProvider);

  return (
    <div>
      {shirt.map((item) => (
       <CardShirt item={item}/>
      ))}
    </div>
  );
};
export default CardsShirt;
