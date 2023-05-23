import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Iproduct } from "@/interfaces/product";


export default function News(): JSX.Element {
    const [productData] = useState<Iproduct[]>([]);
    useEffect(() => {
        getData();
    });
    function getData(): void {
        axios
            .post("http://localhost:8000/api/items")
    }
    return (
        <div>
            {productData?.map((item, index) => (
                <div
                    key={index}
                    className="w-full max-w-sm bg-white rounded-lg shadow "
                >
                  <div>
                    <img src={item.itemPhoto}/>
                    <div>
                        <p> h</p>
                    </div>
                    </div>  
                </div>
            ))}
        </div>
    )
}