const PrimaryButtonBasic = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-5">
      <button
        className="block text-center text-sm leading-6 font-medium box-border rounded-lg
      w-full px-4 py-3 bg-gradient-primary"
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryButtonBasic;
