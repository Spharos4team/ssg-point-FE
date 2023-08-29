import TabContext from "./TabContext";
import TabRouter from "./TabRouter";

const Tab = ({
  className,
  type,
  id,
  name,
  href,
}: {
  className?: string;
  type: "router" | "context";
  id: string;
  name: string;
  href?: string;
}) => {
  switch (type) {
    case "router": {
      if (!href) {
        throw new Error("router 타입은 href 속성이 필요합니다.");
      }
      return (
        <TabRouter className={className} id={id} href={href}>
          {name}
        </TabRouter>
      );
    }
    case "context": {
      if (href) {
        throw new Error("context 타입은 href 속성이 필요 없습니다.");
      }
      return <TabContext className={className} id={id} name={name} />;
    }
  }
};

export default Tab;
