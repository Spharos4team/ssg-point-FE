const ButtonPrimary = ({
  className,
  round,
  children,
}: {
  className?: string;
  round: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={className}>
      <button
        className={`block text-center text-sm leading-6 font-bold box-border ${round}
      w-full px-4 py-3 bg-gradient-primary`}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonPrimary;
