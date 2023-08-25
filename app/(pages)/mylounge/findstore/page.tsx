import TabBoxSimple from "@/components/modules/TabBoxSimple";
import TabForTabBox from "@/components/atoms/TabForTabBox";

const findstore = () => {
    return (
        <div className="p-0">
            <TabBoxSimple>
                <TabForTabBox href="/mylounge/findstore">지도로 찾기</TabForTabBox>
                <TabForTabBox href="/mylounge/findstore">
                    지역으로 찾기
                </TabForTabBox>
            </TabBoxSimple>
        </div>
    );
};

export default findstore;
