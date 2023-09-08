import ContentStrong from '../atoms/ContentStrong';
import ListForNoticeBox from '../atoms/ListForNoticeBox';
import ToggleCard from '../modules/ToggleCard';
import CollapseForMomKidsInClub from './CollapseForMomKidsInClub';
import Button from '../atoms/Button/Button';
import CollapseButton from '../atoms/Button/CollapseButton';
import { RadioProvider } from '../hooks/RadioProvider';
import RadioCardGroup2 from '../modules/RadioCardGroup2';
import RadioCard2 from '../atoms/RadioCard2';
import TextBox from '../atoms/TextBox';

const ClubContentMomKids = () => {
  const genderRadios = {
    valueName: 'KidsGender',
    innerHtml: {
      1: '남자',
      2: '여자',
    } as { [key: number]: string },
  };

  return (
    <>
      <ContentStrong>맘키즈 클럽</ContentStrong>
      <ToggleCard
        title="[선택] 맘키즈 클럽 혜택을 위한 부가 정보 수집 및 이용 동의"
        toggleId="toggle04"
        modified=""
      />

      {/* 맘키즈 정보 Collapse */}
      <CollapseButton buttonName="나의 자녀 정보">
        <RadioProvider>
          <RadioCardGroup2 title={'자녀1'} radioType="titleLeft">
            {Object.keys(genderRadios.innerHtml).map((key) => (
              <RadioCard2
                key={key}
                id={`kids_gender1_${key}`}
                value={genderRadios.innerHtml[parseInt(key)]}
              >
                {genderRadios.innerHtml[parseInt(key)]}
              </RadioCard2>
            ))}
            <TextBox className="w-[calc(100%-66px)] ml-[66px]" id="kids_birth_1" type="text">
              생년월일 ex)20170201
            </TextBox>
          </RadioCardGroup2>
        </RadioProvider>

        <RadioProvider>
          <RadioCardGroup2 title={'자녀2'} radioType="titleLeft">
            {Object.keys(genderRadios.innerHtml).map((key) => (
              <RadioCard2
                key={key}
                id={`kids_gender2_${key}_`}
                value={genderRadios.innerHtml[parseInt(key)]}
              >
                {genderRadios.innerHtml[parseInt(key)]}
              </RadioCard2>
            ))}
            <TextBox className="w-[calc(100%-66px)] ml-[66px]" id="kids_birth_2" type="text">
              생년월일 ex)20170201
            </TextBox>
          </RadioCardGroup2>
        </RadioProvider>
      </CollapseButton>

      <ul className="pt-[16px] pb-6 px-5">
        <ListForNoticeBox level={2} isBullet>
          맘키즈 클럽은 만 13세 이하의 자녀를 두신 회원 대상입니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2} isBullet>
          자녀 정보는 최대 2명까지 입력하실 수 있습니다.
        </ListForNoticeBox>
        <ListForNoticeBox level={2} isBullet>
          {
            '맘키즈 클럽 혜택은 이마트에서 이용하실 수 있습니다.<br />(온·오프라인 옴니동의 시 SSG.COM 이용 가능)'
          }
        </ListForNoticeBox>
      </ul>
      <div className="px-5">
        <Button className="h-12" backgroundColor="primary">
          확인
        </Button>
      </div>
    </>
  );
};

export default ClubContentMomKids;
