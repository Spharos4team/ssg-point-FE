import Button from "@/components/atom/Button";
import Card from "@/components/atom/Card";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import ListBody from "@/components/atom/ListBody";
import ListHeader from "@/components/atom/ListHeader";
import Subtitle from "@/components/atom/Subtitle";
import Image from "next/image";
import Link from "next/link";

export default function ClubPage() {
  const clubList = [
    {
      id: 1,
      mini_thumb: "images/resources/club/club_momkids.png",
      name: "맘키즈 클럽",
      subtitle:
        "<span class='txt'>아이와 엄마가 모두 행복한 라이프!<br>매월 다양한 이마트 맘키즈 클럽<br>혜택을 받아보세요.</span>",
      link: "/membership/club/momkids",
    },
  ];
  return (
    <>
      <ContentHeader className="mt-9">
        <ContentTitle className="leading[30px]">
          신세계포인트 통합ID 하나면​
          <br />
          <span className="text-membership font-medium">
            신세계가 한 손안에 쓱 -
          </span>
        </ContentTitle>
        <Subtitle className="!pt-2 leading-6">
          하나의 ID로 이마트, 신세계백화점, SSG.COM 등<br />
          다양한 제휴사의 혜택과 온라인 서비스를
          <br />
          간편하게 이용하실 수 있습니다.
        </Subtitle>
      </ContentHeader>

      <div className="px-5 mb-20">
        <ListHeader>신세계포인트 통합 ID 서비스 TIP​</ListHeader>
        <ListBody>
          {clubList.map((card) => (
            <li key={card.id} className="mb-1">
              <Card className="flex gap-x-4" border>
                <div>
                  <Link href={card.link} target="_blank"></Link>
                </div>
                <div>
                  <p className="block text-base font-medium leading-[26px]">
                    {card.name}
                  </p>
                  <p
                    className="pt-1 text-xs text-gray-600 leading-5"
                    dangerouslySetInnerHTML={{ __html: card.subtitle }}
                  />
                </div>
              </Card>
            </li>
          ))}
        </ListBody>
      </div>
    </>
  );
}
