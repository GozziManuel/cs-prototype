import { useParams } from "react-router"
import trips from "../data/trips";
import {Link} from "react-router"

export default function DetailedUserPage() {
    const { id, idParticipant } = useParams();
    const trip = trips.find((trip) => trip.id === parseInt(id));
    const participant = trip?.participants.find((contact) => contact.id === parseInt(idParticipant));
    console.log(participant);
    return <>
        <div className="container">
            <h1 className="text-black my-4">{participant?.firstName} {participant?.lastName}</h1>
            <ul className="list-unstyled">
                <li><strong>E-mail:</strong> <a href={`mailto:${participant.email}`} className="text-primary">{participant.email}</a></li>
                <li><strong>Phone number:</strong> {participant.phone}</li>
                <li><strong>Tax code:</strong> {participant.taxCode}</li>
            </ul>
            <Link to={`/trips/${id}`} className="btn btn-primary">Go back to participants list</Link>

        </div>
    </>
}
