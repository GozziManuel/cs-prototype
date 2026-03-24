export default function TripAdder() {
  return (
    <>
      <div className="container-sm mt-4">
        <form>
          <div class="mb-3">
            <label class="form-label fw-bold">Trip name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Where (city name)</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
            <div class="form-text">Please insert valid City Name</div>
          </div>
          <label class="form-label fw-bold">Date</label>
          <div class="mb-3 d-flex align-items-center">
            <input
              type="date"
              class="form-control"
              id="exampleInputPassword1"
            />
            <label class="form-label mx-3">
              <span className="fw-bold">To</span>
            </label>
            <input
              type="date"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
