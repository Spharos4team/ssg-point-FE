import { NaverMap, Marker, useNavermaps, NavermapsProvider } from 'react-naver-maps';
import { useState } from 'react';
import { Container as MapDiv } from 'react-naver-maps';

export default function Map({}: {}) {
  const navermaps = useNavermaps();
  return (
    <NaverMap defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)} defaultZoom={15}>
      <Marker
          defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)}
          icon={{
                url: '/images/icon_starbucks.png',
              // url: '/images/icon_marker_gray.png',
              scaledSize: navermaps.Size(50, 65),
          }}
      />
      {/*<Marker*/}
      {/*    defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)}*/}
      {/*    {isChecked===false ?*/}
      {/*    icon={{*/}
      {/*        url: '/images/icon_starbucks.png',*/}
      {/*        scaledSize: navermaps.Size(40, 40),*/}
      {/*        anchor: {x: 0, y: 0}*/}
      {/*    }} : icon={'naver.maps.SymbolIcon'}}*/}
      {/*    onClick={setIsChecked(!isChecked)}*/}
      {/*    clickable={true}*/}
      {/*/>*/}
      <Marker
        defaultPosition={new navermaps.LatLng(37.3595, 127.105)}
        icon={'naver.maps.SymbolIcon'}
        clickable={true}
      />
    </NaverMap>
  );
}
