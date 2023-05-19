import Image from "next/image";

export function Logo(): JSX.Element {
  return (
    <Image
      alt="logo"
      className="cursor-pointer"
      height="50"
      width="50"
      src="/logo.png"
    />
  );
}
