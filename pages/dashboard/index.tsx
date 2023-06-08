import DashboardHeader from "@/components/Dashboard/Header";
import DashboardSidebar from "@/components/Sidebar/DashboardSidebar";
import DefaultLayout from "@/layouts/Default";
import { useEffect, useState } from "react";
import axios from "axios";
import StatsCard from "@/components/Dashboard/StatsCard";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { lineChartData, lineChartOptions } from "@/data/chart";
import Select from "@/components/Dashboard/Select";
import CustomLegend from "@/components/Dashboard/Legend";
import TopProductsCard from "@/components/Dashboard/TopProductsCard";
import TodayScheduleCard from "@/components/Dashboard/TodayScheduleCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import CountUp from "react-countup";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface IData {
  totalRevenues: number;
  totalTransactions: number;
  totalLikes: number;
  totalUsers: number;
}

interface ICardItems {
  title: string;
  iconUrl: string;
  cardColor: string;
  key: keyof IData;
}

const cardItems: ICardItems[] = [
  {
    title: "Total Revenues",
    cardColor: "#DDEFE0",
    iconUrl: "/assets/icons/total_revenues.svg",
    key: "totalRevenues",
  },
  {
    title: "Total Transactions",
    cardColor: "#F4ECDD",
    iconUrl: "/assets/icons/total_transactions.svg",
    key: "totalTransactions",
  },
  {
    title: "Total Likes",
    cardColor: "#EFDADA",
    iconUrl: "/assets/icons/total_likes.svg",
    key: "totalLikes",
  },
  {
    title: "Total Users",
    cardColor: "#DEE0EF",
    iconUrl: "/assets/icons/total_users.svg",
    key: "totalUsers",
  },
];

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [data, setData] = useState<IData | null>(null);
  const [fetching, setFetching] = useState<boolean>(false);

  useEffect(() => {
    handleFetchStats();
    if (!session) {
      router.push("/");
    }
  }, []);

  const handleFetchStats = async () => {
    if (fetching || !session) return;
    setFetching(true);
    console.log("Fetching...");
    try {
      const response = await axios.get("/api/v1/dashboard");
      setData(response.data?.data);
      setFetching(false);
    } catch (error) {
      // throw error
      console.log(error);
    }
  };

  return (
    <DefaultLayout
      title="Dashboard | OpeninApp"
      description="Dashboard for OpeninApp"
      container={true}
      className="bg-[#F5F5F5]"
    >
      <section className="lg:overflow-hidden flex items-start gap-[60px] lg:h-screen pb-[140px] lg:pb-0 bg-[#F5F5F5]">
        <DashboardSidebar />
        <div className="lg:pb-[60px] lg:max-h-screen lg:overflow-scroll no-scrollbar px-[16px] md:px-[32px] lg:px-[0px] w-full max-w-[1000px] pt-[60px] lg:pr-[60px]">
          <DashboardHeader title="Dashboard" />
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-[8px] xl:gap-[36px] mt-[40px]">
            {cardItems.map(({ cardColor, iconUrl, key, title }) => (
              <StatsCard
                cardColor={cardColor}
                iconUrl={iconUrl}
                title={title}
                value={
                  data?.[key] ? (
                    <>
                      {key === "totalRevenues" && "$"}
                      <CountUp end={data?.[key]} duration={2} />
                    </>
                  ) : (
                    <>Fetching...</>
                  )
                }
                key={key}
              />
            ))}
          </div>
          <div className="min-h-[370px] h-full bg-white mt-[40px] px-[24px] md:px-[40px] py-[30px] rounded-[20px]">
            <h5 className="font-montserrat font-bold text-[18px]">
              Activities
            </h5>
            <div className="flex justify-between items-start">
              <div className="flex flex-col mb-[30px]">
                <Select
                  values={[
                    "May-June 2021",
                    "June-July 2021",
                    "July-August 2021",
                  ]}
                />
              </div>
              <div className="flex items-center justify-end">
                <CustomLegend color="#E9A0A0" title="Guest" key="Guest" />
                <CustomLegend
                  color="#9BDD7C"
                  title="User"
                  key="User"
                  className="ml-[10px] md:ml-[35px]"
                />
              </div>
            </div>
            <Line
              className="max-h-[230px]"
              options={lineChartOptions}
              data={lineChartData}
            />
          </div>
          <div className="mt-[20px] lg:mt-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-[20px] lg:gap-[40px]">
            <TopProductsCard />
            <TodayScheduleCard />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Dashboard;
