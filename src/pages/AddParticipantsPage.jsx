import { useState } from "react";
import { useParams, useNavigate } from "react-router";

// stato iniziale del form
const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  taxCode: "",
};

export default function AddParticipantPage({ addParticipant }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState(initialInput);

  // gestisco il cambiamento dei campi
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  // gestisco il submit del form
  const handleSubmit = (e) => {
    e.preventDefault();
    // aggiungo il partecipante
    addParticipant(id, input);
    // resetto il form
    setInput(initialInput);
    // torno alla lista partecipanti
    navigate(`/trips/${id}/participants`);
  };

  return (
    <div className="container-sm mt-4">
      <h1 className="mb-4">Aggiungi partecipante</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold">Nome</label>
          <input
            name="firstName"
            onChange={handleChange}
            value={input.firstName}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Cognome</label>
          <input
            name="lastName"
            onChange={handleChange}
            value={input.lastName}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            name="email"
            onChange={handleChange}
            value={input.email}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Telefono</label>
          <input
            name="phone"
            onChange={handleChange}
            value={input.phone}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Codice fiscale</label>
          <input
            name="taxCode"
            onChange={handleChange}
            value={input.taxCode}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Aggiungi
        </button>
      </form>
    </div>
  );
}
