import react from "react";
import Image from "next/image";

export const Logo = () => {
    return(
       <Image
       alt="logo"
       className="cursor-pointer"
       height="50"
       width="50"
       src="/logo.png"/> 
    )
}