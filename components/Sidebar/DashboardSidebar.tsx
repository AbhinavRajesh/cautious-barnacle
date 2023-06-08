import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import NavItems from "./NavItems";

interface NavItem {
  path: string;
  alt: string;
  iconUrl: string;
  text: string;
}

const navItems: NavItem[] = [
  {
    path: "/dashboard",
    alt: "Dashboard Icon",
    iconUrl: "/assets/icons/dashboard.svg",
    text: "Dashboard",
  },
  {
    path: "/transactions",
    alt: "Transactions Icon",
    iconUrl: "/assets/icons/transactions.svg",
    text: "Transactions",
  },
  {
    path: "/schedules",
    alt: "Schedules Icon",
    iconUrl: "/assets/icons/schedules.svg",
    text: "Schedules",
  },
  {
    path: "/users",
    alt: "Users Icon",
    iconUrl: "/assets/icons/users.svg",
    text: "Users",
  },
  {
    path: "/settings",
    alt: "Settings Icon",
    iconUrl: "/assets/icons/settings.svg",
    text: "Settings",
  },
];

const DashboardSidebar = () => {
  const router = useRouter();

  return (
    <>
      <div className="hidden lg:block p-[40px] pr-[0px] h-full">
        <div className="h-full rounded-[30px] min-w-[280px] max-w-[280px] w-full flex flex-col items-start justify-between py-[60px] px-[50px] bg-black text-white">
          <div className="flex flex-col">
            <h1 className="text-[36px] font-bold leading-[44px] mb-[60px]">
              Board.
            </h1>
            <nav className="flex">
              <ul className="grid grid-cols-1 gap-[40px]">
                {navItems.map(({ path, alt, iconUrl, text }) => (
                  <NavItems
                    active={router.pathname === path}
                    alt={alt}
                    href={path}
                    iconUrl={iconUrl}
                    text={text}
                    key={text.toLowerCase() + "__dashboard_sidebar_nav_item"}
                  />
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col">
            <a href="#" className="text-[14px] leading-[17.07px]">
              Help
            </a>
            <a href="#" className="text-[14px] leading-[17.07px] mt-[20px]">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="lg:hidden px-[16px] md:px-[32px] w-full fixed bottom-[32px]">
        <div className="rounded-[10px] bg-black w-full h-[90px] grid grid-cols-5 justify-items-center self-center">
          {navItems.map(({ path, alt, iconUrl, text }) => (
            <NavItems
              active={router.pathname === path}
              alt={alt}
              href={path}
              iconUrl={iconUrl}
              text={text}
              key={text.toLowerCase() + "__dashboard_sidebar_nav_item"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
