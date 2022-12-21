import { ImFire } from "react-icons/im";
import { GiCycle } from "react-icons/gi";
// import { GoPrimitiveDot } from "react-icons/go";
import { Bar, CardContainer, Logo } from "./cards.styled";

const Cards = ({ data }) => {
  return (
    <CardContainer>
      <div>
        <div>
          <h2>{data.name}</h2>
          <span>{data.owner_name}</span>
          <span>{data.budget_name}</span>
        </div>
        <Logo>{data.card_type === "burner" ? <ImFire /> : <GiCycle />}</Logo>
      </div>
      <div>
        <button>{data.card_type}</button>
        <p>Expires : {data.expiry}</p>
      </div>
      <Bar>
        <div></div>
      </Bar>
      <div>
        <p>Spent</p>
        <p>{data.spent.value}</p>
      </div>
      <div>
        <p>Avaiable to Spend</p>
        <p>{data.available_to_spend.value}</p>
      </div>
    </CardContainer>
  );
};

export default Cards;
