import Image from "next/image";
import Schedule from "./Schedule";

const TodayScheduleCard = () => {
  return (
    <div className="bg-white rounded-[20px] px-[24px] md:px-[40px] py-[30px]">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-[26px]">
          <h5 className="font-montserrat font-bold text-[18px]">
            Today&apos;s schedule
          </h5>
          <a
            href="#"
            className="flex items-center justify-center text-[14px] font-montserrat leading-[17px] text-[#858585]"
          >
            See All{" "}
            <Image
              src="/assets/icons/carret-right.svg"
              alt="Right Carret"
              height={8}
              width={5}
              className="ml-[6px]"
            />
          </a>
        </div>
        <div className="flex flex-col items-start justify-start">
          <Schedule
            title="Meeting with suppliers from Kuta Bali"
            timing="14.00-15.00"
            location="at Sunset Road, Kuta, Bali"
            accent="#9BDD7C"
          />
          <Schedule
            title="Check operation at Giga Factory 1"
            timing="18.00-20.00"
            location="at Central Jakarta "
            accent="#6972C3"
            className="mt-[13px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TodayScheduleCard;
