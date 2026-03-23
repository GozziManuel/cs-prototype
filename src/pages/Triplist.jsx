import { Link } from "react-router";
import trips from "../data/trips";


export default function Triplist() {
  return (
    <div className="container-sm">
      <h1 className="my-4">Triplist</h1>
      <div className="row g-3">
        {trips.map((el) => {
          return (
            <div className="col-4" key={el.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{el.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    city: {el.city}
                  </h6>
                  <div className="d-">
                    <p className="card-text ">
                      <span className="fw-bold">{el.startDate} </span>
                      to <span className="fw-bold">{el.endDate}</span>
                    </p>
                  </div>
                  <Link to={"/trips/" + el.id} className="card-link">
                    See participants
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
