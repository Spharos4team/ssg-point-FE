import ContentHeader from '@/components/atom/ContentHeader';
import ContentTitle from '@/components/atom/ContentTitle';
import Underline from '@/components/atom/UnderLine';
import FormRecommend from '@/components/organisam/FormRecomend';

export default function RecommendPage() {
  return (
    <>
      <ContentHeader className="mt-9">
        <ContentTitle className="leading[30px]">
          <Underline color={'pink'}>{'조영일'}</Underline>
          고객님을 위한
          <br />
          추천 서비스!
        </ContentTitle>
      </ContentHeader>
      <FormRecommend />
    </>
  );
}
