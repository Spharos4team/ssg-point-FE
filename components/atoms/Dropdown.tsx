const Dropdown = ({
  id,
  title,
  theme = "round",
  options,
  initialValue,
}: {
  id: string;
  title: string;
  theme?: "mini" | "round" | "fullWidth";
  options: { [key: number]: string } | string[];
  initialValue?: number;
}) => {
  const style =
    theme === "mini"
      ? {
          wrapper: "relative inline-block align-top w-full",
          select:
            "relative block w-full h-12 pr-8 pl-[15px] text-sm box-border z-[1] border",
        }
      : theme === "round"
      ? {
          wrapper: "relative inline-block align-top w-full rounded-lg",
          select:
            "relative block w-full h-12 pr-8 pl-[15px] text-sm box-border z-[1] border rounded-lg",
        }
      : theme === "fullWidth"
      ? {
          wrapper: "",
        }
      : {};

  return (
    <div className={style.wrapper}>
      <select className={style.select} id={id} title={title}>
        {Object.entries(options).map((key) => (
          <option
            key={Number(key[0])}
            value={key[1]}
            selected={Number(key[0]) == initialValue}
          >
            {key[1]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
