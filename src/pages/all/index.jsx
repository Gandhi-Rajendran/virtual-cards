import { useState } from "react";
import { BiFilter, BiSearch } from "react-icons/bi";
import Cards from "../../components/cards";
import { AllContainer, Body, FilterButton, Header } from "./all.styled";
// import data from "./db.json";

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
    name: "Mixmax-3",
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
    card_type: "subscription",
    expiry: "9feb",
    limit: 100,
    status: "active",
  },
];

const All = () => {
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  return (
    <AllContainer>
      <Header>
        <span onClick={() => setIsSearch(!isSearch)}>
          <BiSearch />
        </span>
        {isSearch ? (
          <input
            type="text"
            placeholder="Search Card..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        ) : (
          ""
        )}
        <FilterButton>
          <span>
            <BiFilter />
          </span>
          Filter
        </FilterButton>
      </Header>
      <Body>
        {DATA.map((data, i) => (
          <Cards data={data} key={i} />
        ))}
      </Body>
    </AllContainer>
  );
};

export default All;
