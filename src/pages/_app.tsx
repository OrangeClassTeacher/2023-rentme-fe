import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import { SearchContext } from "@/context/searchTextContext";
export default function App({ Component, pageProps }: AppProps) {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchContext.Provider>
  );
}
