import Cards from "../../components/cards";
import ContainerHeader from "../../components/container-header";
import { AllContainer, Body } from "./all.styled";

const DATA = [
  {
    name: "Mixmax-1",
    budget_name: "Software subscription",
    owner_id: 1,
    owner_name: "Rajesh",
    spent: {
      value: 100,
      currency: "SGD",
    },
    available_to_spend: {
      value: 1000,
      currency: "SGD",
    },
    card_type: "burner",
    expiry: "9feb",
    limit: 100,
    status: "active",
  },
  {
    name: "Mixmax-2",
    budget_name: "Software subscription",
    owner_id: 1,
    owner_name: "Rajesh",
    spent: {
      value: 600,
      currency: "SGD",
    },
    available_to_spend: {
      value: 1000,
      currency: "SGD",
    },
    card_type: "burner",
    expiry: "9feb",
    limit: 100,
    status: "active",
  },
  {
    name: "Mixmax-3",
    budget_name: "Software subscription",
    owner_id: 1,
    owner_name: "Rajesh",
    spent: {
      value: 900,
      currency: "SGD",
    },
    available_to_spend: {
      value: 400,
      currency: "SGD",
    },
    card_type: "subscription",
    expiry: "9feb",
    limit: 100,
    status: "active",
  },
];

const All = () => {
  return (
    <AllContainer>
      <ContainerHeader />
      <Body>
        {DATA.map((data, i) => (
          <Cards data={data} key={i} />
        ))}
      </Body>
    </AllContainer>
  );
};

export default All;
