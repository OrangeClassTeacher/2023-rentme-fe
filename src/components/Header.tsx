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

export const Header = () => {
  const { userId, setUserId } = useContext(userIdCon);
  const [user, setUser] = useState(false);
  useEffect(() => {
    userId ? "" : setUserId(localStorage.getItem("currentUserId"));
  }, []);

  return (
    <div className="w-5/5 ps-5 bg-head text-white sticky top-0 z-[50] bg-gradient-to-r from-gray-900 to-gray-500 z-0">
      <div className="ps-5 w-full py-5 border-b border-b-white/[.15] flex items-center justify-between">
        <div className="flex w-1/5 items-center gap-7 hidden md:flex">
          <Link href="/">
            <Image
              className="w-full h-10 hover:animate-spin"
              src={mainLogo}
              alt="IntelliSense"
            />
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
    </div>
  );
};
