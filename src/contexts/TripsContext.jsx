import { createContext, useContext, useState } from "react";
import trips from "../data/trips";

const TripsContext = createContext();

function TripsProvider({ children }) {
    const [tripsList, setTripsList] = useState(trips);
    
    const addTrip = (newTrip) => {
        setTripsList([...tripsList, newTrip]);
    };
    return (
        <TripsContext.Provider value={{ addTrip, tripsList }}>
            {children}
        </TripsContext.Provider>
    )
}

function useTrips() {
    const context = useContext(TripsContext);
    return context
}

export { TripsProvider, useTrips };