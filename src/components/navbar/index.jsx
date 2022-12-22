import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { A, Menu, NavbarContainer } from "./navbar.styled";
import { useEffect } from "react";

const Navbar = () => {
  const [navSelect, setNavSelect] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    if (navSelect === "all") {
      navigate("/all");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NavbarContainer>
      <nav>
        <A
          to="/your"
          selected={navSelect === "your"}
          onClick={() => setNavSelect("your")}
        >
          Your
        </A>
        <A
          to="/all"
          selected={navSelect === "all"}
          onClick={() => setNavSelect("all")}
        >
          All
        </A>
        <A
          to="/blocked"
          selected={navSelect === "blocked"}
          onClick={() => setNavSelect("blocked")}
        >
          Blocked
        </A>
      </nav>
      <Menu>
        <Link to="/">
          <AiFillAppstore />
        </Link>
        <Link to="/">
          <GiHamburgerMenu />
        </Link>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
