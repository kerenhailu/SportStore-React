import React, { useEffect, useState } from "react";
import { GetData } from "../../Service/ShoesService.service";

export const CreateContextProvider=React.createContext();
const ContextShoes=({children})=>{
const [shoes,setShoes]=useState([]);
useEffect(()=>{
GetData().then((result)=>{
    setShoes(result.ListShoes)
})
},[])
return(<CreateContextProvider.Provider value={{shoes,setShoes}}>
    {children}
</CreateContextProvider.Provider>)
}
export default ContextShoes;