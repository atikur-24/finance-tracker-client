import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchTransaction = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <div className="m:min-w-[380px] relative w-full overflow-hidden rounded-md border-2 border-deep-green lg:min-w-[440px]">
          <input
            type="search"
            className="z-20 block w-full bg-bgSecondary px-4 py-2.5 pr-10 focus:outline-none"
            placeholder="Search Transaction"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
          <div className="absolute right-0 top-0 flex h-full items-center">
            <button type="submit" className="search-btn">
              <IoSearch />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchTransaction;
