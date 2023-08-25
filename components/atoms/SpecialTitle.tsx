export default function SpecialTitle({
    ptag,
    children,
    name,
    color,
}:{
    ptag?: string;
    children: React.ReactNode;
    name: string;
    color: 'orange' | 'pink' | 'none';
}) {
    return(
        <p className={`${ptag}`}>
            <strong className={`${color == "pink" ? 'after:bg-[#fed6e8]' : color == "orange" ? 'after:bg-[#ffdfb5]' : ""} font-medium relative align-top z-[1] pr-1 pl-[1px] inline-block after:content-[''] after:bottom-0 after:left-0 after:inline-block after:absolute after:w-full after:h-[15px] after:z-[-1]`}>
                {name}
            </strong>
            {children}
        </p>

    );
};