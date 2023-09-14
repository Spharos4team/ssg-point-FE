import ContentHeader from '@/components/atom/ContentHeader';
import FormRegStore from '@/components/organisam/FormRegStore';

export default function RegularstorePage() {
  return (
    <>
      <ContentHeader className="mt-[36px]">
        <strong className="text-xl font-medium">나의 단골 매장</strong>
      </ContentHeader>
      <FormRegStore />
    </>
  );
}
