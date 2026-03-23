import { NavLink, Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <NavLink to={"/"} class="navbar-brand" href="#">
            Homepage
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink to={"/trips"} class="nav-link" href="#">
                  Gite in corso
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
