import { Link } from "react-router";
import TripCard from "../components/TripCard";
import trips from "../data/trips";
import { useState } from "react";
import TripAdder from "./TripAdderPage";

export default function Triplist() {
  const [tripsList, setTripsList] = useState(trips);
  const addTrip = (newTrip) => {
    setTripsList([...tripsList, newTrip]);
  };

  console.log(tripsList);

  return (
    <div className="container-sm">
      <h1 className="my-4">Triplist</h1>
      <div className="row g-3">
        {trips.map((el) => {
          return <TripCard el={el} key={el.id} />;
        })}
        <div className="col-lg-4 col-sm-6 col-12 d-flex align-items-center justify-content-center">
          <Link className="text-primary fs-2 text-center " to={"/trip/adder"}>
            Aggiungi <br /> +
          </Link>
        </div>
      </div>
    </div>
  );
}
