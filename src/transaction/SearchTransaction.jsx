import { IoSearch } from "react-icons/io5";

const SearchTransaction = () => {
  return (
    <form>
      <div className="flex">
        <div className="m:min-w-[380px] border-deep-green relative w-full overflow-hidden rounded-md border-2 lg:min-w-[440px]">
          <input
            type="search"
            className="z-20 block w-full bg-bgSecondary px-4 py-2.5 pr-10 focus:outline-none"
            placeholder="Search Transaction"
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
