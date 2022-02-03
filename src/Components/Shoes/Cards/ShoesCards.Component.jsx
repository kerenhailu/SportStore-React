import React, { useContext } from "react";
import { CreateContextProvider } from "../../Context/ContextShoes.Component";
import ShoesCard from "./ShoesCard.component";
const ShoesCards = () => {
  const { shoes, setShoes } = useContext(CreateContextProvider);
  console.log(shoes);
  return (
    <div>
      {shoes.map((ShoesItem) => (
        <ShoesCard ShoesItem={ShoesItem} />
      ))}
    </div>
  );
};
export default ShoesCards;
