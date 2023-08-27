import SpecialTitle from "@/components/atoms/SpecialTitle";
import ContentHeader from "@/components/atoms/ContentHeader";
import Image from "next/image";
import RegularList from "@/components/atoms/RegularList";
import RoundedButton from "@/components/atoms/Button/RoundedButton";

const regularstore = () => {
    return (
        <>
            <ContentHeader main={'나의 단골 매장'}/>
            <div className="px-5 pb-20">
                <ul className="pb-10 -mx-5 list-none">
                    <RegularList src={'/images/starbucks.png'} title={"건대입구 "} txt={"서울 광진구 능동로 107(화양동)"}/>
                    <RegularList src={'/images/starbucks.png'} title={"센텀시티역"} txt={"부산 해운대구 센텀동로 9(우동, 트럼프월드센텀아파트)"}/>
                </ul>
                <RoundedButton
                    className="font-medium h-12"
                    backgroundColor={'primary'}
                    onClick={''}>
                    단골 매장 등록하기</RoundedButton>
            </div>
        </>
    );
};

export default regularstore;
