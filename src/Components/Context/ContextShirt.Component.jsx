import React, { useEffect, useState } from "react";
import { GetDataShirt } from "../../Service/ShirtService.service";
export const ContextShirtProvider = React.createContext();
const ContextShirt = ({ children }) => {
  const [shirt, setShirt] = useState([]);
  useEffect(() => {
    GetDataShirt().then((res) => setShirt(res.ListShirt));
  }, []);
  return (
    <ContextShirtProvider.Provider value={{ shirt, setShirt }}>
      {children}
    </ContextShirtProvider.Provider>
  );
};
export default ContextShirt;
