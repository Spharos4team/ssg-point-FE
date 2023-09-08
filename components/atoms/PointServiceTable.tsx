export default function PointServiceTable({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <div className={`${className} border-t-[1px] border-t-solid border-t-[#222222] mt-2`}>
        <table className="w-full table-fixed break-all border-0 border-spacing-0">{children}</table>
      </div>
    </>
  );
}
