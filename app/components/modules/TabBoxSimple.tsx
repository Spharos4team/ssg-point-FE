const TabBoxSimple = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-0">
      <ul className="flex">{children}</ul>
    </div>
  );
};

export default TabBoxSimple;
