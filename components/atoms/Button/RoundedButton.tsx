const RoundedButton = ({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: () => {} | (() => void);
  children: React.ReactNode;
}) => {
  return (
    // TODO: onClick 추가하기

    <button
      className={`${className} block text-center text-sm leading-6 font-bold box-border rounded-lg
      w-full`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
