import axios from "axios";
import Link from "next/link";
import { FC, useState, useEffect, useContext, useRef } from "react";
import { FaFacebookF, FaGoogle, FaYahoo } from "react-icons/fa";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import { IUser } from "../../interfaces/user";
import { userIdCon } from "@/context/userIdContext";

const RegisterForm: FC = () => {
  const [userData, setUserData] = useState({});
  const [rePassword, setRePassword] = useState<string>("");
  const [isPasswordRequirementMet, setIsPasswordRequirementMet] =
    useState<boolean>(false);
  const { userId } = useContext(userIdCon);
  const [confirm, setConfirm] = useState(false);
  const [passwordRequirements, setPasswordRequirements] = useState([
    {
      title: "Хамгийн багадаа 8 тэмдэгттэй байх",
      state: false,
      regex: new RegExp("(?=.{8,})"),
    },
    {
      title: "Дор хаяж 1 том үсэг орсон байх",
      state: false,
      regex: new RegExp("(?=.*[A-Z])"),
    },
    {
      title: "Дор хаяж 1 жижиг үсэг орсон байх",
      state: false,
      regex: new RegExp("(?=.*[a-z])"),
    },
    {
      title: "Дор хаяж 1 тоо орсон байх",
      state: false,
      regex: new RegExp("(?=.*[0-9])"),
    },
    {
      title: "Дор хаяж 1 тусгай тэмдэгт орсон байх",
      state: false,
      regex: new RegExp("(?=.*[^A-Za-z0-9])"),
    },
  ]);

  useEffect(() => {
    for (const req of passwordRequirements) {
      if (!req.state) return setIsPasswordRequirementMet(false);
    }

    setIsPasswordRequirementMet(true);
  }, [passwordRequirements]);

  useEffect(() => {
    const newPasswordRequirements = [...passwordRequirements];
    for (const req of newPasswordRequirements) {
      if (req.regex.test(rePassword)) req.state = true;
      else req.state = false;
    }

    setPasswordRequirements(newPasswordRequirements);
  }, [rePassword]);
  useEffect(() => {
    // setUserId(localStorage.getItem("currentUserId"));
    console.log(userId);
  }, []);

  const registerUser = async (event: any) => {
    event.preventDefault();
    const data = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      Username: event.target.username.value,
      birthDate: event.target.birthDate.value,
      email: event.target.email.value,
      phoneNumber: event.target.phoneNumber.value,
      address: event.target.address.value,
      role: "User",
      favItems: ["HI"],
      gender: event.target.gender.value,
      profilePic: "hi",
      password: event.target.password.value,
    };
    // console.log(data);

    if (event.target.password.value == event.target.rePassword.value) {
      setUserData(data);
    } else {
      alert("Нууц үг таарахгүй байна");
    }

    try {
      if (userData) {
        // console.log(userData);

        axios
          .post("http://localhost:8000/api/user", userData)
          .then((res) => {
            if (res.data.result) {
              console.log(res.data.result);

              alert("Amjilttai bvrtgelee");
            } else {
              alert("Medeellee bvren bugluuuc!!!!");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (error) {
      console.log(error);
    }
    // setIsLog(true);
  };
  console.log(confirm);
  // const setConfirm = () => {
  //   confirm = !confirm;
  // };

  return (
    <div>
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
          onSubmit={(event) => {
            registerUser(event);
          }}
          className="text-head"
        >
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div className="w-full">
              <label
                className="block mb-2 text-lg-medium text-teal-500"
                htmlFor="firstName"
              >
                Нэр
              </label>
              <input
                name="firstName"
                type="text"
                id="firstName"
                className="border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
                placeholder="Нэр"
              />
            </div>

            <div className="w-full">
              <label
                className="block mb-2 text-lg-medium text-teal-500"
                htmlFor="lastName"
              >
                Овог
              </label>
              <input
                name="lastName"
                type="text"
                id="lastName"
                className="border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
                placeholder="Овог"
              />
            </div>
            <div className="w-full">
              <label
                className="block mb-2 text-lg-medium text-teal-500"
                htmlFor="username"
              >
                Xэрэглэгчийн нэр
              </label>
              <input
                name="username"
                type="text"
                id="username"
                className="border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
                placeholder="Овог"
              />
            </div>
            <div className="w-full">
              <label
                className="block mb-2 text-lg-medium text-teal-500"
                htmlFor="gender"
              >
                Хүйс
              </label>
              <select
                name="gender"
                id="gender"
                className="border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
              >
                <option value="0">Сонгох....</option>
                <option value="Male">Эрэгтэй</option>
                <option value="Female">Эмэгтэй</option>
              </select>
            </div>
            <div className="w-full">
              <label
                className="block mb-2 text-lg-medium text-teal-500"
                htmlFor="birthDate"
              >
                Төрсөн өдөр
              </label>
              <input
                name="birthDate"
                type={"date"}
                id="birthDate"
                className="border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
              />
            </div>
            <div className="w-full">
              <label
                className="block mb-2 text-lg-medium text-teal-500"
                htmlFor="email"
              >
                И-мэйл
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
                placeholder="И-мэйл"
              />
            </div>

            <div className="w-full">
              <label
                className="block mb-2 text-lg-medium text-teal-500"
                htmlFor="phone"
              >
                Утасны дугаар
              </label>
              <input
                name="phoneNumber"
                type="number"
                id="phone"
                className="border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
                placeholder="Утасны дугаар"
              />
            </div>
            <div className="w-full">
              <label
                className="block mb-2 text-lg-medium text-teal-500"
                htmlFor="address"
              >
                Хаяг
              </label>
              <input
                name="address"
                type="text"
                id="address"
                className="border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
                placeholder="Оршин суугаа хаяг"
              />
            </div>
            <div className="w-[300px]">
              <label
                className="block mb-2 text-lg-medium text-teal-500"
                htmlFor="password"
              >
                Нууц үг
              </label>
              <input
                name="password"
                type="password"
                id="password"
                className="border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
                placeholder="Нууц үг"
              />
            </div>

            <div className="w-[300px]">
              <label
                className="block mb-2 text-lg-medium text-teal-500"
                htmlFor="repassword"
              >
                Нууц үг давтах
              </label>
              <input
                value={rePassword}
                onChange={(e): void => {
                  setRePassword(e.target.value);
                }}
                type="password"
                name="rePassword"
                id="repassword"
                className="border border-border-2 w-full py-[12px] px-[22px] rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1 text-text text-md-regular"
                placeholder="Нууц үг давтах"
              />
            </div>
          </div>
          <div className="mb-7">
            <ul className="flex flex-col gap-1 text-md-regular">
              {passwordRequirements.map((requirement, index) => (
                <li
                  key={`password-requirement-${index}`}
                  className={`flex items-center gap-2 ${
                    requirement.state ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {requirement.state && <BsCheckCircle size={15} />}
                  {!requirement.state && <BsXCircle size={15} />}
                  {requirement.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-[10px] text-sm-regular mb-5">
            <input
              type="checkbox"
              id="accept"
              className="w-[15px] h-[15px] border-2 border-icon"
              onClick={() => setConfirm(!confirm)}
            />
            <label className="text-text text-teal-500" htmlFor="accept">
              Үйлчилгээний нөхцөл зөвшөөрөх
            </label>
          </div>

          <button
            type="submit"
            className="block w-full py-4  text-head rounded-lg mb-5 hover:bg-color-6/70 duration-300 text-teal-500"
            disabled={confirm ? false : true}
          >
            {/* {userId ? (
            <Link href={"/"}>Бүртгүүлэх</Link>
          ) : (
            <Link href="/signup">Бүртгүүлэх</Link>
          )} */}
            Бүртгүүлэх
          </button>

          <p className="text-center text-md-medium mb-5 text-teal-500">Эсвэл</p>

          <div className="grid grid-cols-2 gap-5">
            <button className="flex text-teal-500 items-center justify-center gap-2 text-[#1967d2] py-3 px-5 rounded-lg border-2 border-[#1967d2] hover:bg-[#1967d2] hover:text-white duration-300">
              <FaYahoo />
              Yahoo-ээр бүртгүүлэх
            </button>
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
    </div>
  );
};

export default RegisterForm;
