import react, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "./Search";
import mainLogo from "@/images/logo.png";
import { RiMenu4Fill } from "react-icons/ri";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { BsListNested } from "react-icons/bs";
import { useContext } from "react";
import { userIdCon } from "@/context/userIdContext";
import { UserProfie } from "./UserProfie";
import SortDropDown from "./global/SortDropDown";
import { LoadingContext } from "@/context/LoadingContext";
import axios from "axios";

export const Header = () => {
  // Collections that start with `hidden-*` are hidden from the search page.
  const [productData, setProductData] = useState<Iproduct[]>();
  const [proData, setProData] = useState<Iproduct[]>();
  const [catData, setCatData] = useState([]);
  useEffect(() => {
    getCatData();
  }, []);
  const getCatData = () => {
    axios
      .get("http://localhost:8000/api/category")
      .then((res) => setCatData(res.data.result))
      .catch((err) => console.log(err));
  };

  const { userId, setUserId } = useContext(userIdCon);
  const [user, setUser] = useState(false);
  useEffect(() => {
    userId ? "" : setUserId(localStorage.getItem("currentUserId"));
  }, []);
  let lastScrollTop = 0;
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      const Navbar = (document.getElementById("Navbar") as HTMLElement) || null;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      console.log(scrollTop);

      if (scrollTop > lastScrollTop) {
        Navbar.style.top = "-200px";
      } else {
        Navbar.style.top = `0px`;

        // Navbar.style.color = "black";
        Navbar.style.zIndex = "100";
      }
      lastScrollTop = scrollTop;
    });
  }

  return (
    <div
      className="w-full px-8 bg-head text-white fixed top-0 z-[50] bg-gradient-to-r from-gray-900 to-gray-500 z-0 ease-in-out duration-100"
      id="Navbar"
    >
      <div className="py-5 w-full px-8 border-b border-b-white/[.15] flex items-center justify-between">
        <div className="flex w-1/5 items-center gap-7 hidden md:flex">
          <Link href="/">
            <Image className="w-full h-10" src={mainLogo} alt="IntelliSense" />
          </Link>
        </div>
        <div className="w-4/5 hidden md:flex">
          <nav className="w-full">
            <ul className="flex items-center justify-evenly text-md-regular">
              <li className="hover:text-white/70 duration-300">
                <Link href="/">Нүүр</Link>
              </li>
              <li className="hover:text-white/70 duration-300">
                <Link href="/item">Бүтээгдэхүүн</Link>
              </li>

              <li className="hover:text-white/70 duration-300 ">
                <Link href="/">Холбоо барих</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex md:hidden md:1/3">
          <button className="text-xl">
            <BsListNested />
          </button>
        </div>

        <div className="flex w-2/5 md:w-full items-center  gap-7 ps-8 ">
          {/* <button className="text-xl hover:opacity-70 duration-300">
            <FiSearch />
          </button> */}
          <Search />
          <SortDropDown />
          {userId ? (
            <button className="text-xl hover:opacity-70 duration-300">
              <FiShoppingBag />
            </button>
          ) : (
            ""
          )}

          {userId ? (
            <button
              className="text-head rounded-lg px-[34px] py-2 text-md-regular hover:bg-white/70 duration-300"
              onClick={() => setUser(!user)}
            >
              <UserProfie USer={user} setUSer={setUser} />
            </button>
          ) : (
            <button className="text-head rounded-lg px-5 py-2 text-md-regular hover:bg-white/70 duration-300">
              <Link href="/login">Нэвтрэх</Link>
            </button>
          )}
        </div>
      </div>
      <div className="relative w-full overflow-hidden  dark:bg-white ">
        <div className="w-full flex bg-head text-white sticky top-0 ">
          {catData.map((item, index) => {
            if (!item.parentId) {
              return (
                <select
                  key={index}
                  className="text-black border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
                >
                  <option value={item?._id}>{item.categoryName}</option>
                  {catData.map((e, index) => {
                    if (e.parentId == item._id) {
                      return (
                        <option key={index} value={item._id}>
                          {e.categoryName}
                        </option>
                      );
                    }
                  })}
                </select>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
