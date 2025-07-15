import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import "./NavLinks.css";

function NavLinks(props) {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  function logOutHandler() {
    authCtx.logOut();
    navigate("/");
  }

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact="true">
          ALL USERS
        </NavLink>
      </li>
      {authCtx.isLoggedIn ? (
        <>
          <li>
            <NavLink to="/places/new">ADD PLACE</NavLink>
          </li>
          <li>
            <NavLink to={`/${authCtx.userId}/places`}>MY PLACES</NavLink>
          </li>
          <li>
            <button onClick={logOutHandler}>LOGOUT</button>
          </li>
        </>
      ) : (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
    </ul>
  );
}

export default NavLinks;
