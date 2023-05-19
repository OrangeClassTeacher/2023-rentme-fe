import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import { SearchContext } from "@/context/searchTextContext";
import { userIdCon } from "@/context/userIdContext";
import { LoadingProvider } from "@/context/LoadingContext";
import { sortValContext } from "@/context/SortContext";
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState("");
  const [sortVal, setSortVal] = useState({});

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <userIdCon.Provider value={{ userId, setUserId }}>
        <sortValContext.Provider value={{ sortVal, setSortVal }}>
          <LoadingProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LoadingProvider>
        </sortValContext.Provider>
      </userIdCon.Provider>
    </SearchContext.Provider>
  );
}
