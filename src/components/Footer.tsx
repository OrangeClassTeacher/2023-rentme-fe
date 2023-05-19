import Link from "next/link";
export function Footer(): JSX.Element {
  return (
    <div className="bg-head bg-gradient-to-r from-gray-900 to-gray-500">
      <div className="flex items-center justify-between py-6   text-white text-xs-regular">
        <p>© 2023 RentMe. All Right Reserved.</p>

        <div className="flex items-center">
          <ul className="flex gap-4 items-center">
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
  );
}
