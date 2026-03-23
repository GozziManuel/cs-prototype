import TripCard from "../components/TripCard";
import trips from "../data/trips";
export default function Triplist() {
  console.log(trips);

  return (
    <div className="container-sm">
      <h1 className="my-4">Triplist</h1>
      <div className="row g-3">
        {trips.map((el) => {
          return <TripCard el={el} key={el.id} />;
        })}
      </div>
    </div>
  );
}
