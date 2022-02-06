import React, { useEffect, useState } from "react";
import { GetData } from "../../Service/ShoesService.service";

export const CreateContextProvider = React.createContext();
const ContextShoes = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    GetData().then((result) => 
      setShoes(result.ListShoes))
      .finally(()=>setIsLoading(false))
  }, []);
  return (
    <CreateContextProvider.Provider value={{ shoes, setShoes, isLoading }}>
      {children}
    </CreateContextProvider.Provider>
  );
};
export default ContextShoes;
