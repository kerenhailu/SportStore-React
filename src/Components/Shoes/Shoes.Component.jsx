import ContextShoes from "../Context/ContextShoes.Component";
import ShoesCards from "./Cards/ShoesCards.Component";

const Shoes=()=>{
return(<div className="Main">
      <ContextShoes>
          <h1>Shoes:</h1>
          <ShoesCards/>
      </ContextShoes>
</div>)
}
export default Shoes;