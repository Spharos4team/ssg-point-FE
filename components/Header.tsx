import HeaderNavBox from "./HeaderNavBox";
import Sidebar from "./organisam/Sidebar";
import AuthBox from "./atom/AuthBox";
import MenuBox from "./atom/MenuBox";

export default function Header() {
  return (
    <header className="flex">
      <div className="flex justify-between items-center align-middle fixed left-0 top-0 w-full h-[56px] pr-[60px] pl-[48px] bg-white z-20">
        <HeaderNavBox />
        <AuthBox />
        <MenuBox />
      </div>
      <Sidebar />
    </header>
  );
}
