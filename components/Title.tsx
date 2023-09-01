export default function Title({
  className,
  titleType = "h3",
  children,
}: {
  className?: string;
  titleType?: "h2" | "h3" | "h4";
  children: React.ReactNode;
}) {
  switch (titleType) {
    case "h2": {
      return (
        <h2
          className={`${className} text-lg leading-[24px] font-medium pb-2 border-b border-black`}
        >
          {children}
        </h2>
      );
    }
    case "h3": {
      return (
        <h3
          className={`${className} text-base leading-[24px] font-medium pb-2 border-b border-black`}
        >
          {children}
        </h3>
      );
    }
    case "h4": {
      return (
        <h4
          className={`${className} text-sm leading-[24px] font-medium pb-2 border-b border-black`}
        >
          {children}
        </h4>
      );
    }
  }
}
