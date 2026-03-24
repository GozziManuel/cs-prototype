import { Link } from "react-router";

export default function TripCard({ el }) {
  return (
    <Link to={`/trips/${el.id}`} className="col-lg-4 col-sm-6 col-12">
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
          <p className="mt-3 mb-0">Participants: {el.participants.length}</p>
          <Link to={`/trips/${el.id}/participants`} className="btn btn-primary">
            See participants
          </Link>
        </div>
      </div>
    </Link>
  );
}
