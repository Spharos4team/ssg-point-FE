"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import Button from "./Button";
import { useEffect } from "react";

export default function CollapseBox({
  id,
  title,
  children,
  open = false,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  open?: boolean;
}) {
  const { appValueList, handleAppRecord } = useAppContext();

  useEffect(() => {
    if (open) handleAppRecord(id, true);
  }, []);

  return (
    <>
      <div className="border-b">
        <Button
          id={id}
          type="collapse"
          open={appValueList[id] as boolean}
          onClick={() => handleAppRecord(id, !appValueList[id])}
        >
          {title}
        </Button>
        <div className={appValueList[id] ? "" : "hidden"}>{children}</div>
      </div>
    </>
  );
}
