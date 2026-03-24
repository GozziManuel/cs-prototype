import { useParams, Link } from "react-router";
import trips from "../data/trips";

export default function DetailedUserPage() {
  const { id, idParticipant } = useParams();

  const trip = trips.find((trip) => trip.id === parseInt(id));

  //  recupero partecipanti da localStorage (se esistono)
  const savedParticipants = localStorage.getItem(`participants_${id}`);
  const participants = savedParticipants
    ? JSON.parse(savedParticipants)
    : trip?.participants || [];

  //  cerco il partecipante
  const participant = participants.find(
    (contact) => contact.id === parseInt(idParticipant),
  );

  //  gestione errore
  if (!participant) {
    return (
      <div className="container">
        <h2 className="my-4">Participant not found</h2>
        <Link to={`/trips/${id}/participants`} className="btn btn-primary">
          Go back to participants list
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-black my-4">
        {participant.firstName} {participant.lastName}
      </h1>

      <ul className="list-unstyled">
        <li>
          <strong>E-mail:</strong>{" "}
          <a href={`mailto:${participant.email}`} className="text-primary">
            {participant.email}
          </a>
        </li>

        <li>
          <strong>Phone number:</strong> {participant.phone}
        </li>

        <li>
          <strong>Tax code:</strong> {participant.taxCode}
        </li>
      </ul>

      <Link to={`/trips/${id}/participants`} className="btn btn-primary">
        Go back to participants list
      </Link>
    </div>
  );
}
