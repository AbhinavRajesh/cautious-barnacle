import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

interface IDashboardHeader {
  title: string;
}

const DashboardHeader = ({ title }: IDashboardHeader) => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold text-[24px]">{title}</h1>
        <div className="flex gap-[30px]">
          <div className="hidden lg:flex items-center rounded-[10px] bg-white px-[15px] py-[7px]">
            <input
              type="text"
              name="search"
              id="search"
              className="outline-none bg-transparent font-lato text-[14px] leading-[16px] text-[#B0B0B0]"
              placeholder="Search..."
            />
            <Image
              src="/assets/icons/search.svg"
              alt="Search Icon"
              height={12}
              width={12}
            />
          </div>
          <Image
            src="/assets/icons/notification.svg"
            alt="Notification Icon"
            height={20}
            width={18}
          />
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={session?.user?.image as string}
              alt={`Profile picture of ${session?.user?.name}`}
              height={30}
              width={30}
              className="rounded-full h-[30px] w-[30px] bg-gray-300 cursor-pointer"
              onClick={() => router.push("/settings")}
            />
          </div>
        </div>
      </div>
      <div className="flex lg:hidden mt-[20px] items-center rounded-[10px] bg-white px-[15px] py-[7px]">
        <input
          type="text"
          name="search"
          id="search-mobile"
          className="outline-none w-full bg-transparent font-lato text-[14px] leading-[16px] text-[#B0B0B0]"
          placeholder="Search..."
        />
        <Image
          src="/assets/icons/search.svg"
          alt="Search Icon"
          height={12}
          width={12}
        />
      </div>
    </>
  );
};

export default DashboardHeader;
