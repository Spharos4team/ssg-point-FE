export default function Subtitle({
  className,
  type = "small",
  children,
}: {
  className?: string;
  type?: "small";
  children: React.ReactNode;
}) {
  return (
    <p
      className={`${className ?? ""} ${
        type == "small" && "text-xs"
      } text-gray-500 pt-5`}
    >
      {children}
    </p>
  );
}
