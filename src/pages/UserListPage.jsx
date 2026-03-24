import { Link, useParams } from "react-router";
import trips from "../data/trips";
import ParticipantCard from "../components/ParticipantCard";
import { useState } from "react";

export default function UserListPage() {
  const { id } = useParams();
  const trip = trips.find((trip) => trip.id === parseInt(id));
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const participantsList = trip.participants.filter((participant) =>
    `${participant.firstName} ${participant.lastName}`
      .trim()
      .toLowerCase()
      .includes(search.trim().toLowerCase()),
  );
  return (
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
