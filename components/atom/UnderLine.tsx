export default function Underline({
                                    className,
                                    color = "yellow",
                                    children,
                                  }: {
  className?: string;
  color?: "yellow" | "pink";
  children?: React.ReactNode;
}) {
  const getColorClass = () => {
    switch (color) {
      case "yellow":
        return "after:bg-[#ffdfb5]";
      case "pink":
        return "after:bg-[#fed6e8]";
      default:
        return "after:bg-[#ffdfb5]";
    }
  };

  return (
      <strong
          className={`${
              className ?? ""
          } relative inline-block align-top z-[1] pr-1 pl-[1px] font-medium text-black after:inline-block after:absolute after:w-full after:h-[12px] after:z-[-1] after:left-0 after:bottom-0 ${getColorClass()}`}
      >
        {children}
      </strong>
  );
}
