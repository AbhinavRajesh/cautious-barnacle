import DashboardHeader from "@/components/Dashboard/Header";
import DashboardSidebar from "@/components/Sidebar/DashboardSidebar";
import DefaultLayout from "@/layouts/Default";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const Schedules = () => {
  const { data: session } = useSession();
  const [authenticated, setAuthenticated] = useState<boolean>();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
    } else {
      setAuthenticated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (typeof authenticated === "undefined") {
    return <Loader title="Checking Authentication status" />;
  }

  return (
    <DefaultLayout
      title="Schedules | OpeninApp"
      description="Schedules for OpeninApp"
      container={true}
      className="bg-[#F5F5F5]"
    >
      <section className="lg:overflow-hidden flex items-start gap-[60px] h-screen pb-[140px] lg:pb-0 bg-[#F5F5F5]">
        <DashboardSidebar />
        <div className="lg:pb-[60px] lg:overflow-scroll no-scrollbar px-[16px] md:px-[32px] lg:px-[0px] w-full max-w-[1000px] pt-[60px] lg:pr-[60px]">
          <DashboardHeader title="Schedules" />
          <div className="pt-[60px]">
            <h1 className="leading-[32px] text-[28px] md:text-[48px] md:leading-[52px] font-bold">
              Oops! You caught us!
            </h1>
            <p className="text-[14px] md:text-[18px] font-lato mt-[8px] text-[#858585]">
              We are still working on this page, check back later!
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Schedules;
