import React, { useEffect, useState } from "react";
import { GetPantsData } from "../../Service/PantsService.service";
export const ContextProviderPants = React.createContext();
const ContextPants = ({ children }) => {
  const [pants, setPants] = useState([]);
  useEffect(() => {
    GetPantsData().then((res) =>setPants(res.ListPants) );
  }, []);
  return (
    <ContextProviderPants.Provider value={{pants,setPants}}>
        {children}
        </ContextProviderPants.Provider>
  );
};
export default ContextPants;
