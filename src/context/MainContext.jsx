import { createContext, useContext, useState } from "react";
import trips from "../data/trips";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [tripsList, setTripsList] = useState(trips);

  const addTrip = (newTrip) => {
    setTripsList([...tripsList, newTrip]);
  };

  const value = { tripsList, addTrip };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

const useMainContext = () => {
  return useContext(MainContext);
};

export { MainContextProvider, useMainContext };
