import React, { useContext } from "react";
import { ContextProviderPants } from "../Context/ContextPants.Component";

const Pants = () => {
  const { pants, setPants } = useContext(ContextProviderPants);
  return (
    <div>
      <p>Pants :</p>
      {pants.map((item) => 
        <section>
         <h3>{item.ClothModel}</h3> 
          <h5>{item.IsShort}</h5>
          <h5>{item.Amount}</h5>
          <h5>{item.IsDreyfit}</h5> 
          <h5>{item.Gender}</h5> 
          <h5>{item.Price}</h5> 
          <h5>{item.Company}</h5>
          <img src={item.Img} width="50px" height="50px"/>
        </section>
      )}
    </div>
  );
};
export default Pants;
