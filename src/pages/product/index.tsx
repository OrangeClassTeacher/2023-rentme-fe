import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Iproduct } from "../../interfaces/product";
import { SearchContext } from "@/context/searchTextContext";
import context from "react-bootstrap/esm/AccordionContext";
export default function Index() {
  const [productData, setProductData] = useState<Iproduct[]>();
  const { search } = useContext<any>(SearchContext);

  useEffect(() => {
    getData();
  }, [search]);

  const getData = () => {
    if (context) {
      axios
        .post("http://localhost:8000/api/items", { searchText: search })
        .then((res) => setProductData(res.data.result));
    } else {
      axios
        .get("http://localhost:8000/api/item")
        .then((res) => setProductData(res.data.result));
    }
  };
  return (
    <div>
      {productData ? (
        productData.map((item, index): JSX.Element => {
          return (
            <div key={index}>
              <h1>{item.description}</h1>
            </div>
          );
        })
      ) : (
        <h1 className="text-purple-500">Product Not Found</h1>
      )}
    </div>
  );
}
