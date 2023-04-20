import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImFacebook, ImTwitter, ImLinkedin2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';

import mainLogo from '@/images/logo.png';

export const Footer = () => {
    return(
        <div className="bg-head bg-teal-300">
    <div className="container">
      <div className="py-[60px] text-white flex items-center  justify-between border-b border-b-white/[.15]">
        <div className="text-2xl-medium pb-2 hover:text-color-6">
          <Link href="/">
            <Image className='h-10 w-10' src={mainLogo} alt="IntelliSense" />
          </Link>
        </div>
        <div className="flex items-center gap-[30px]">
          <p className="text-lg-medium">Follow Us On Social Media</p>
          <div className="flex justify-between gap-4 text-sm">
            <Link className="text-white p-4 rounded-full hover:bg-white/10 duration-300" href="/">
              <ImFacebook />
            </Link>
            <Link className="text-white p-4 rounded-full hover:bg-white/10 duration-300" href="/">
              <ImTwitter />
            </Link>
            <Link className="text-white p-4 rounded-full hover:bg-white/10 duration-300" href="/">
              <BsInstagram />
            </Link>
            <Link className="text-white p-4 rounded-full hover:bg-white/10 duration-300" href="/">
              <ImLinkedin2 />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-white grid grid-cols-12 pt-[60px] pb-[127px] border-b border-b-white/[.15]">
        <div className="col-span-9 grid grid-cols-4">
          <ul className="flex flex-col gap-4 text-md-regular">
            <p className="uppercase mb-[26px] text-lg-medium">About</p>
            <li className="hover:text-color-6">
              <Link href="/">About Us</Link>
            </li>
            <li className="hover:text-color-6">
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
          <div className="grid grid-cols-2 col-span-2">
            <ul className="flex flex-col gap-4 text-md-regular">
              <p className="uppercase mb-[26px]">Categories</p>
              <li className="hover:text-color-6">
                <Link href="/">Book </Link>
              </li>
              <li className="hover:text-color-6">
                <Link href="/">Camping Equipment</Link>
              </li>
              <li className="hover:text-color-6">
                <Link href="/">Car Rent & Equipment</Link>
              </li>
              <li className="hover:text-color-6">
                <Link href="/">Clothes </Link>
              </li>
              <li className="hover:text-color-6">
                <Link href="/">Kine</Link>
              </li>
              <li className="hover:text-color-6">
                <Link href="/">Other</Link>
              </li>
            </ul>
          </div>

          <ul className="flex flex-col gap-4 text-md-regular">
            <p className="uppercase mb-[26px] select-none text-lg-medium">Support</p>
            <li className="hover:text-color-6">
              <Link href="/">Documentation </Link>
            </li>
            <li className="hover:text-color-6">
              <Link href="/">FAQS </Link>
            </li>
            <li className="hover:text-color-6">
              <Link href="/">Dashboard </Link>
            </li>
            <li className="hover:text-color-6">
              <Link href="/">Contact </Link>
            </li>
            <li className="hover:text-color-6">
              <Link href="/"> Office </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-3">
          <p className="uppercase mb-[26px] select-none text-lg-medium">Get in touch</p>
          <p className="mb-5 text-md-regular">We don’t send spam so don’t worry.</p>
          <div className="relative bg-white w-full h-[60px] rounded-full pl-[30px] text-sm-regular focus-within:ring-4 focus-within:ring-color-1">
            <input
              type="text"
              placeholder="Email..."
              className="w-[calc(100%_-_100px)] h-full rounded-full text-text focus:outline-none placeholder:text-text"
            />

            <button className="absolute top-[10px] right-[10px] bottom-[10px] py-[12px] px-6 bg-color-1 rounded-[60px] hover:bg-color-1/80 duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between py-12 text-white text-xs-regular">
        <p>© 2023 RentMe. All Right Reserved.</p>

        <div className="flex items-center">
          <ul className="flex gap-3 items-center">
            <li className="pb-2 hover:text-color-6 cursor-pointer">
              <Link href="/">Help</Link>
            </li>
            <li className="pb-2 hover:text-color-6 cursor-pointer">
              <Link href="/">Privacy Policy</Link>
            </li>
            <li className="pb-2 hover:text-color-6 cursor-pointer">
              <Link href="/">Cookie Notice</Link>
            </li>
            <li className="pb-2 hover:text-color-6 cursor-pointer">
              <Link href="/">Security</Link>
            </li>
            <li className="pb-2 hover:text-color-6 cursor-pointer">
              <Link href="/">Terms of Use</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    )
}