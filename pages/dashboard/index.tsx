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
import { Line, Pie } from "react-chartjs-2";
import { lineChartData, lineChartOptions } from "@/data/chart";
import Select from "@/components/Dashboard/Select";
import CustomLegend from "@/components/Dashboard/Legend";
import TopProductsCard from "@/components/Dashboard/TopProductsCard";
import TodayScheduleCard from "@/components/Dashboard/TodayScheduleCard";

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
  totalRevenues: string;
  totalTransactions: string;
  totalLikes: string;
  totalUsers: string;
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
  const [data, setData] = useState<IData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (loading && data === null) {
      handleFetchStats();
    }
  }, []);

  const handleFetchStats = async () => {
    try {
      const response = await axios.get("/api/v1/dashboard");
      setData(response.data?.data);
      setLoading(false);
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
      <section className="flex items-start gap-[60px] lg:h-screen pb-[140px] lg:pb-0 bg-[#F5F5F5]">
        <DashboardSidebar />
        <div className="px-[16px] md:px-[32px] lg:px-[0px] w-full max-w-[1000px] pt-[60px] lg:pr-[60px]">
          <DashboardHeader title="Dashboard" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[8px] lg:gap-[36px] mt-[40px]">
            {cardItems.map(({ cardColor, iconUrl, key, title }) => (
              <StatsCard
                cardColor={cardColor}
                iconUrl={iconUrl}
                title={title}
                value={data?.[key]}
                key={key}
              />
            ))}
          </div>
          <div className="bg-white mt-[40px] px-[24px] md:px-[40px] py-[30px] rounded-[20px]">
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
          <div className="mt-[20px] lg:mt-[40px] grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-[40px]">
            <TopProductsCard />
            <TodayScheduleCard />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Dashboard;
