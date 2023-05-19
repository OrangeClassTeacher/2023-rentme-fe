import { FC, useState, useContext } from "react";
import { sortValContext } from "@/context/SortContext";
import { BsChevronDown } from "react-icons/bs";

const SortDropDown: FC = (): JSX.Element => {
  const { setSortVal } = useContext(sortValContext);
  const [dropSort, setDropSort] = useState(false);
  const dropSortHandler = (): void => {
    setDropSort(!dropSort);
  };

  const sortItems = [
    { title: "Price up", slug: { rentalPrice: 1 } },
    { title: "Price down", slug: { rentalPrice: -1 } },
    { title: "A-Z", slug: { itemName: 1 } },
    { title: "Z-A", slug: { itemName: -1 } },
  ];

  return (
    <div className="relative">
      <div className="flex items-center gap-5">
        <span className="text-head text-sm-medium">Эрэмбэ: </span>
        <button
          onClick={dropSortHandler}
          className="bg-bg-4 whitespace-nowrap rounded-lg py-4 px-[15px] flex items-center justify-between text-text text-sm-regular w-[25ch]"
        >
          {sortItems[0].title}
          <BsChevronDown
            className={`duration-300  ${
              dropSort ? "rotate-[-180deg]" : "rotate-0"
            }`}
          />
        </button>
      </div>
      <div
        className={`${
          dropSort ? "opacity-100" : "opacity-0 pointer-events-none"
        } absolute top-[60px] z-[10] bg-bg-4 rounded-lg py-[22px] pl-[30px] pr-[50px] duration-300 shadow-lg w-full`}
      >
        <ul className="flex flex-col font-[400] text-[15px] leading-[35px] text-head">
          {sortItems.map((item, index) => (
            <li
              onClick={(): void => setSortVal(item.slug)}
              key={`sort-item-${index}`}
              className="hover:text-color-1 whitespace-nowrap text-black cursor-pointer hover:underline "
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortDropDown;
