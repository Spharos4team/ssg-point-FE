import ListBody from "@/components/atom/ListBody";
import BoardList from "@/components/module/BoardList";
import PageNavigator from "@/components/module/PageNavigator";

export default function NoticePage() {
  const boardList = [
    { id: 1, title: "[이마트24] 9월 쿠폰 미적용점", date: "2023-08-30" },
    { id: 2, title: "[이마트24] 8월 쿠폰 미적용점", date: "2023-07-31" },
    {
      id: 3,
      title: "[공지] 시스템 업그레이드 작업 공지(08/03)",
      date: "2023-07-26",
    },
  ];
  return (
    <>
      <div className="mt-9">
        <ListBody className="!gap-0">
          {boardList.map((board) => (
            <BoardList
              title={board.title}
              date={board.title}
              url={{
                pathname: "/cscenter/notice/posts",
                query: { details: board.id },
              }}
            />
          ))}
        </ListBody>
      </div>
      <PageNavigator />
    </>
  );
}
