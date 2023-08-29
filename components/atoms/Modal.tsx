"use client";
import { useEffect, useState } from "react";

const Modal = ({
  title,
  modal,
  fill = false,
  center = false,
  children,
}: {
  title?: string;
  modal: boolean;
  fill?: boolean;
  center?: boolean;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else if (!modal) {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  return (
    <div>
      <div
        className={`fixed flex left-0 top-0 w-full h-full min-w-[315px] z-[999] ${
          modal ? "" : "hidden"
        } ${center ? "items-center justify-center" : ""}`}
      >
        {/* Layer */}
        <div
          className={`flex relative flex-col z-[2] min-w-[315px] px-5 py-6 ${
            fill
              ? "max-w-none max-h-none h-full w-[100vw] m-0 rounded-none"
              : "max-w-[315px] w-[calc(100vw-40px)] m-[35px_auto] rounded-2xl"
          } min-h-[10px] bg-white overflow-hidden box-border`}
        >
          {title && (
            <div className="table relative w-full box-border min-h-[50px]">
              <h2 className="text-base leading-[26px] align-middle p-5 pr-[45px] break-keep">
                {title}
              </h2>
            </div>
          )}
          {children}
        </div>

        {/* Background */}
        <div className="fixed left-0 top-0 z-[1] w-[100vw] h-full min-w-[320px] bg-black bg-opacity-80"></div>
      </div>
    </div>
  );
};

export default Modal;
