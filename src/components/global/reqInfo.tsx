import React, { useState, useEffect } from "react";
import axios from "axios";
import { Utils } from "../../utils/helper";
import { IUser } from "../../interfaces/user";
import { Iproduct } from "../../interfaces/product";

export default function ReqInfo(): JSX.Element {
  const [proId, setProId] = useState("");
  const [itemData, setItemData] = useState<Iproduct>();
  const [userData, setUserData] = useState<IUser[]>();
  const { requests }: any = itemData || [];
  useEffect(() => {
    setProId(localStorage.getItem("proId") || "");
  }, []);

  useEffect(() => {
    getItemData();
  }, [proId]);

  useEffect(() => {
    getUserData();
  }, [itemData]);

  const getItemData = () => {
    if (proId) {
      axios
        .get(`${Utils.API_URL}/item/${proId}`)
        .then((res) => setItemData(res.data.result))
        .catch((err) => console.log(err));
    }
  };
  const getUserData = () => {
    axios
      .get(`${Utils.API_URL}/users`)
      .then((res) => setUserData(res.data.result))
      .catch((err) => console.log(err));
  };
  //   console.log(userData);
  //   console.log(requests);

  return (
    <div className="flex flex-col sdkd">
      {requests?.map((item: any, index: number) => {
        return userData?.map((user, index) => {
          if (item.userId == user._id) {
            console.log("sasas", item.userId, user._id);

            return (
              <div className="flex" key={index}>
                <h1>{user.Username}</h1>
                <div className="flex">
                  <button>Delete</button>
                  <button>Confirm</button>
                </div>
              </div>
            );
          }
        });
      })}
    </div>
  );
}
