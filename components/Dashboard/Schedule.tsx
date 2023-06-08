interface ISchedule {
  accent: string;
  title: string;
  timing: string;
  location: string;
  className?: string;
}

const Schedule = ({
  accent,
  title,
  timing,
  location,
  className,
}: ISchedule) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div
        className="flex flex-col px-[10px] py-[3px] border-l-[5px]"
        style={{ borderColor: accent }}
      >
        <h5 className="font-lato font-bold text-[14px] leading-[16.8px] text-[#666666]">
          {title}
        </h5>
        <p className="text-[#999999] font-lato text-[12px] leading-[14p.4x] mt-[5px]">
          {timing}
        </p>
        <p className="text-[#999999] font-lato text-[12px] leading-[14p.4x] mt-[5px]">
          {location}
        </p>
      </div>
    </div>
  );
};

export default Schedule;
