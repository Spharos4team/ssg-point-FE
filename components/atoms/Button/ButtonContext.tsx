'use client';
import { useFormContext } from '@/components/hooks/FormProvider';

const ButtonContext = ({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) => {
  const { valueList } = useFormContext();

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

export default ButtonContext;
