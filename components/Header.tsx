import HeaderNavBox from "./HeaderNavBox";
import HeaderUserBox from "./HeaderUserBox";
import HeaderMenuBox from "./HeaderMenuBox";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <header className="flex">
      <div className="flex justify-between items-center align-middle fixed left-0 top-0 w-full h-[56px] pr-[60px] pl-[48px] bg-white z-10">
        <HeaderNavBox />
        <HeaderUserBox />
        <HeaderMenuBox />
      </div>
      <Sidebar />
    </header>
  );
}
