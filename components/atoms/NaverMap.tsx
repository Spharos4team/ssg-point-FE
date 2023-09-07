"use client";
import {NavermapsProvider} from "react-naver-maps";
import Map from "@/components/atoms/Map";
import { Container as MapDiv } from 'react-naver-maps'

export default function NaverMap() {
    return(
        <MapDiv
            style={{
                width: '100%',
                height: '600px',
            }}
        >
        <NavermapsProvider
            ncpClientId='h0o1z94s20'
        >
            <Map/>
        </NavermapsProvider>
        </MapDiv>
    );
};