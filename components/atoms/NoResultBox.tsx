import NoTxt from '@/components/atoms/NoTxt';

export default function NoResultBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="no_result_box bd_type4 mx-4 mb-20 py-10 border-[1px] border-dashed border-[#bababa]">
      {children}
    </div>
  );
}
