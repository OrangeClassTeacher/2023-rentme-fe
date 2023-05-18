// import React, { useState, useEffect, useContext } from "react";
// import { userIdCon } from "@/context/userIdContext";
// import axios from "axios";
// import { FiLogOut } from "react-icons/fi";
// import { TiDeleteOutline } from "react-icons/ti";
// import Link from "next/link";

// export const UserProfie = ({ USer, setUSer }) => {
//   const [userData, setUserData] = useState({});
//   const { userId, setUserId } = useContext(userIdCon);

//   useEffect(() => {
//     getUserData();
//   }, [userId]);
//   const getUserData = () => {
//     axios.get(`http://localhost:8000/api/user/${userId}`).then((res) => {
//       setUserData(res.data.result);
//     });
//   };
//   const logOut = () => {
//     localStorage.removeItem("currentUserId");
//     setUserId("");
//   };

//   return (
//     <div className="realtive">
//       {USer ? (
//         <div className="absolute  z-0 h-auto w-auto flex py-6 flex-col items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-500 rounded ">
//           <div className="w-2/5">
//             <img
//               src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
//               alt="avatar"
//               className="w-full rounded-full"
//             />
//           </div>
//           <p>{userData?.Username}</p>
//           <button className="text-head w-full py-2 text-md-regular hover:bg-white/70 duration-300 flex border-t-4 justify-center items-center gap-2">
//             <Link href={"/userInfo"}>Edit Profile</Link>
//           </button>
//           <button
//             onClick={logOut}
//             className="text-head  w-full py-2 text-md-regular hover:bg-white/70 duration-300 flex border-t-4 justify-center items-center gap-2"
//           >
//             <Link href={"/"} className="flex justify-center items-center gap-1">
//               Log Out
//               <FiLogOut className="h-full text-lg" />
//             </Link>
//           </button>
//         </div>
//       ) : (
//         <div className="flex items-center gap-1">
//           <img
//             src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
//             alt="avatar"
//             className="w-12 rounded-full"
//           />
//           <h1>{userData?.Username}</h1>
//         </div>
//       )}
//     </div>
//   );
// };
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useContext, useEffect } from "react";
import { userIdCon } from "@/context/userIdContext";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function MyModal(): JSX.Element {
  const [userData, setUserData] = useState({});
  const { userId, setUserId } = useContext(userIdCon);

  useEffect(() => {
    getUserData();
  }, [userId]);
  const getUserData = () => {
    axios.get(`http://localhost:8000/api/user/${userId}`).then((res) => {
      setUserData(res.data.result);
    });
  };
  const logOut = () => {
    localStorage.removeItem("currentUserId");
    setUserId("");
    closeModal();
  };

  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button type="button" onClick={openModal} className="rounded ">
          <Image
            src={userData.profilePic}
            alt="profile"
            width={100}
            height={100}
          />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <Image
                      src={userData.profilePic}
                      alt="profile"
                      width={100}
                      height={100}
                    />
                  </Dialog.Title>
                  <div className="mt-2">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      <Link href={"/userInfo"}>Edit Profile</Link>
                    </button>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={logOut}
                    >
                      Log Out
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
