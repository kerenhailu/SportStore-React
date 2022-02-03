import React ,{ useContext } from "react";
import { CreateContextProvider } from "../Context/ContextShoes.Component";

const Shoes=()=>{
    const {shoes, setShoes} = useContext(CreateContextProvider);

return(<div>
{/* <button onClick={GetShoes}>show shoes</button> */}
      <section>
        {shoes.map((item) => 
          <p>Company :{item.Company} </p>
        )}
      </section>
</div>)
}
export default Shoes;