import React,{ useContext } from "react";
import { ContextShirtProvider } from "../Context/ContextShirt.Component";

const Shirt=()=>{
    const { shirt, setShirt } = useContext(ContextShirtProvider);

    return(<div>
      <p>shirt :</p>  
            {shirt.map((item)=>
            <section>   
          <h3>{item.ClothModel}</h3> 
          <h5>{item.IsShort}</h5>
          <h5>{item.Amount}</h5>
          <h5>{item.IsDreyfit}</h5> 
          <h5>{item.Gender}</h5> 
          <h5>{item.Price}</h5> 
          <h5>{item.Company}</h5>
          <img src={item.Img} width="50px" height="50px"/>
           </section> )}
        
    </div>);
};
export default Shirt;