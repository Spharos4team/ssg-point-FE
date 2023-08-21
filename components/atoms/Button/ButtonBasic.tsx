const ButtonBasic = ({
  className,
  round,
  children,
}: {
  className?: string;
  round: string;
  children: React.ReactNode;
}) => {
  return (
    // TODO: onClick || href 추가하기
    <div className={className}>
      <button
        className={`block text-center text-sm leading-6 font-bold box-border border ${round}
      w-full px-4 py-3`}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonBasic;
