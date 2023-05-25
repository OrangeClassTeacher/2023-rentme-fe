import React from "react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import AuthLayout from "@/components/auth/AuthLayout";
import { useContext } from "react";
import { useRouter } from "next/router";
import { userIdCon } from "@/context/userIdContext";
import { Utils } from "../../utils/helper";

export default function Index(): JSX.Element {
  const [logEmail, setLogEmail] = useState<string>("");
  const [logPassword, setLogPassword] = useState<string>("");
  const [, setData] = useState({});
  const { setUserId } = useContext(userIdCon);
  const route = useRouter();

  function login(): void {
    axios
      .post(`${Utils.API_URL}/login`, {
        email: logEmail,
        password: logPassword,
      })
      .then((res) => {
        setData(res.data.result);
        const { result } = res.data;
        if (result?._id != undefined) {
          localStorage.setItem("currentUserId", result?._id);
          setUserId(result?._id);
          alert("Амжилттай нэвтэрлээ");
          route.push("/");
        }
      })
      .catch();
  }
  return (
    <AuthLayout>
      <div className="w-full h-full bg-white p-8">
        <div className=" flex items-center flex-col gap-3">
          <h1 className="text-3xl text-teal-500">Нэвтрэх</h1>
          <input
            onChange={(e): void => setLogEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
          />
          <input
            onChange={(e): void => setLogPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            type="password"
          />
          <Link className="text-teal-500" href="/signup">
            Бүртгэл үүсгэх
          </Link>
          <div className="flex items-center justify-between text-sm-regular mb-5">
            <div className="flex items-center gap-[10px]">
              <input
                type="checkbox"
                id="remember"
                className="w-[15px] h-[15px] border-2 border-icon"
              />
              <label className="text-text text-teal-500" htmlFor="remember">
                Намайг санах
              </label>
            </div>

            <Link
              className="text-color-1 text-teal-500 hover:text-color-1/70 duration-300 py-3 px-5"
              href="/"
            >
              Нууц үгээ мартсан уу?
            </Link>
          </div>
          <button
            onClick={login}
            className="text-teal-500 outline outline-offset-2 outline-teal-500 rounded px-3"
          >
            Hэвтрэх
          </button>

          <p className="text-center text-md-medium mb-5 text-teal-500">Эсвэл</p>

          <div className="flex items-center gap-5">
            <button className="flex items-center gap-2 text-[#1967d2] py-3 px-5 rounded-lg border-2 border-[#1967d2] hover:bg-[#1967d2] hover:text-white duration-300">
              <FaFacebookF />
              Facebook-ээр нэвтрэх
            </button>
            <button className="flex items-center gap-2 text-[#D93025] py-3 px-5 rounded-lg border-2 border-[#D93025] hover:bg-[#d93025] hover:text-white duration-300">
              <FaGoogle />
              Google-ээр нэвтрэх
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
