export default function Card({
  className,
  type,
  shadow = false,
  children,
}: {
  className?: string;
  type?: string;
  shadow?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${className} relative bg-white rounded-lg ${
        shadow ? "drop-shadow-[0_3px_8px_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      {children}
    </div>
  );
}
