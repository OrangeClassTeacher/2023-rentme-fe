import axios from "axios";
import Link from "next/link";
import { FC, useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const RegisterForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");

  const registerUser = async (): Promise<void> => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/signup",
        {
          email,
          phone,
          firstName,
          lastName,
          password,
          rePassword,
        },
        { withCredentials: true }
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-[50px] bg-white rounded-2xl shadow-shadow-dashboard">
      <div className="mb-[30px]">
        <h1 className="text-head text-teal-500 text-[30px] font-bold leading-9 mb-2">
          Sign Up
        </h1>
        <p className="text-text text-teal-500 text-md-regular">
          Already Signed{" "}
          <Link href="/auth/register" className="text-color-1">
            Login
          </Link>
        </p>
      </div>
      <form
        onSubmit={(e): void => {
          e.preventDefault();
          registerUser();
        }}
        className="text-head"
      >
        <div className="grid grid-cols-2 gap-5 mb-5">
          <div className="w-full">
            <label className="block mb-2 text-lg-medium text-teal-500" htmlFor="firstName">
              Нэр
            </label>
            <input
              value={firstName}
              onChange={(e): void => {
                setFirstName(e.target.value);
              }}
              type="text"
              id="firstName"
              className="border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
              placeholder="Нэр"
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-lg-medium text-teal-500" htmlFor="lastName">
              Овог
            </label>
            <input
              value={lastName}
              onChange={(e): void => {
                setLastName(e.target.value);
              }}
              type="text"
              id="lastName"
              className="border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
              placeholder="Овог"
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-lg-medium text-teal-500" htmlFor="email">
              И-мэйл
            </label>
            <input
              value={email}
              onChange={(e): void => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              className="border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
              placeholder="И-мэйл"
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-lg-medium text-teal-500" htmlFor="phone">
              Утасны дугаар
            </label>
            <input
              value={phone}
              onChange={(e): void => {
                setPhone(e.target.value);
              }}
              type="text"
              id="phone"
              className="border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
              placeholder="Утасны дугаар"
            />
          </div>

          <div className="w-[300px]">
            <label className="block mb-2 text-lg-medium text-teal-500" htmlFor="password">
              Нууц үг
            </label>
            <input
              value={password}
              onChange={(e): void => {
                setPassword(e.target.value);
              }}
              type="password"
              id="password"
              className="border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
              placeholder="Нууц үг"
            />
          </div>

          <div className="w-[300px]">
            <label className="block mb-2 text-lg-medium text-teal-500" htmlFor="repassword">
              Нууц үг давтах
            </label>
            <input
              value={rePassword}
              onChange={(e): void => {
                setRePassword(e.target.value);
              }}
              type="password"
              id="repassword"
              className="border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
              placeholder="Нууц үг давтах"
            />
          </div>
        </div>

        <div className="flex items-center gap-[10px] text-sm-regular mb-5">
          <input
            type="checkbox"
            id="accept"
            className="w-[15px] h-[15px] border-2 border-icon"
          />
          <label className="text-text text-teal-500" htmlFor="accept">
            Үйлчилгээний нөхцөл зөвшөөрөх
          </label>
        </div>

        <button
          type="submit"
          className="block w-full py-4 bg-color-6 text-head rounded-lg mb-5 hover:bg-color-6/70 duration-300 text-teal-500"
        >
          Бүртгүүлэх
        </button>

        <p className="text-center text-md-medium mb-5 text-teal-500">Эсвэл</p>

        <div className="grid grid-cols-2 gap-5">
          <button className="flex text-teal-500 items-center justify-center gap-2 text-[#1967d2] py-3 px-5 rounded-lg border-2 border-[#1967d2] hover:bg-[#1967d2] hover:text-white duration-300">
            <FaFacebookF />
            Facebook-ээр бүртгүүлэх
          </button>
          <button className="flex text-teal-500 items-center justify-center gap-2 text-[#D93025] py-3 px-5 rounded-lg border-2 border-[#D93025] hover:bg-[#d93025] hover:text-white duration-300">
            <FaGoogle />
            Google-ээр бүртгүүлэх
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;