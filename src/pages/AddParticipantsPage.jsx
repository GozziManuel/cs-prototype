import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import trips from "../data/trips";

export default function AddParticipantPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const trip = trips.find((trip) => trip.id === parseInt(id, 10));

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    taxCode: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const saved = localStorage.getItem(`participants_${id}`);
    const participants = saved ? JSON.parse(saved) : trip?.participants || [];

    const newParticipant = {
      id: Date.now(),
      ...formData,
    };

    const updated = [...participants, newParticipant];

    //  salva
    localStorage.setItem(`participants_${id}`, JSON.stringify(updated));

    //  torna alla lista
    navigate(`/trips/${id}/participants`);
  }

  return (
    <div className="container">
      <h1 className="my-4">Add Participant</h1>

      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column gap-3">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="form-control"
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="form-control"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />

          <input
            type="text"
            name="taxCode"
            placeholder="Tax Code"
            value={formData.taxCode}
            onChange={handleChange}
            className="form-control"
            required
          />

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-success">
              Save
            </button>

            <Link
              to={`/trips/${id}/participants`}
              className="btn btn-secondary"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
