interface ISelect {
  values: string[];
}

const Select = ({ values }: ISelect) => {
  return (
    <select
      name="timeGap"
      id="timeGap"
      className="outline-none ml-[-4px] text-[14px] font-montserrat leading-[17px] text-[#858585]"
    >
      {values.map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Select;
