import { NavLink, Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <h2 className="fs-1 fw-bold me-3 navbar-brand">BooRoad</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={"/"} className=" me-3 nav-link">
                  Homepage
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/trips"} className="nav-link">
                  Trip List
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
