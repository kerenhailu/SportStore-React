import React, { useContext } from "react";
import { CreateContextProvider } from "../../Context/ContextShoes.Component";
import Loading from "../../Loading/Loading.Component";
import ShoesCard from "./ShoesCard.component";
const ShoesCards = () => {
  const { shoes, isLoading } = useContext(CreateContextProvider);
  console.log(shoes);
  return (
    <div>
      {
        isLoading?<Loading/>:
      shoes.map((ShoesItem) => (
        <ShoesCard ShoesItem={ShoesItem} />
      ))}
    </div>
  );
};
export default ShoesCards;
