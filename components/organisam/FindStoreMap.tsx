'use client';
import {
  Marker,
  NaverMap,
  NavermapsProvider,
  useNavermaps,
  Container as MapDiv,
} from 'react-naver-maps';
import Modal from '@/components/atom/Modal';
import Button from "@/components/atom/Button";
import {useState} from "react";
import {useAppContext} from "@/provider/AppContextProvider";

export default function FindStoreMap() {
  const navermaps = useNavermaps();
    const {appValueList, handleAppRecord} = useAppContext();
    const handleModal = () => {
        handleAppRecord('FindStoreModal', true);
    };
  return (
    <>
      <MapDiv
        style={{
          width: '100%',
          height: '600px',
        }}
      >
        <NaverMap
          defaultCenter={new navermaps.LatLng(35.165925058960156, 129.13201471874677)}
          defaultZoom={15}
        >
          {/* ------------ fetch by api or data ------------ */}
          <Marker
            defaultPosition={new navermaps.LatLng(35.165925058960156, 129.13201471874677)}
            icon={{
              content: `<a class="map_marker"><img src="${'/images/marker_shinsegae.png'}" /></a>`,
            }}
          />
        </NaverMap>
      </MapDiv>
        <button onClick={handleModal}>모달</button>
      <Modal className="h-[146px] !w-full relative bottom-0" id={'FindStoreModal'} bottom>
          <Button className="h-[60px] mt-6" bgColor="black">
              자주 찾는 매장 등록
          </Button>
      </Modal>
    </>
  );
}
