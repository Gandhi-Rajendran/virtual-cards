import { AddButton, Head, HeaderContainer, LeftSection } from "./header.styled";
import { BiVideo } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import Navbar from "../navbar";

const Header = () => {
  return (
    <HeaderContainer>
      <Head>
        <LeftSection>
          <h1>Virtual Card</h1>
          <div>
            <button>
              <BiVideo /> Learn more
            </button>
          </div>
        </LeftSection>
        <AddButton>
          <GrAdd /> Virtual card
        </AddButton>
      </Head>
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;
