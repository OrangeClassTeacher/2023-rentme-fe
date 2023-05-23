import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import { IUser } from "../../interfaces/user";
import { Utils } from "../../utils/helper";
import { Iproduct } from "@/interfaces/product";

export default function RentModal(): JSX.Element {
  const [confirm, setConfirm] = useState(false);
  const [userData, setUserData] = useState<IUser>();
  const [itemData, setItemData] = useState<Iproduct>();
  const route = useRouter();
  const { _id } = route.query;
  useEffect(() => {
    if (_id) {
      getItemData();
      getUserData();
    }
  }, [_id]);
  function getUserData(): void {
    axios
      .get(`${Utils.API_URL}/user/${itemData?.createdUser}`)
      .then((res) => setUserData(res.data.result))
      .catch((err) => console.log(err));
  }
  function getItemData(): void {
    axios
      .get(`${Utils.API_URL}/item/${_id}`)
      .then((res) => setItemData(res.data.result))
      .catch((err) => console.log(err));
  }
  function rentItem(): void {
    axios
      .put(`${Utils.API_URL}/item/${_id}`, { status: "Rented" })
      .then(() => console.log("Rent success"))
      .catch((err) => console.log(err));
  }
  return (
    <div className="w-100 flex justify-center bg-opacity-50  bg-gray-500 pt-12 pb-36">
      {confirm ? (
        <div className="flex flex-col gap-4 w-3/4 items-center">
          <div>
            <Image
              src={userData?.profilePic || ""}
              alt="Profie"
              width={100}
              height={100}
            />
          </div>
          <h1 className="text-black text-2xl">{userData?.Username}</h1>
          <p>Email : {userData?.email}</p>
          <p>Phone : {userData?.phoneNumber}</p>
          <div className="flex justify-around w-full px-24 pt-12">
            <button
              onClick={(): void => setConfirm(false)}
              className="bg-yellow-500 hover:bg-orange-700 text-white font-bold py-2 px-4 w-1/4 rounded-full"
            >
              Түрээслээгүй
            </button>
            <button
              className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-1/4 rounded-full"
              onClick={rentItem}
            >
              Түрээслэсэн
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-3/4 border-2 px-24 py-6">
          <div className="w-full flex flex-col pb-2 ">
            <h1 className="text-3xl pb-5 text-center">
              Үйлчилгээний нөхцөлтэй танилцах
            </h1>
            <h1 className="h-80 overflow-auto text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using Content here, content here, making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              lorem ipsum will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </h1>
            <div className="flex items-center justify-center">
              <label htmlFor="legal" className="text-xl">
                Үйлчилгээний нөхцөл зөвшөөрөх
              </label>
              <input
                id="legal"
                type="checkbox"
                className="w-8"
                onChange={(): void => setConfirm(true)}
              />
            </div>
          </div>
          <button className="bg-yellow-500 hover:bg-orange-700 text-white font-bold py-2 px-4 w-1/6 rounded-full">
            <Link href={"/"}>Буцах</Link>
          </button>
        </div>
      )}
    </div>
  );
}
