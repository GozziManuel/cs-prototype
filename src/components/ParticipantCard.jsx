import { Link } from "react-router";

export default function ParticipantCard({ participant, tripId }) {
  return (
    <Link to={`/trips/${tripId}/${participant.id}`} className="text-black">
      <div className="d-flex align-items-center gap-2 mb-2">
        <div className="avatar">
          {participant.firstName?.charAt(0)}
          {participant.lastName.charAt(0)}
        </div>
        <p className="m-0">
          {participant.firstName} {participant.lastName}
        </p>
      </div>
      <p className="m-0">
        <strong>Phone number: </strong>
        {participant.phone}
      </p>
    </Link>
  );
}
