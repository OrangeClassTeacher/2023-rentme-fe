import { FC } from "react";
import Image from "next/image";
import ganzo from "@/assets/ganzo.jpg";
import amraa from "../../images/amraa.jpg";
import orgil from "@/assets/orgil.jpg";
import icon1 from "@/assets/fireworks.png";
import icon2 from "@/assets/shield.png";
import icon3 from "@/assets/eco-friendly.png";

const AdvantageSection: FC = () => (
  <>
    <div className="mb-16 lg:mb-[120px]">
      <h1 className="font-[700] text-[40px] leading-[47px] text-head text-center mb-1">
        Бидний тухай
      </h1>
      <div className="border pt-8 px-32 mb-[50px]">
        <p className="text-lg-regular px-8 lg:px-0 mb-14 text-text text-center lg:mb-[86px]">
          Зарах гэхээр дараа нь хэрэг болох гээд байдаг мөртлөө гэрт зүгээр
          хэвтэж байхаар хэдэн төгрөгөөр түрээслээд байдаг бол ч... Даан ч хүний
          юмыг ариг гамтай хэрэглээд буцаагаад өгнө гэж худлаа л даа. Барьцаа
          авна гэхээр түрээслэх хүн олдохгүй. Зааза байж л байг дээ. гэсэн бодол
          хэзээ нэгэн төрж байсан бол эсвэл ганц удаа л хэрэглэх зүйлээ худалдах
          авах эсэх талаар эргэлзэж байсан бол манайд хандаарай. Бид таны
          асуудлыг шийдэж өгье.
        </p>
      </div>
      <div className="flex flex-col lg:flex-cols-2 lg:gap-[172px] items-center lg:pr-[120px]">
        <div className="flex gap-[40px] items-center">
          <div className=" pl-[50px]">
            <div className="max-w-[400px] max-h-[400px] rounded-[16px] overflow-hidden">
              <Image src={ganzo} alt="" className="w-full h-full bg-color-1" />
            </div>
            <div className="text-center mt-8">
              <h1 className="text-xl mb-3">Б.Ганзориг</h1>
              <p className="text-green-500 text-xl">Full-stack Developer</p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="">
              <div className="max-w-[300px] max-h-[400px] rounded-[16px] overflow-hidden">
                <Image
                  src={amraa}
                  alt=""
                  className="bg-color-1 w-full h-full"
                />
              </div>
              <div className="mx-16 mt-8">
                <h1 className="text-xl mb-3">Ц.Амарбаясгалан</h1>
                <p className="text-green-500 text-xl">Developer & Captain</p>
              </div>
            </div>
            <div className="">
              <div className="max-w-[400px] max-h-[450px] rounded-[16px] overflow-hidden">
                <Image
                  src={orgil}
                  alt=""
                  className="bg-color-1 w-full h-full"
                />
              </div>
              <div className="text-center mt-8">
                <h1 className="text-xl mb-3">Г.Мөнх-Оргил</h1>
                <p className="text-green-500 text-xl">Full-stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-color-2 py-[120px] h-[950px]">
      <div className="grid grid-cols-1 text-white">
        <h1 className="text-black text-3xl-bold text-center mb-[9px]">
          Яагаад манайхаас түрээслэх вэ?
        </h1>
        <p className="text-black text-md-regular text-center mb-[51px]">
          Манайхыг сонгох шалтгаан
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
          <div className="border border-solid border-white/[0.25] px-[60px] pt-[60px] pb-[51px] rounded-lg text-center group hover:bg-white cursor-pointer duration-300 flex flex-col items-center ">
            <div className="mb-[37px]">
              <Image
                className="fill-color-6 group-hover:fill-color-2 duration-300"
                width="80"
                height="80"
                alt=""
                src={icon2}
              />
            </div>
            <h1 className="text-black text-2xl-bold group-hover:text-head mb-4 duration-300">
              01. Reliable
            </h1>
            <p className="text-black text-md-regular  max-w-[290px] group-hover:text-head duration-300">
              something that provides a consistent, predictable experience when
              used or observed
            </p>
          </div>

          <div className="border border-solid border-white/[0.25] px-[60px] pt-[60px] pb-[51px] rounded-lg text-center group hover:bg-white cursor-pointer duration-300 flex flex-col items-center ">
            <div className="mb-[37px]">
              <Image
                className="fill-color-6 group-hover:fill-color-2 duration-300"
                width="80"
                height="80"
                alt=""
                src={icon3}
              />
            </div>
            <h1 className="text-black text-2xl-bold group-hover:text-head mb-4 duration-300">
              02. Eco
            </h1>
            <p className="text-black text-md-regular max-w-[290px] group-hover:text-head duration-300">
              Eco-friendly items and materials are defined as being not
              environmentally harmful.
            </p>
          </div>

          <div className="border border-solid border-white/[0.25] px-[60px] pt-[60px] pb-[51px] rounded-lg text-center group hover:bg-white cursor-pointer duration-300 flex flex-col items-center ">
            <div className="mb-[37px]">
              <Image
                className="fill-color-6 group-hover:fill-color-2 duration-300"
                width="80"
                height="80"
                alt=""
                src={icon1}
              />
            </div>
            <h1 className="text-black text-2xl-bold group-hover:text-head mb-4 duration-300">
              03. New-Gen
            </h1>
            <p className="text-black text-md-regular max-w-[290px] group-hover:text-head duration-300">
              a product that has been developed using the latest technology and
              will probably replace an existing produc
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AdvantageSection;
