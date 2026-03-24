import { useState } from "react";

const initialInput = {
  TripName: "",
  City: "",
  DateEnd: null,
  DateStart: null,
};

export default function TripAdder() {
  const [input, setInput] = useState(initialInput);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <>
      <div className="container-sm mt-4">
        <form>
          <div className="mb-3">
            <label className="form-label fw-bold">Trip name</label>
            <input
              name="TripName"
              onChange={handleChange}
              value={input.TripName}
              //
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Where (city name)</label>
            <input
              name="City"
              onChange={handleChange}
              value={input.City}
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
              value={input.DateStart}
              //
              className="form-control"
              name="DateStart"
            />
            <label className="form-label mx-3">
              <span className="fw-bold">To</span>
            </label>
            <input
              type="date"
              onChange={handleChange}
              value={input.DateEnd}
              //
              className="form-control"
              name="DateEnd"
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
