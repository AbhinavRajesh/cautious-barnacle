import Image from "next/image";
import Link from "next/link";

interface INavItems {
  active: boolean;
  iconUrl: string;
  alt: string;
  text: string;
  href: string;
}

const NavItems = ({ active, alt, iconUrl, text, href }: INavItems) => {
  return (
    <>
      <Link href={href} className="hidden lg:block">
        <li
          className={`${
            active && "font-bold"
          } text-[18px] leading-[22px] flex items-center justify-start`}
        >
          <Image
            src={iconUrl}
            alt={alt}
            height={18}
            width={18}
            className="mr-[20px]"
          />
          {text}
        </li>
      </Link>
      <Link href={href} className="flex lg:hidden">
        <li
          className={`${
            active && "font-bold"
          } text-[10px] lg:text-[18px] leading-[22px] flex flex-col items-center justify-between py-[20px] text-white`}
        >
          <Image src={iconUrl} alt={alt} height={18} width={18} />
          {text}
        </li>
      </Link>
    </>
  );
};

export default NavItems;
