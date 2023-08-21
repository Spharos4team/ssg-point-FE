type BtnProps = {
  btn_name: string;
  on_click: () => void;
};

const PrimaryButton = ({ btn_name, on_click }: BtnProps) => {
  return (
    <button
      className="text-lg leading-7 font-bold text-center align-middle w-full px-2 py-3 rounded-full bg-gradient-primary"
      onClick={on_click}
    >
      {btn_name}
    </button>
  );
};

export default PrimaryButton;
