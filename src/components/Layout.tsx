import React from "react";
import {Header}  from "./Header";
import {Meta}  from "./Meta";
import {Footer}  from "./Footer";


export const Layout = ({ children }: any) => {
  return (
    <>
      <Meta />
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  );
};