export default function ConvertPntList() {
  const pinkArrowBefore =
    "before:content-[''] before:absolute before:top-[39px] before:w-[18px] before:h-[14px] before:bg-[url('/images/arrow_right_pink.png')] before:bg-no-repeat before:bg-[100%_auto]";
  const pinkArrowAfter =
    "after:content-[''] after:absolute after:top-[39px] after:w-[18px] after:h-[14px] after:bg-[url('/images/arrow_right_pink.png')] after:bg-no-repeat after:bg-[100%_auto]";

  return (
    <>
      <div
        className={`relative mt-6 max-w-[320px] mx-auto ${pinkArrowBefore} ${pinkArrowAfter}`}
      >
        <ol className="text-center">
          <li
            className={`relative inline-block box-border w-[80px] h-[103px] before:content-[''] before:block before:w-[80px] before:h-[80px] before:mb-2 before:bg-[url('/images/cnvrt_pntList.png')] before:bg-no-repeat before:bg-[258px_auto] before:bg-[]`}
          ></li>
        </ol>
      </div>
    </>
  );
}
