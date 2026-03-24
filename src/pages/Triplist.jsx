import { Link } from "react-router";
import TripCard from "../components/TripCard";
import {useTrips} from "../contexts/TripsContext"

export default function Triplist() {

  const {tripsList} = useTrips();
  

  console.log(tripsList);

  return (
    <div className="container-sm">
      <h1 className="my-4">Triplist</h1>
      <div className="row g-3">
        {tripsList?.map((el) => {
          return <TripCard el={el} key={el.id} />;
        })}
        <div className="col-lg-4 col-sm-6 col-12 d-flex align-items-center justify-content-center">
          <Link className="text-primary fs-2 text-center " to={"/trip/adder"}>
            Add <br /> +
          </Link>
        </div>
      </div>
    </div>
  );
}
