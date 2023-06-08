interface ILegend {
  title: string;
  color: string;
  className?: string;
  description?: string;
}

const Legend = ({ color, title, className, description }: ILegend) => {
  return (
    <div className={`flex items-start ${className}`}>
      <div
        className="rounded-full mt-[5px] mr-[10px] h-[10px] w-[10px]"
        style={{ backgroundColor: color }}
      ></div>
      <div className="flex flex-col">
        <p
          className={`text-[14px] ${
            description ? "font-bold font-montserrat" : "font-lato"
          }`}
        >
          {title}
        </p>
        {description && (
          <p className="text-[12px] text-[#858585]">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Legend;
