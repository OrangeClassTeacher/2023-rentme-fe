import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState, useEffect } from "react";
import { SearchContext } from "@/context/searchTextContext";
import { userIdCon } from "@/context/userIdContext";
export default function App({ Component, pageProps }: AppProps) {
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState("");
  console.log(search);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <userIdCon.Provider value={{ userId, setUserId }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </userIdCon.Provider>
    </SearchContext.Provider>
  );
}
