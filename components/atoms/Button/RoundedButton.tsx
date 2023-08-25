const RoundedButton = ({
  className,
  backgroundColor = "white",
  onClick,
  children,
}: {
  className?: string;
  backgroundColor?: "white" | "black" | "primary" | "pink";
  onClick?: () => {} | (() => void);
  children: React.ReactNode;
}) => {
  const bgColor = () => {
    switch (backgroundColor) {
      case "primary":
        return "bg-gradient-primary";
      case "pink":
        return "bg-[#ea035c] text-white";
      case "black":
        return "bg-black text-white";
      case "white":
        return "bg-white border border-[#bcbcbc]";
    }
  };

  return (
    // TODO: onClick || href 추가하기

    <button
      className={`${bgColor()} ${className} block text-center text-sm leading-6 font-bold box-border rounded-lg
      w-full`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
