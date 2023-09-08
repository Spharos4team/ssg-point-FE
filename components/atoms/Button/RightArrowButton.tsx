export default function RightArrowButton({ className, txt }: { className?: string; txt?: string }) {
  return (
    <button className="ablsolute right-0 top-0 w-6 h-[22px]">
      <span className="relative block box-border overflow-hidden indent-[-999em] opacity-50 w-[24px] h-full bg-[url('/images/icon_back.png')] bg-left bg-[length:6px_auto] bg-no-repeat rotate-180">
        {txt}
      </span>
    </button>
  );
}
