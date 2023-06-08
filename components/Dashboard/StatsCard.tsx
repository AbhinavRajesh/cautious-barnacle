interface IStatsCard {
  cardColor: string;
  iconUrl: string;
  title: string;
  value?: React.ReactNode;
}

const StatsCard = ({ cardColor, iconUrl, title, value }: IStatsCard) => {
  return (
    <div
      className="px-[15px] md:px-[25px] py-[12px] md:py-[20px] rounded-[20px]"
      style={{ backgroundColor: cardColor }}
    >
      <div className="flex justify-end w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={iconUrl} alt={title + " Icon"} height={24} />
      </div>
      <p className="font-lato mt-[1px] mb-[5px] text-[12px] leading-[16.8px]">
        {title}
      </p>
      <h3 className="font-open-sans text-[24px] font-bold">{value}</h3>
    </div>
  );
};

export default StatsCard;
