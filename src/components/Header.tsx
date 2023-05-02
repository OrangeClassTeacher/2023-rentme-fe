import react, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "./Search";
import mainLogo from "@/images/logo.png";
import { RiMenu4Fill } from "react-icons/ri";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { useContext } from "react";
import { userIdCon } from "@/context/userIdContext";
import { UserProfie } from "./UserProfie";

export const Header = () => {
  const { userId, setUserId } = useContext(userIdCon);
  const [user, setUser] = useState(false);
  useEffect(() => {
    userId ? "" : setUserId(localStorage.getItem("currentUserId"));
  }, []);

  return (
    <div className="w-full bg-head text-white sticky top-0 z-[50] bg-gradient-to-r from-gray-900 to-gray-500 z-0">
      <div className="container py-5 border-b border-b-white/[.15] flex items-center justify-between">
        <div className="flex items-center gap-7">
          <Link href="/">
            <Image
              className="w-10 h-10 hover:animate-spin"
              src={mainLogo}
              alt="IntelliSense"
            />
          </Link>
          <button className="text-color-6 flex items-center gap-2 text-md-regular hover:text-color-6/70 duration-300">
            <RiMenu4Fill size={24} />
            <span>Explore</span>
          </button>
        </div>

        <nav className="">
          <ul className="flex items-center gap-10 text-md-regular">
            <li className="hover:text-white/70 duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-white/70 duration-300">
              <Link href="/item">Products</Link>
            </li>
            <li className="hover:text-white/70 duration-300">
              <Link href="/">Categories</Link>
            </li>
            <li className="hover:text-white/70 duration-300">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-7">
          {/* <button className="text-xl hover:opacity-70 duration-300">
            <FiSearch />
          </button> */}
          <Search />
          <button className="text-xl hover:opacity-70 duration-300">
            <FiShoppingBag />
          </button>

          {userId ? (
            <button
              className="text-head rounded-lg px-[34px] py-2 text-md-regular hover:bg-white/70 duration-300"
              onClick={() => setUser(!user)}
            >
              <UserProfie USer={user} setUSer={setUser} />
            </button>
          ) : (
            <button className="text-head rounded-lg px-[34px] py-2 text-md-regular hover:bg-white/70 duration-300">
              <Link href="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
