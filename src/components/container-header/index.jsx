import { useState } from "react";
import { BiFilter, BiSearch } from "react-icons/bi";
import FilterModal from "../filter-modal";
import { FilterButton, Header } from "./continerHeader.styled";

const ContainerHeader = () => {
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const filterOpenHandler = () => {
    setIsOpen(true);
  };
  const filterCloseHandler = () => {
    setIsOpen(false);
  };

  return (
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
      <FilterButton onClick={filterOpenHandler}>
        <span>
          <BiFilter />
        </span>
        Filter
      </FilterButton>
      {isOpen && <FilterModal filterCloseHandler={filterCloseHandler} />}
    </Header>
  );
};

export default ContainerHeader;
