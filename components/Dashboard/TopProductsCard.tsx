import { pieChartData, pieChartOptions } from "@/data/chart";
import { Pie } from "react-chartjs-2";

import CustomLegend from "@/components/Dashboard/Legend";
import Select from "./Select";

const TopProductsCard = () => {
  return (
    <div className="bg-white rounded-[20px] px-[24px] md:px-[40px] py-[30px]">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-[26px]">
          <h5 className="font-montserrat font-bold text-[18px]">
            Top products
          </h5>
          <Select
            values={["May-June 2021", "June-July 2021", "July-August 2021"]}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between md:max-h-[135px]">
          <Pie data={pieChartData} options={pieChartOptions} />
          <div className="ml-[10px] mt-[20px] lg:mt-0 grid grid-cols-2 md:grid-cols-1">
            <CustomLegend
              color="#98D89E"
              title="Basic Tees"
              description="55%"
            />
            <CustomLegend
              color="#F6DC7D"
              title="Custom Short Pants"
              description="31%"
              className="md:my-[20px]"
            />
            <CustomLegend
              color="#EE8484"
              title="Super Hoodies"
              description="14%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProductsCard;
