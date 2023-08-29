import SpecialTitle from "@/components/atoms/SpecialTitle";
import NoTxt from "@/components/atoms/NoTxt";
import NoResultBox from "@/components/atoms/NoResultBox";

const recommend = () => {
    // @ts-ignore
    return (
        <>
            <h3 className="hidden">쇼핑 히스토리</h3>
            <div className="recommend_service01 px-5 py-10">
                <SpecialTitle name={'권선'} color={'pink'} ptag={"text-[20px] leading-[30px] font-normal break-keep -tracking-[.5px]"}>
                    고객님을 위한 <br/> 추천 서비스!
                </SpecialTitle>
            </div>
            <div className="recommend_service02 pb-10">
                <ul className="banner_lists"></ul>
                <NoResultBox>
                    <NoTxt>추천 서비스 정보가 없습니다.</NoTxt>
                </NoResultBox>
            </div>
        </>
    );
};

export default recommend;
