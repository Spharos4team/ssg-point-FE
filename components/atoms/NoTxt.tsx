export default function NoTxt({
    children
}:{
    children: React.ReactNode;
}) {
    return (
        <p className="relative pt-16 text-[13px] text-center text-[#767676] after:content-[''] after:absolute after:bg-[url('/images/icon_nodata.png')] after:bg-no-repeat after:top-0 after:left-1/2 after:w-12 after:h-12 after:bg-[100%_auto] after:translate-x-[-50%]">
            {children}
        </p>
    );
};