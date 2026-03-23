import { Link } from "react-router";
import trips from "../data/trips";
import TripCard from "../components/TripCard";

export default function Homepage() {
  return (
    <>
      <div className="container-sm">
        <div className="overlay my-4">
          <div className="my-4 container-overlay">
            <h1 className="text-center mt-2">Welcome to BooRoad!</h1>
          </div>
        </div>
        <div className="separator"></div>
        <h2 className="mt-3">See in what trip you interested! </h2>
        <div className="row g-3 mb-5">
          {trips.slice(0, 3).map((el) => (
            <TripCard el={el} key={el.id} />
          ))}
          <Link to={"/trips"} className="text-center card-link fs-3">
            See more!
          </Link>
        </div>
      </div>
    </>
  );
}
