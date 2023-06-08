import DashboardHeader from "@/components/Dashboard/Header";
import DashboardSidebar from "@/components/Sidebar/DashboardSidebar";
import DefaultLayout from "@/layouts/Default";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const Settings = () => {
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
      title="Settings | OpeninApp"
      description="Settings for OpeninApp"
      container={true}
      className="bg-[#F5F5F5]"
    >
      <section className="lg:overflow-hidden flex items-start gap-[60px] h-screen pb-[140px] lg:pb-0 bg-[#F5F5F5]">
        <DashboardSidebar />
        <div className="lg:pb-[60px] lg:overflow-scroll no-scrollbar px-[16px] md:px-[32px] lg:px-[0px] w-full max-w-[1000px] pt-[60px] lg:pr-[60px]">
          <DashboardHeader title="Settings" />
          <div className="pt-[60px]">
            <button
              className="text-white font-bold px-[20px] py-[8px] rounded-[10px] bg-red-500 min-w-[280px]"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Settings;
