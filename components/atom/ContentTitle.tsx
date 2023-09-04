export default function ContentTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={`${className} text-2xl leading-9`}>{children}</p>;
}
