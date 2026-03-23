import { useParams } from "react-router";
import trips from "../data/trips";
import ParticipantCard from "../components/ParticipantCard";
import {Link} from "react-router"

export default function UserListPage() {
    const { id } = useParams();
    const trip = trips.find((trip) => trip.id === parseInt(id));
    return <>
        <div className="container">
            <h1 className="my-4 d-flex align-items-center gap-3">Participants <Link to="/trips" className="btn btn-primary">Go back to trip list</Link></h1>
            <ul className="list-group">
                {trip.participants.map((participant) => <li key={participant.id} className="list-group-item"><ParticipantCard participant={participant} tripId={id}/></li>)}
            </ul>
        </div>
    </>;
}
