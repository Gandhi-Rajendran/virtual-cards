import { ImFire } from "react-icons/im";
import { GiCycle } from "react-icons/gi";
import { GoPrimitiveDot } from "react-icons/go";
import {
  CardContainer,
  Dot,
  Fill,
  Logo,
  ProgressBar,
  Type,
} from "./cards.styled";

const Cards = ({ data }) => {
  const spentPercentage = (available, spent) => {
    const total = spent + available;
    return (spent / total) * 100;
  };

  return (
    <CardContainer>
      <div>
        <div>
          <h2>{data.name}</h2>
          <span>
            {data.owner_name} <GoPrimitiveDot /> {data.budget_name}
          </span>
        </div>
        <Logo>{data.card_type === "burner" ? <ImFire /> : <GiCycle />}</Logo>
      </div>
      <div>
        <Type>{data.card_type}</Type>
        <p>
          {data.card_type === "burner"
            ? `Expires : ${data.expiry}`
            : `August Limit : ${data.limit} SGD`}
        </p>
      </div>
      <ProgressBar>
        <Fill
          spent={spentPercentage(
            data.available_to_spend.value,
            data.spent.value
          )}
        ></Fill>
      </ProgressBar>
      <div>
        <p>
          <Dot isspent={data.spent.value}></Dot>
          Spent
        </p>
        <p>{data.spent.value}</p>
      </div>
      <div>
        <p>
          <Dot></Dot>
          Avaiable to Spend
        </p>
        <p>{data.available_to_spend.value}</p>
      </div>
    </CardContainer>
  );
};

export default Cards;
