import { Link, useParams } from "react-router";
import trips from "../data/trips";
import ParticipantCard from "../components/ParticipantCard";
import { useState } from "react";

export default function UserListPage() {
  const { id } = useParams();
  const trip = trips.find((trip) => trip.id === parseInt(id, 10));

  const [participants, setParticipants] = useState(() => {
    const saved = localStorage.getItem(`participants_${id}`);
    return saved ? JSON.parse(saved) : trip?.participants || [];
  });

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Funzione per eliminare un partecipante
  const handleDelete = (participantId) => {
    const updated = participants.filter((p) => p.id !== participantId);
    setParticipants(updated);
    localStorage.setItem(`participants_${id}`, JSON.stringify(updated));
  };

  const participantsList = participants.filter((participant) =>
    `${participant.firstName} ${participant.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <div className="container">
      <h1 className="my-4 d-flex align-items-center gap-3">
        Participants
        <Link to="/trips" className="btn btn-primary">
          Go back to trip list
        </Link>
        <Link to={`/trips/${id}/participants/add`} className="btn btn-success">
          Add
        </Link>
      </h1>

      {/* SEARCH */}
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        className="mb-3 form-control"
        placeholder="Search participant"
      />

      {/* LISTA */}
      <ul className="list-group">
        {participantsList.map((participant) => (
          <li
            key={participant.id}
            className="list-group-item d-flex justify-content-between align-items-center hoverOn hover"
          >
            <ParticipantCard participant={participant} tripId={id} />
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(participant.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    <>
      <div className="container">
        <h1 className="my-4 d-flex align-items-center gap-3">
          Participants {`(${trip?.participants.length})`}
          <Link to="/trips" className="btn btn-primary">
            Go back to trip list
          </Link>
        </h1>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          className="mb-3"
          placeholder="search participant"
        />
        <ul className="list-group ">
          {participantsList.map((participant) => (
            <li key={participant.id} className="list-group-item hoverOn hover">
              <ParticipantCard participant={participant} tripId={id} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
