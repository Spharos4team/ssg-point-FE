export default function ListItem({
  className,
  bullet = false,
  isHyphen = false,
  children,
}: {
  className?: string;
  bullet?: boolean;
  isHyphen?: boolean;
  children: React.ReactNode;
}) {
  const bulletCss =
    "pl-[7px] before:content-['·'] before:absolute before:left-0 before:top-0 before:text-xs before:leading-5 before:font-bold";
  const hyphenCss =
    "pl-[7px] text-xs text-[#767676] -tracking-[.5px] before:content-['-'] before:absolute before:left-0 before:top-0 before:text-xs before:leading-5 before:font-normal";

  return (
    <li
      className={`relative ${className ?? ''} ${
        bullet ? bulletCss : isHyphen ? hyphenCss : 'list-none'
      } text-sm font-normal`}
    >
      {children}
    </li>
  );
}
