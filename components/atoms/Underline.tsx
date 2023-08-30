const Underline = ({
  className,
  underlineColor,
  children,
}: {
  className?: string;
  underlineColor: "pink" | "black" | "brown" | "yellow" | "green";
  children: React.ReactNode;
}) => {
  const underline =
    "relative inline-block font-medium pl-[1px] pr-[4px] z-[1] after:inline-block after:absolute after:left-0 after:bottom-0 after:w-full after:h-[12px] after:z-[-1]";
  const uColor =
    underlineColor === "pink"
      ? "after:bg-[#fed6e8]"
      : underlineColor === "black"
      ? "after:bg-[#747474]"
      : underlineColor === "brown"
      ? "after:bg-[#a16c0c]"
      : underlineColor === "yellow"
      ? "after:bg-[#ffdfb5]"
      : underlineColor === "green"
      ? "after:bg-[#e6f3f3]"
      : "";
  return (
    <span className={`${className} ${underline} ${uColor}`}>{children}</span>
  );
};

export default Underline;
