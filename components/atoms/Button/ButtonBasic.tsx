const ButtonBasic = ({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={`${className} block text-center text-sm leading-6 font-bold box-border rounded-lg
      w-full`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonBasic;
