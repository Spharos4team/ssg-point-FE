"use client";
import ContentHeader from "@/components/atoms/ContentHeader";
import Dropdown from "@/components/atoms/Dropdown";
import parse from "html-react-parser";
import Category from "@/datas/category.data.json";

export default function FaqPage({}) {
  //TODO: 데이터 따로 정리
  const contents = {
    emartEv: [
      {
        id: 1,
        subDiv: "EV 클럽 문의",
        title: "이마트 EV클럽 이용 문의는 어디로 하나요?",
        content:
          "<p>EV 클럽 전문 고객센터 또는 1:1 문의를 통해 확인하실 수 있습니다.<br/><br/></p><p>[EV클럽 고객센터]<br/>1670-2143 | 운영시간 10:00~22:00</p>",
      },
      {
        id: 2,
        subDiv: "EV 클럽 문의",
        title: "이마트 EV클럽 이용 문의는 어디로 하나요?",
        content:
          "<p>EV 클럽 전문 고객센터 또는 1:1 문의를 통해 확인하실 수 있습니다.<br/><br/></p><p>[EV클럽 고객센터]<br/>1670-2143 | 운영시간 10:00~22:00</p>",
      },
      {
        id: 3,
        subDiv: "EV 클럽 혜택",
        title: "이마트 EV클럽이란 무엇인가요?",
        content:
          '<p>• 이마트에서도, 이마트 밖에서도 편리한 전기차 충전 생활을 지원하는 클럽입니다. 전용 쿠폰과 신세계포인트 혜택이 제공됩니다. <br>&nbsp; (최종 충전 결제금액의 2% 신세계포인트 적립, 충전 금액 결제 시 신세계포인트 사용 가능)<br><br></p><p>• 클럽 가입은 이마트앱에서 가능합니다.&nbsp;<br><br></p><p><a href="https://evc.emart.com/sessiondomain" target="_blank" rel="noopener"><span style="text-decoration: underline;">EV클럽 가입하러 가기(모바일) &gt;</span></a></p>',
      },
    ],
    ssgUniverseClub: [
      {
        id: 1,
        subDiv: "유니버스 클럽 가입/탈회",
        title: "신세계 유니버스 클럽의 가입(또는 탈회)은 어디에서 하나요?",
        content:
          "<p>EV 클럽 전문 고객센터 또는 1:1 문의를 통해 확인하실 수 있습니다.<br/><br/></p><p>[EV클럽 고객센터]<br/>1670-2143 | 운영시간 10:00~22:00</p>",
      },
      {
        id: 2,
        subDiv: "유니버스 클럽 혜택",
        title: "이마트 EV클럽 이용 문의는 어디로 하나요?",
        content:
          "<p>EV 클럽 전문 고객센터 또는 1:1 문의를 통해 확인하실 수 있습니다.<br/><br/></p><p>[EV클럽 고객센터]<br/>1670-2143 | 운영시간 10:00~22:00</p>",
      },
      {
        id: 3,
        subDiv: "유니버스 클럽 혜택",
        title: "이마트 EV클럽이란 무엇인가요?",
        content:
          '<p>• 이마트에서도, 이마트 밖에서도 편리한 전기차 충전 생활을 지원하는 클럽입니다. 전용 쿠폰과 신세계포인트 혜택이 제공됩니다. <br>&nbsp; (최종 충전 결제금액의 2% 신세계포인트 적립, 충전 금액 결제 시 신세계포인트 사용 가능)<br><br></p><p>• 클럽 가입은 이마트앱에서 가능합니다.&nbsp;<br><br></p><p><a href="https://evc.emart.com/sessiondomain" target="_blank" rel="noopener"><span style="text-decoration: underline;">EV클럽 가입하러 가기(모바일) &gt;</span></a></p>',
      },
    ],
  };

  return (
    <>
      <div className="px-5 py-10">
        <ContentHeader
          main={
            <>
              자주묻는 <strong className="text-[#5c1880] t">질문과 답변</strong>
              을
              <br />
              모아두었어요
            </>
          }
        />
      </div>

      <div className="flex flex-col gap-3 px-5 py-2">
        <p>질문 분류를 선택해주세요.</p>

        <div className="flex gap-3 justify-between">
          {/* TODO: subCategory 오류: https://www.tutsmake.com/category-subcategory-dropdown-in-react-js/ */}
          <Dropdown
            type="category"
            id=""
            mainTitle="대분류"
            subTitle="소분류"
            options={Category}
          />
        </div>
      </div>

      {/* TODO: 위 드롭다운에 따라 다른 콘텐츠 표시 */}
      <div>
        <ul>
          {contents.ssgUniverseClub.map((item) => (
            <li key={item.id} className="border-b">
              <div className="px-[56px] py-5 text-[14px]">
                <p className="relative top-[28px] left-[-35px] w-6 h-6 bg-[url('/images/icon_q.png')] bg-no-repeat bg-[length:99%_auto] indent-[-999em]">
                  Q
                </p>
                <p>
                  [{item.subDiv}] {item.title}
                </p>
              </div>
              <div className="pl-[56px] pr-5 pb-5 text-[14px]">
                {parse(item.content)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
