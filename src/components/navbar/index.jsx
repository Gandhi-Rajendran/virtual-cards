import { useState } from "react";
import { AiFillAppstore } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { A, Menu, NavbarContainer } from "./navbar.styled";

const Navbar = () => {
  const [navSelect, setNavSelect] = useState("all");
  return (
    <NavbarContainer>
      <nav>
        <A
          to="/"
          selected={navSelect === "your" ? 1 : 0}
          onClick={() => setNavSelect("your")}
        >
          Your
        </A>
        <A
          to="/"
          selected={navSelect === "all" ? 1 : 0}
          onClick={() => setNavSelect("all")}
        >
          All
        </A>
        <A
          to="/"
          selected={navSelect === "blocked" ? 1 : 0}
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
