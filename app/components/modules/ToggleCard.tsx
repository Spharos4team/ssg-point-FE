import ContentStrong from "../atoms/ContentStrong";
import ToggleBasic from "../atoms/ToggleButtonBasic";

const ToggleCard = ({
  className,
  title,
  toggleId,
  modified,
}: {
  className?: string;
  title: string;
  toggleId: string;
  modified?: string;
}) => {
  return (
    <>
      <div
        className={`flex flex-nowrap justify-between box-border py-4 px-5 ${className}`}
      >
        <div className="flex justify-center flex-col">
          <p
            className="text-black text-sm leading-6 break-keep whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: title }}
          ></p>
          <p className="text-[#767676] text-xs leading-5 break-keep mt-1">
            <button className="relative block w-auto">
              <span className="inline-block align-middle after:content-[''] after:opacity-50 after:inline-block after:w-[5px] after:h-[9px] after:mt-2 after:ml-[3px] after:bg-[url('/images/icon_back.png')] after:bg-center after:rotate-180 after:bg-[length:100%_auto]">
                내용보기
              </span>
            </button>
          </p>
        </div>
        <ToggleBasic id={toggleId}>{title}</ToggleBasic>
      </div>

      {modified ? (
        <div className="block w-full text-xs leading-5 text-[#767676] bg-[#f5f5f5] box-border px-5 py-[6px]">
          변경일 : {modified}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ToggleCard;
