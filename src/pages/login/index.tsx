import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
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
    <div>
      <input
        onChange={(e) => setLogEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        onChange={(e) => setLogPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={login}>Log In</button>
    </div>
  );
}
