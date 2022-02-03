import { useContext } from "react";
import {SportsEquipmentProvider} from "../Context/SportsEquipmentContext.Component"

 const SportsEquipment=()=>{
     const{equipment,setEquipment}=useContext(SportsEquipmentProvider);
    return(<div>
        <p>SportsEquipment :</p>
        {equipment.map((item)=>
       item.sportType
       )}
    </div>)
}
export default SportsEquipment;