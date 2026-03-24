import { Link, useParams } from "react-router";
import trips from "../data/trips";
import ParticipantCard from "../components/ParticipantCard";

export default function UserListPage() {
  const { id } = useParams();
  const trip = trips.find((trip) => trip.id === parseInt(id));
  return (
    <>
      <div className="container">
        <h1 className="my-4">Participants</h1>
        <ul className="list-group">
          {trip.participants.map((participant) => (
            <Link to={"/participant/" + participant.id}>
              <li key={participant.id} className="list-group-item">
                <ParticipantCard participant={participant} />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
