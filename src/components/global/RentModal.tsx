import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { Utils } from "../../utils/helper";
import { Iproduct } from "@/interfaces/product";
import { userIdCon } from "@/context/userIdContext";

export default function RentModal(): JSX.Element {
  const [legacyConfirm, setLegacyConfirm] = useState(false);
  const { userId } = useContext(userIdCon);
  const [itemData, setItemData] = useState<Iproduct>();
  const route = useRouter();
  const { requests }: any = itemData || {};
  const { _id } = route.query;
  useEffect(() => {
    getItemData();
  }, [_id]);
  const getItemData = (): void => {
    if (_id) {
      axios
        .get(`${Utils.API_URL}/item/${_id}`)
        .then((res) => {
          console.log(res.data.result);
          setItemData(res.data.result);
        })
        .catch((err) => console.log(err));
    }
  };

  const rentItem = (): void => {
    console.log(_id);
    const newArr = [...requests];
    const newObj = { userId: userId, status: "Pending" };
    newArr.push(newObj);
    axios
      .put(`${Utils.API_URL}/item/${_id}`, {
        requests: newArr,
      })
      .then((res) => console.log(res.data.result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-100 flex justify-center bg-opacity-50  bg-gray-500 pt-12 pb-36">
      <div className="flex flex-col w-3/4 border-2 px-24 py-6">
        <div className="w-full flex flex-col pb-2 ">
          <h1 className="text-5xl pb-12 text-center underline underline-offset-8">
            Үйлчилгээний нөхцөлтэй танилцах
          </h1>
          <h1 className="h-80 overflow-auto  px-64">
            --Хэрэглэгч нь имэйл, facebook, утасны дугаар зэрэг нэвтрэх боломжит
            аль нэг хаягаар нэвтрэн орж бүртгэлээ баталгаажуулснаар дараах
            мэдэгдлийг хүлээн зөвшөөрч, ойлгосон болно. Энэхүү платформд нэвтрэн
            орсоноор бараа, бүтээгдэхүүн хөлслөх, зар мэдээг үнэ төлбөргүй
            хүлээн авах, хайлт хийх, хадгалах боломжтой. Хэрэглэгч нь тусгайлсан
            гэрээ байгуулснаар зуучлал болон санхүүгийн үйлчилгээг авах эрхтэй
            бөгөөд тэдгээр нь барьцаа эсвэл төлбөртэй үйлчилгээ болно. Рэнтми
            платформыг ашиглан нэвтрэн үзэх боломжтой программ, дизайны элемент,
            текст, график, дүрслэл, видео, мэдээллийн бааз, дуу, бусад объект,
            түүнчлэн үйлчилгээний цахим хуудсанд байрлуулсан ямар нэгэн агуулга
            нь Рэнтми хэрэглэгчдийн болон бусад эрх эзэмшигчийн онцгой эрх
            болно. Хэрэглэгч вэбсайтын талаар санал гомдол, шинэ санаа санал,
            шүүмж зэргийг чөлөөтэй илэрхийлэх, илгээх эрхтэй. Хэрэглэгч нь
            платформ дээрх контентийг бүрэн буюу хэсэгчлэн арилжааны зорилгоор
            ашиглахгүй байх үүрэг хүлээнэ. Хэрэглэгч нь платформд нэвтрэх цахим
            шуудан болон нууц үгийн нууцлалыг өөрөө хариуцаж, хадгална. Энэхүү
            үүргээ биелүүлээгүй буюу зохих ёсоор биелүүлээгүйн улмаас учирсан
            аливаа хохирлыг компани хариуцахгүй болно.
          </h1>
          <div className="flex items-center justify-center">
            <label htmlFor="legal" className="text-xl">
              Үйлчилгээний нөхцөл зөвшөөрөх
            </label>
            <input
              id="legal"
              type="checkbox"
              className="w-8"
              onChange={(): void => setLegacyConfirm(!legacyConfirm)}
            />
          </div>
        </div>
        <div className="flex justify-between w-full">
          <button className="bg-yellow-500 hover:bg-orange-700 text-white font-bold py-2 px-4 w-1/6 rounded-full">
            <Link href={"/"}>Буцах</Link>
          </button>
          {legacyConfirm ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-1/6 rounded-full"
              onClick={rentItem}
            >
              Хүсэлт илгээх
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
