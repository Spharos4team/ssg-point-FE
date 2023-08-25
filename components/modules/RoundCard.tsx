import Link from "next/link";

const RoundCard = ({
  className,
  round,
  title,
  subtitle,
  linkName,
}: {
  className?: string;
  round?: string;
  title: string;
  subtitle: string;
  linkName: string;
}) => {
  const arrow =
    "after:content-[''] after:inline-block after:ml-1 after:w-[10px] after:h-[6px] after:bg-contain after:bg-[url('/images/icon_back.png')] after:rotate-180 after:bg-center after:bg-no-repeat";
  return (
    <div
      className={`relative py-5 px-6 box-border border-[1px] border-gray-300 shadow-[0_3px_8px_0_rgba(0,0,0,.08)] ${className} ${
        round ? round : "round-lg"
      }`}
    >
      <p className="text-[13px] leading-[21px] text-[#767676]">
        <strong>{title}</strong>
        <br />
        {subtitle}
      </p>
      <Link
        className={`inline-flex items-center text-sm mt-4 ${arrow}`}
        href={"/"}
      >
        {linkName}
      </Link>
    </div>
  );
};

export default RoundCard;
