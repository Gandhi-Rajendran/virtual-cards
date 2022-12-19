import { Head, HeaderContainer } from "./header.styled";
import { BiVideo } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";

const Header = () => {
  return (
    <HeaderContainer>
      <Head>
        <div>
          <h1>Virtual Card</h1>
          <button>
            <BiVideo /> Learn more
          </button>
        </div>
        <button>
          <GrAdd /> Virtual card
        </button>
      </Head>
    </HeaderContainer>
  );
};

export default Header;
