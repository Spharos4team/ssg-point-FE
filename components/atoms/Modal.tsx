import { useEffect } from "react";

const Modal = ({
  title,
  modal,
  onClick,
  fill = false,
  children,
}: {
  title: string;
  modal: boolean;
  onClick: any;
  fill?: boolean;
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
        className={`fixed flex flex-col left-0 top-0 w-full h-full min-w-[315px] z-[999] ${
          modal ? "" : "hidden"
        }`}
      >
        {/* Layer */}
        <div
          className={`flex relative flex-col z-[2] min-w-[315px] ${
            fill
              ? "max-w-none max-h-none h-full w-[100vw] m-0 rounded-none"
              : "max-w-[315px] w-[calc(100vw-40px)] m-[35px_auto] rounded-2xl"
          } min-h-[10px] bg-white overflow-hidden box-border`}
        >
          <div className="table relative w-full box-border min-h-[50px]">
            <h2 className="text-base leading-[26px] align-middle p-5 pr-[45px] break-keep">
              {title}
            </h2>
          </div>
          <div className="relative flex flex-1 flex-col h-auto">{children}</div>
          <button
            className="absolute right-[2px] top-[6px] w-[50px] h-[50px] indent-[-999em] bg-[url('/images/icon_close.png')] bg-center bg-no-repeat bg-[length:14px_14px]"
            onClick={() => onClick(false)}
          >
            닫기
          </button>
        </div>

        {/* Background */}
        <div className="fixed left-0 top-0 z-[1] w-[100vw] h-full min-w-[320px] bg-black bg-opacity-80"></div>
      </div>
    </div>
  );
};

export default Modal;
