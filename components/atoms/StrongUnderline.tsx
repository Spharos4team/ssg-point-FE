export default function StrongUnderline({ children }: { children: React.ReactNode }) {
  return (
    <strong className="border-b-[1px] border-b-solid border-b-black mb-2 pb-2 block text-black font-medium text-[13px] leading-[21px]">
      {children}
    </strong>
  );
}
