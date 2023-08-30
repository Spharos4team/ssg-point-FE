import Link from "next/link";
import ButtonBasic from "./ButtonBasic";
import ButtonContext from "./ButtonContext";

const Button = ({
  className,
  href,
  type = "basic",
  backgroundColor = "white",
  onClick,
  children,
}: {
  className?: string;
  href?: string;
  type?: "basic" | "context" | "link";
  backgroundColor?: "white" | "black" | "primary" | "pink";
  onClick?: () => void;
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

  switch (type) {
    // TODO: 현재 두 컴포넌트는 완전히 동일한 상태
    // submit에는 검사 로직이 추가되어야 하지 않을까.
    case "basic": {
      return (
        <ButtonBasic className={bgColor() + " " + className} onClick={onClick}>
          {children}
        </ButtonBasic>
      );
    }
    case "context": {
      return (
        <ButtonContext
          className={bgColor() + " " + className}
          onClick={onClick}
        >
          {children}
        </ButtonContext>
      );
    }
    case "link": {
      if (!href) {
        throw new Error("link 타입의 Button은 href가 필요합니다.");
      }
      return (
        <Link
          className={
            bgColor() +
            " " +
            className +
            "block text-center text-sm leading-6 py-3 px-4 font-bold box-border rounded-lg w-full"
          }
          href={href}
        >
          {children}
        </Link>
      );
    }
  }
};

export default Button;
