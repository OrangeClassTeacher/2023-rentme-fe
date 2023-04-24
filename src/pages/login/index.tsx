import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "react";
interface IUser {
  firstName: string;
  lastName: string;
  Username: string;
  email: string;
  birthDate: Date;
  phoneNumber: number;
  role: string;
  address: string;
  profilePic: String;
  password: string;
  gender: string;
  favItems: string;
}

export default function index() {
  const [logEmail, setLogEmail] = useState<string>("");
  const [logPassword, setLogPassword] = useState<string>("");
  const [userData, setUserData] = useState<IUser>();

  const login = () => {
    axios
      .post("http://localhost:8000/api/login", {
        email: logEmail,
        password: logPassword,
      })
      .then((res) => console.log("success"))
      .catch((err) => console.log("fai"));

    //   .then((res) => setUserData(res.data.result));
  };
  console.log(logEmail, logPassword);
  console.log(userData);

  return (
    <div className="w-full bg-white p-8">
      <div className=" flex items-center flex-col gap-3">
        <h1 className="text-3xl text-indigo-500">Нэвтрэх</h1>
        <input
          onChange={(e) => setLogEmail(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email"
        />
        <input
          onChange={(e) => setLogPassword(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Password"
        />
        <p className="underline text-sky-500">Бүртгэл үүсгэх</p>
        <button
          onClick={login}
          className="text-indigo-500 outline outline-offset-2 outline-blue-500 rounded px-3"
        >
          Log In
        </button>
      </div>
    </div>
  );
}
