import React, { useEffect, useState, useContext } from "react";
import { userIdCon } from "@/context/userIdContext";

export default function RentModal() {
  const { userId } = useContext(userIdCon);
  return (
    <div className="w-100 flex justify-center bg-opacity-50  py-48">
      <div className="w-2/4">
        <h1>Rental form</h1>
      </div>
    </div>
  );
}
