const TabBoxSimple = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <ul className={`${className} flex`}>{children}</ul>;
};

export default TabBoxSimple;
