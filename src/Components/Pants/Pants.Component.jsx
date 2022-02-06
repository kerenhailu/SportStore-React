import React from "react";
import  ContextProviderPants  from "../Context/ContextPants.Component";

const Pants = () => {
  return (
    <ContextProviderPants>
      <div className="Main">
      <p>Pants :</p> 
    </div>
    </ContextProviderPants> 
  );
};
export default Pants;
