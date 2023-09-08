import { useState } from 'react';

export default function SpointButton({
  logourl,
  brandName,
  value,
  isClicked,
  onclick,
}: {
  logourl?: string;
  brandName: string;
  value: number;
  isClicked: number;
  onclick: () => void;
}) {
  return (
    <li
      className={
        isClicked === value
          ? 'border-b-[#a16c0c] inline-block w-1/6 align-top h-[58px] border-r-[1px] border-r-solid border-r-[#e8e8e8] border-b-[1px] border-b-solid relative box-border'
          : 'inline-block w-1/6 align-top h-[58px] border-r-[1px] border-r-solid border-r-[#e8e8e8] border-b-[1px] border-b-solid border-b-[#e8e8e8] relative box-border'
      }
      onClick={onclick}
    >
      <button
        className={
          isClicked === value
            ? 'w-[calc(100%+2px)] h-[calc(100%+1px)] -left-[1px] -top-[1px] bg-[#fff4eb] relative border-none align-middle cursor-pointer'
            : 'w-[calc(100%+2px)] h-[calc(100%+1px)] -left-[1px] -top-[1px] bg-white relative border-none align-middle cursor-pointer'
        }
      >
        <span
          className={
            logourl
              ? `${logourl} block w-full h-full bg-[position:50%_center] bg-[length:62px_58px] bg-no-repeat`
              : 'text-[10px]'
          }
        >
          {brandName}
        </span>
        <span className="hidden">선택됨</span>
      </button>
    </li>
  );
}
