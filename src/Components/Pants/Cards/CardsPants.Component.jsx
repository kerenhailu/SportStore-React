import React, { useContext } from "react";
import { ContextProviderPants } from "../../Context/ContextPants.Component";
import CardPants from "./CardPants.Component";

const CardsPants = () => {
  const { pants, setPants } = useContext(ContextProviderPants);
  return (
    <div>
      {pants.map((itemPants) => (
        <CardPants itemPants={itemPants} />
      ))}
    </div>
  );
};
export default CardsPants;
