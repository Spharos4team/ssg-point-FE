const RadioBoxContainer = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-wrap pb-4">
      <div className="flex flex-1 basis-full flex-wrap justify-between">
        <p className="w-[60px] leading-[21px] font-medium pb-2 text-[13px]">
          {title}
        </p>
        {children}
      </div>
    </div>
  );
};

export default RadioBoxContainer;
