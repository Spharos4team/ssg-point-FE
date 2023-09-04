export default function ContentHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-5 py-10">{children}</div>;
}
