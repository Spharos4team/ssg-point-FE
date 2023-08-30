"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TabRouter = ({
  className,
  id,
  children,
  href,
}: {
  className?: string;
  id: string;
  children: React.ReactNode;
  href: string;
}) => {
  const pathname = usePathname();
  const active = "bg-[#fff3f8] text-[#d9044b] font-medium !border-[#d9044b]";
  return (
    <li className="flex-1 table relative">
      <Link
        id={id}
        href={href}
        className={`${className} ${
          pathname == href ? active : ""
        } block w-full h-11 pt-[10px] border-b border-[#fbfbfb] box-border text-sm text-center`}
      >
        {children}
      </Link>
    </li>
  );
};

export default TabRouter;
