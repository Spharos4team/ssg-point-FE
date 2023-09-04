export default function Grid({
  className,
  children,
  cols = 3,
}: {
  className?: string;
  children: React.ReactNode;
  cols?: number;
}) {
  const getCols = () => {
    cols = cols;
    const result = `!grid-cols-${cols} md:!grid-cols-${
      cols + 1
    } lg:!grid-cols-${cols + 2}`;
    return result;
  };
  return (
    <ul className={`${className ?? ""} grid ${getCols()} gap-3`}>{children}</ul>
  );
}
