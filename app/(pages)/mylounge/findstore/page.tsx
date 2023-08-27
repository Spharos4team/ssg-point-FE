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
            <div className="find_store_wrap02">
                <div className="map_area_wrap">
                    <div className="map_area">
                        <div className="">

                        </div>
                        <div className="">

                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default findstore;
