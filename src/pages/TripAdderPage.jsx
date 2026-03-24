import { useState } from "react";
import {useNavigate} from "react-router";
import { useTrips } from "../contexts/TripsContext";

const initialInput = {
  name: "",
  city: "",
  startDate: "",
  endDate: "",
  details: {
    description: "",
    meetingPoint: "",
    itinerary: [],
    transport: {
      arrival: "",
      local: "",
      departure: ""
    },
    accommodation: {
      name: "",
      type: "",
      nights: null ,
    },
    placesToVisit: []
  },
  participants: [],
};
// aggiungo addTrip come prop
export default function TripAdder() {
  const [input, setInput] = useState(initialInput);
  const navigate = useNavigate();
  const {addTrip, tripsList} = useTrips();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  // funzione handleSubmit 
  function handleSubmit(e) {
    e.preventDefault();

    const newTrip = {
      id: tripsList.length + 1,
      ...input,
    };

    addTrip(newTrip);
    console.log(tripsList);

    //  torna alla lista
    navigate(`/trips`);
  }


  return (
    <>
      <div className="container-sm mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Trip name</label>
            <input
              name="name"
              onChange={handleChange}
              value={input.name}
              //
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Where (city name)</label>
            <input
              name="city"
              onChange={handleChange}
              value={input.city}
              //
              type="text"
              className="form-control"
            />
            <div className="form-text">Please insert valid City Name</div>
          </div>
          <label className="form-label fw-bold">Date</label>
          <div className="mb-3 d-flex align-items-center">
            <input
              type="date"
              onChange={handleChange}
              value={input.startDate}
              //
              className="form-control"
              name="startDate"
            />
            <label className="form-label mx-3">
              <span className="fw-bold">To</span>
            </label>
            <input
              type="date"
              onChange={handleChange}
              value={input.endDate}
              //
              className="form-control"
              name="endDate"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
