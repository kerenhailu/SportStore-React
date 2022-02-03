import React, { useContext } from "react";
import ContextShirt, {
  ContextShirtProvider,
} from "../Context/ContextShirt.Component";
import CardsShirt from "./Cards/CardsShirt.Component";

const Shirt = () => {
  return (
    <ContextShirt>
      <div>
        <p>shirt :</p>
        <CardsShirt />
      </div>
    </ContextShirt>
  );
};
export default Shirt;
