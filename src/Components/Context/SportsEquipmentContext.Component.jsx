import React, { useEffect, useState } from "react"
import { GetSportsEquipment } from "../../Service/sportsEquipmentService.service";
const SportsEquipmentProvider=React.createContext();
const SportsEquipmentContext=({Children})=>{
    const[equipment,setEquipment]=useState([]);
    useEffect(()=>{
    GetSportsEquipment().then((res)=>setEquipment(res.ListsportsEquipment)) 
    },[])
    return(<SportsEquipmentProvider.Provider value={{equipment,setEquipment}}>
        {Children}
    </SportsEquipmentProvider.Provider>)
}
export default SportsEquipmentContext;