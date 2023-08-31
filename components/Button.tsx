export default function Button({
  id,
  className,
  type = "basic",
  bgColor = "white",
  open,
  onClick,
  children,
}: {
  id?: string;
  className?: string;
  type?: "basic" | "collapse";
  bgColor?: "primary" | "pink" | "black" | "white";
  open?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const collapseArrow =
    "bg-[url('/images/arrow_up_down.png')] bg-[100%_auto] bg-opacity-50";

  const bgProvider = () => {
    switch (bgColor) {
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

  switch (type) {
    case "basic": {
      return (
        <button
          id={id}
          className={`${
            bgProvider() + " " + className
          } block text-center text-sm leading-6 font-bold box-border rounded-lg
      w-full`}
          onClick={onClick}
        >
          {children}
        </button>
      );
    }
    case "collapse": {
      return (
        <button
          id={id}
          className="relative block w-full h-12 text-left text-sm leading-[24px]"
          onClick={onClick}
        >
          {children}
          <span
            className={`absolute right-0 top-5 w-3 h-2 -indent-[999em] ${collapseArrow} ${
              open ? "bg-[center_bottom_1px]" : "bg-[center_top_1px]"
            }`}
          >
            <em>메뉴닫기</em>
          </span>
        </button>
      );
    }
  }
}
