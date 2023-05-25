import Link from "next/link";
export function Footer(): JSX.Element {
  return (
    <div className="bg-head bg-gradient-to-r from-gray-900 to-gray-500">
      <div className="flex items-center justify-between py-6   text-white text-xs-regular">
        <p>© 2023 RentMe. All Right Reserved.</p>

        <div className="flex items-center">
          <ul className="flex gap-[50px] items-center px-[30px]">
            <li className="pb-2 hover:text-color-6 cursor-pointer">
              <Link href="/item">Бүтээгдэхүүн</Link>
            </li>
            <li className="pb-2 hover:text-color-6 cursor-pointer">
              <Link href="/">Нүүр</Link>
            </li>
            <li className="pb-2 hover:text-color-6 cursor-pointer">
              <Link href="/contact-us">Бидэнтэй Холбогдох</Link>
            </li>
            <li className="pb-2 hover:text-color-6 cursor-pointer">
              <Link href="/contact-us">Бидний тухай</Link>
            </li>
            <li className="pb-2 hover:text-color-6 cursor-pointer">
              <Link href="/contact-us">Санал Хүсэлт</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
