export default function Box({
  children,
  type = 'basic',
  className,
}: {
  children: React.ReactNode;
  type?: 'basic' | 'dashed';
  className?: string;
}) {
  switch (type) {
    case 'basic':
      return <div className={`${className} border-[1px] border-solid`}>{children}</div>;
    case 'dashed':
      return (
        <div className={`${className} border-[1px] border-dashed border-[#bababa]`}>{children}</div>
      );
  }
}
