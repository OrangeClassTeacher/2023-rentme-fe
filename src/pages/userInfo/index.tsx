import React, { useEffect, useState, useContext } from "react";
import { userIdCon } from "@/context/userIdContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
// import { AiFillEdit } from "react-icons/ai";
function Index() {
  const { userId, setUserId } = useContext(userIdCon);
  const [userData, setUserData] = useState({});
  const [update, setUpdate] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [productData, setProductData] = useState([]);
  const router = useRouter();
  const { _id } = router.query;
  // console.log(_id);
  const { followers, following }: any = userData;
  // console.log(following);

  useEffect(() => {
    if (userId) {
      getProducts();
      getUserData();
      setUserId(localStorage.getItem("currentUserId"));
      // console.log(following);
    }
  }, [userId, followers, following]);

  const getUserData = () => {
    if (_id) {
      axios
        .get(`http://localhost:8000/api/user/${_id}`)
        .then((res) => setUserData(res.data.result));
    } else if (userId) {
      axios
        .get(`http://localhost:8000/api/user/${userId}`)
        .then((res) => setUserData(res.data.result));
    } else {
      alert("UserId not found");
    }
  };
  const getProducts = () => {
    if (userId) {
      axios
        .post("http://localhost:8000/api/itemUser", { createdUser: userId })
        .then((res) => {
          setProductData(res.data.result);
        })
        .catch((err) => console.log(err));
    }
  };
  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:8000/api/item/${id}`)
      .then((res) => alert("Amjilttai ustgalaa"))
      .catch((err) => alert("Product not found"));
    getProducts();
    getUserData();
  };
  const updateUserInfo = (event: any) => {
    const updatedUserData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      Username: event.target.username.value,
      email: event.target.email.value,
      phoneNumber: event.target.phone.value,
      birthDate: event.target.birthDate.value,
      address: event.target.address.value,
      role: "User",
      favItems: ["hi", "hi"],
      gender: event.target.gender.value,
    };

    if (userId) {
      axios
        .put(`http://localhost:8000/api/user/${userId}`, updatedUserData)
        .then((res) => {
          console.log(res.data.result);

          setUpdate(!update);
        })
        .catch((err) => console.log(err));
    } else {
      alert("UserId not found");
    }
    getUserData();
  };
  // console.log(productData);

  return (
    <div className="bg-white">
      {update ? (
        <div className="flex flex-col items-center justify-center py-3">
          <div className="w-full flex justify-between px-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              <Link href="/">Буцах</Link>
            </button>
            {update ? (
              <button
                onClick={() => setUpdate(!update)}
                className="bg-yellow-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Буцах
              </button>
            ) : (
              <button
                onClick={() => setUpdate(!update)}
                className="bg-yellow-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Edit profile
              </button>
            )}
          </div>
          <form
            onSubmit={updateUserInfo}
            className="w-full flex flex-col items-center justify-center  "
          >
            <div className="flex w-2/3 flex-col justify-center items-center gap-4 py-8 border border-indigo-600">
              <img
                src={userData?.profilePic}
                alt="avatar"
                className="w-2/5 rounded-full"
              />
              <div className="w-2/3 flex justify-evenly ">
                <h1 className="text-xl w-2/4 text-center text-black">
                  First name :
                </h1>

                <input
                  defaultValue={userData.firstName}
                  name="firstName"
                  type="text"
                  className="border-bottom appearance-none w-2/4 text-start text-xl text-black bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                />
              </div>
              <div className="w-2/3 flex justify-evenly">
                <h1 className="text-xl w-2/4 text-center text-black">
                  Last name :
                </h1>
                <input
                  defaultValue={userData.lastName}
                  name="lastName"
                  type="text"
                  className="appearance-none text-start w-2/4 text-xl text-black bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                />
              </div>
              <div className="w-2/3 flex justify-evenly">
                <h1 className="text-xl w-2/4 text-center text-black">
                  Username :
                </h1>
                <input
                  defaultValue={userData.Username}
                  name="username"
                  type="text"
                  className="appearance-none text-start w-2/4 text-xl text-black bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                />
              </div>
              <div className="w-2/3 flex justify-evenly">
                <h1 className="text-xl w-2/4 text-center text-black">
                  E-mail :
                </h1>
                <input
                  defaultValue={userData.email}
                  name="email"
                  type="text"
                  className="appearance-none text-start text-xl w-2/4 text-black bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                />
              </div>
              <div className="w-2/3 flex justify-evenly">
                <h1 className="text-xl w-2/4 text-center text-black">
                  Phone number :
                </h1>
                <input
                  defaultValue={userData.phoneNumber}
                  name="phone"
                  type="number"
                  className="appearance-none text-start w-2/4 text-xl text-black bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                />
              </div>
              <div className="w-2/3 flex justify-evenly">
                <h1 className="text-xl w-2/4 text-center text-black">
                  Birth date :
                </h1>
                <input
                  defaultValue={userData.birthDate}
                  name="birthDate"
                  type="text"
                  className="appearance-none text-start w-2/4 text-xl text-black bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                />
              </div>
              <div className="w-2/3 flex justify-evenly">
                <h1 className="text-xl w-2/4 text-center text-black">
                  Address :
                </h1>
                <input
                  defaultValue={userData.address}
                  name="address"
                  type="text"
                  className="appearance-none text-start text-xl w-2/4 text-black bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                />
              </div>
              <div className="w-2/3 flex justify-evenly">
                <h1 className="text-xl w-2/4 text-center text-black">
                  Gender :
                </h1>
                <input
                  defaultValue={userData.gender}
                  name="gender"
                  type="text"
                  className="appearance-none text-start text-xl w-2/4 text-black bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                />
              </div>
              <button
                type={"submit"}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-3">
          <div className="w-full flex justify-between px-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              <Link href="/">Буцах</Link>
            </button>
            {update ? (
              <button
                onClick={() => setUpdate(!update)}
                className="bg-yellow-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Буцах
              </button>
            ) : (
              <button
                onClick={() => setUpdate(!update)}
                className="bg-yellow-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Edit profile
              </button>
            )}
          </div>

          <div className="w-full flex pt-3">
            <div className="w-2/4 flex flex-col">
              <h1 className="text-2xl ps-5">Хэрэглэгчийн мэдээлэл</h1>

              <div className="flex w-full flex-col justify-center items-center gap-4 py-8">
                <img
                  src={userData?.profilePic}
                  alt="avatar"
                  className="w-2/5 rounded-full"
                />
                <div className="w-2/3 flex justify-evenly">
                  <div className="w-1/3 flex flex-col items-center border-r-2 border-black">
                    <button onClick={() => setShowFollowers(!showFollowers)}>
                      Followers
                    </button>
                    <p className="text-center"> {followers?.length}</p>
                  </div>
                  <div className="w-1/3 flex flex-col items-center border-r-2 border-black">
                    <button onClick={() => setShowFollowing(!showFollowing)}>
                      {" "}
                      Following{" "}
                    </button>
                    <p>{following?.length}</p>
                  </div>
                  <div className="w-1/3 flex flex-col items-center">
                    <p>Posts</p> <p>{productData.length}</p>
                    {/* test */}
                  </div>
                </div>
                <div>
                  {showFollowers ? (
                    <div className="absolute bg-black">
                      <h1 className="text-3xl text-white">Followers</h1>
                      {followers?.map((item: any, index: number) => {
                        return (
                          <div key={index}>
                            <h1 className="text-white">{item}</h1>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                  {showFollowing ? (
                    <div className="absolute bg-black">
                      <h1 className="text-3xl text-white">Following </h1>
                      {following?.map((item: any, index: number) => {
                        return (
                          <div key={index}>
                            <h1 className="text-white">{item}</h1>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="w-2/3 flex justify-evenly ">
                  <h1 className="text-xl w-2/4 text-center text-black">
                    First name :
                  </h1>
                  <h1 className="text-xl w-2/4 text-start text-black">
                    {userData?.firstName}
                  </h1>
                </div>
                <div className="w-2/3 flex justify-evenly">
                  <h1 className="text-xl w-2/4 text-center text-black">
                    Last name :
                  </h1>
                  <h1 className="text-xl w-2/4 text-start text-black">
                    {userData?.lastName}
                  </h1>
                </div>
                <div className="w-2/3 flex justify-evenly">
                  <h1 className="text-xl w-2/4 text-center text-black">
                    Username :
                  </h1>
                  <h1 className="text-xl w-2/4 text-start text-black">
                    {userData?.Username}
                  </h1>
                </div>
                <div className="w-2/3 flex justify-evenly">
                  <h1 className="text-xl w-2/4 text-center text-black">
                    E-mail :
                  </h1>
                  <h1 className="text-xl w-2/4 text-start text-black">
                    {userData?.email}
                  </h1>
                </div>
                <div className="w-2/3 flex justify-evenly">
                  <h1 className="text-xl w-2/4 text-center text-black ">
                    Phone number :
                  </h1>
                  <a href="tel" className="text-xl w-2/4 text-start text-black">
                    {userData?.phoneNumber}
                  </a>
                </div>
                <div className="w-2/3 flex justify-evenly">
                  <h1 className="text-xl w-2/4 text-center text-black">
                    Birth date :
                  </h1>
                  <h1 className="text-xl w-2/4 text-start text-black">
                    {userData?.birthDate}
                  </h1>
                </div>
                <div className="w-2/3 flex justify-evenly">
                  <h1 className="text-xl w-2/4 text-center text-black">
                    Address :
                  </h1>
                  <h1 className="text-xl w-2/4 text-start text-black">
                    {userData?.address}
                  </h1>
                </div>
                <div className="w-2/3 flex justify-evenly">
                  <h1 className="text-xl w-2/4 text-center text-black">
                    Gender :
                  </h1>
                  <h1 className="text-xl w-2/4 text-start text-black">
                    {userData?.gender}
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-2/4 flex flex-col gap-4">
              <h1 className="text-2xl">Хэрэглэгчийн оруулсан зар</h1>
              <div className="w-full flex flex-wrap gap-10 h-[85vh] overflow-auto">
                {productData?.map((item, index) => {
                  return (
                    <div key={index} className="w-1/3 flex flex-col">
                      <div className="w-full">
                        <img src={item.itemPhoto} alt="" className="w-full" />
                      </div>
                      <div className="w-full flex flex-col text-center">
                        <h1>{item?.itemName}</h1>
                        <p>{item?.description}</p>
                        <p>{item?.rentalPrice}</p>
                        <div className="flex w-full">
                          <button
                            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => deleteItem(item._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Index;
