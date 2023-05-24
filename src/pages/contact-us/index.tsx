import { FC } from "react";
import AccordionAlternative from "@/components/global/AccordionAlternative";
import Link from "next/link";
import Image from "next/image";
import ganzo from "../../images/ganzo.jpg";
import amraa from "../../images/amraa.jpg";
import orgil from "../../images/orgil.jpg";

const ContactUs: FC = () => (
  <>
    <div className="bg-bg-5">
      <div className="flex flex-col">
        <h2 className="text-center text-4xl pt-[50px]">Бидний тухай</h2>
        <div className="w-full flex justify-evenly py-3">
          <div className="w-1/4 border-2 h-auto">
            <Image
              src={amraa}
              alt=""
              className="w-full h-auto"
              width={100}
              height={100}
            />
            <h1 className="text-2xl text-center">Амрааа</h1>
            <h1>Captain</h1>
          </div>
          <div className="w-1/4 border-2 h-auto">
            <Image
              src={ganzo}
              alt=""
              className="w-full h-auto"
              width={100}
              height={100}
            />
            <h1 className="text-2xl text-center">Ганзооо</h1>
            <h1>Developer</h1>
          </div>
          <div className="w-1/4 border-2 h-auto">
            <Image
              src={orgil}
              alt=""
              className="w-full h-auto"
              width={100}
              height={100}
            />
            <h1 className="text-2xl text-center">Оргил</h1>
            <h1>Developer</h1>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-2 relative pt-[112px]">
        <div className="flex flex-col gap-1 px-[70px]">
          <h1 className="font-[700] text-[40px] leading-[46px]">
            Бидэнтэй холбогдох
          </h1>
          <p className="text-lg-regular text-text mb-[175px] w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis, ullam enim adipisci ab aliquid blanditiis reprehenderit
            aperiam repellat aspernatur, quo temporibus? Commodi, amet rem. Vero
            fuga cumque placeat laudantium quas!
          </p>
        </div>
        <div className="bg-bg-1" id="faq">
          <div className="container px-[100px] py-[10px]">
            <h1 className="text-center text-head text-3xl-bold mb-[9px]">
              Түгээмэл Асуултууд
            </h1>
            <p className="text-center text-md-regular text-text mb-[60px]">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <div className="flex flex-col gap-5">
              <AccordionAlternative
                header=""
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              />
              <AccordionAlternative
                header=""
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              />
              <AccordionAlternative
                header=""
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              />
              <AccordionAlternative
                header=""
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              />

              <AccordionAlternative
                header=""
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container px-[70px] mb-[124px] pt-[90px] grid grid-cols-2">
      <div>
        <h3 className="text-2xl-medium text-head mb-[40px]">Манай Оффисууд</h3>
        <div className="grid grid-cols-2 gap-x-[90px] gap-y-[40px]">
          <div>
            <h4 className="text-head text-[20px] font-[500] leading-[23px] mb-[20px]">
              Улаанбаатар
            </h4>
            <div className="text-text text-md-regular flex flex-col gap-[10px]">
              <span>
                <Link href="https://www.google.com/maps/place/47%C2%B054'54.3%22N+106%C2%B053'48.0%22E/@47.914964,106.8976872,17z/data=!4m4!3m3!8m2!3d47.915079!4d106.896679">
                  Bldg 30 of 50000, Улаанбаатар
                </Link>
              </span>
              <span>+(976) 88877108</span>
              <span>orgil.m888@gmail.com</span>
            </div>
          </div>

          <div>
            <h4 className="text-head text-[20px] font-[500] leading-[23px] mb-[20px]">
              Улаанбаатар
            </h4>
            <div className="text-text text-md-regular flex flex-col gap-[10px]">
              <span>
                <Link href="https://www.google.com/maps/place/47%C2%B054'54.3%22N+106%C2%B053'48.0%22E/@47.914964,106.8976872,17z/data=!4m4!3m3!8m2!3d47.915079!4d106.896679">
                  Bldg 30 of 50000, Улаанбаатар
                </Link>
              </span>
              <span>+(976) 88877108</span>
              <span>orgil.m888@gmail.com</span>
            </div>
          </div>

          <div>
            <h4 className="text-head text-[20px] font-[500] leading-[23px] mb-[20px]">
              Улаанбаатар
            </h4>
            <div className="text-text text-md-regular flex flex-col gap-[10px]">
              <span>
                <Link href="https://www.google.com/maps/place/47%C2%B054'54.3%22N+106%C2%B053'48.0%22E/@47.914964,106.8976872,17z/data=!4m4!3m3!8m2!3d47.915079!4d106.896679">
                  Bldg 30 of 50000, Улаанбаатар
                </Link>
              </span>
              <span>+(976) 88877108</span>
              <span>orgil.m888@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col rounded-lg px-[40px] shadow-shadow-3">
        <h3 className="text-2xl-medium mb-[25px] text-head">Мессеж Илгээх</h3>
        <p className="text-md-regular mb-[60px] text-text w-[80%]">
          Neque convallis a cras semper auctor. Libero id faucibus nisl
          tincidunt egetnvallis.
        </p>
        <form className="text-text text-md-regular">
          <div className="mb-4">
            <label
              className="block text-head text-base-medium mb-[9px]"
              htmlFor="username"
            >
              Нэр
            </label>
            <input
              className="appearance-none border rounded-lg w-full py-[15px] px-5 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-color-1"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-head text-base-medium mb-[9px]"
              htmlFor="username"
            >
              Phone
            </label>
            <input
              className="appearance-none border rounded-lg w-full py-[15px] px-5 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-color-1"
              id="username"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-head text-base-medium mb-[9px]"
              htmlFor="email"
            >
              И-мэйл хаяг
            </label>
            <input
              className="appearance-none border rounded-lg w-full py-[15px] px-5 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-color-1"
              id="email"
              type="text"
              placeholder="pinecone@pinecone.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-head text-base-medium mb-[9px]"
              htmlFor="message"
            >
              Мессеж
            </label>
            <textarea
              className="appearance-none border rounded-lg w-full py-[15px] px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-color-1 resize-none"
              id="message"
              rows={10}
            />
          </div>
          <button className="bg-color-1 text-rose-500 text-base- px-[55px] py-[21px] rounded-lg">
            Илгээх
          </button>
        </form>
      </div>
    </div>
  </>
);

export default ContactUs;
