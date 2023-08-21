import ButtonBasic from "@/components/atoms/Button/ButtonBasic";
import ButtonPrimary from "@/components/atoms/ButtonPrimary";
import PointBox from "@/components/atoms/PointBox";

export default function cardManage() {
  return (
    <>
      <h3 className="hidden">포인트 카드 관리</h3>
      <PointBox type="simpleCard" />

      {/* 카드 테이블 */}
      <div>
        <p>온라인 카드</p>
        {/* 온라인 카드 테이블 */}
        <div>
          <table>
            <caption>온라인/모바일 카드</caption>
            <colgroup>
              <col width={"40%"} />
              <col width={"auto"} />
              <col width={"81px"} />
            </colgroup>
            <thead>
              <tr>
                <th>카드번호</th>
                <th>발급처</th>
                <th>발급일자</th>
              </tr>
            </thead>
            <tbody>
              {/* tr map */}
              <tr>
                <td>9350-****-****-5220</td>
                <td>신세계포인트닷컴</td>
                <td> 2023-08-01</td>
              </tr>
              <tr>
                <td>9350-****-****-6205</td>
                <td>신세계포인트닷컴</td>
                <td> 2023-07-27</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 데이터가 없을 때 */}
        <div>
          <table>
            <caption>온라인/모바일 카드</caption>
            <colgroup>
              <col width={"40%"} />
              <col width={"auto"} />
              <col width={"81px"} />
            </colgroup>
            <thead>
              <tr>
                <th>카드번호</th>
                <th>발급처</th>
                <th>발급일자</th>
              </tr>
            </thead>
            <tbody>
              {/* tr map */}
              <tr>
                <td colSpan={3}>
                  <div>
                    <p className="after:content-[''] after:absolute after:top-0 after:left-1/2 after:w-12 after:h-12 after:bg-[url('/images/icon_nodata.png')] after:bg-no-repeat after:bg-[100%_auto]">
                      보유하신 제휴 신용카드가 없습니다.
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 버튼 모음 */}
      <div className="flex flex-col gap-2 pb-10 px-5">
        <ButtonBasic round="rounded-lg">신규 포인트카드 등록하기</ButtonBasic>
        <ButtonBasic round="rounded-lg">임시 발급 카드 인증하기</ButtonBasic>
        <ButtonPrimary round="rounded-lg">
          포인트 비밀번호 변경하기
        </ButtonPrimary>
      </div>

      {/* bottom banner */}
      <div>
        <p>
          다양한 신세계포인트
          <br />
          <strong>제휴 신용카드의 혜택</strong>을 확인하세요!
        </p>
        <ul>
          <li>{/* LinkImageWithFallback */}</li>
        </ul>
      </div>
    </>
  );
}
