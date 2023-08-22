import Image from 'next/image'
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <ul className="flex" role={"tablist"}>
                <li className="table relative grow shrink" role={"presentation"}>
                    <Link className="bg-[#fff3f8] text-[#d9044b] font-[500] border-[#d9044b]" href={"/benefits/pntPlus/attend"}>출석체크</Link>
                </li>
                <li className="table relative grow shrink" role={"presentation"}>
                    <Link href={"/benefits/pntPlus/roulette"}>럭키룰렛</Link>
                </li>
            </ul>
        </div>
    )
}
