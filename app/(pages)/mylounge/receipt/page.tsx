import ContentStrong from "@/components/atoms/ContentStrong";
import ContentHeader from "@/components/atoms/ContentHeader";

const receipt = () => {
    // @ts-ignore
    return (
        <ContentHeader
            main={
                <>
                    <span className="text-[#ea035c]">가맹점 영수증</span> 모두 모여라!
                </>
            }
            sub="신세계포인트를 적립했다면?
            <br/> 가맹점에서 쇼핑한 영수증을
            <br/> 한 곳에 모아 스마트하게 확인하세요."
    />

    );
};

export default receipt;

{/*
<HistoryList dropdown={dropdownForHistory}>
          {pointExample.map((point, index) => (
            <ListForHistory key={index} point={point} />
          ))}
        </HistoryList>
        */}