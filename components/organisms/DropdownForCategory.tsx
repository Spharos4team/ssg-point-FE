"use client";
import Category from "@/datas/category.data.json";
import { useState } from "react";

const DropdownForCategory = () => {
  const [parent, setParent] = useState("");
  const [child, setChild] = useState("소분류");

  // TODO: 소분류 초기상태 반영 안됨
  return (
    <>
      <div className="relative inline-block align-top w-full rounded-lg">
        <select
          className="relative block w-full h-12 pr-8 pl-[15px] text-sm box-border z-[1] border rounded-lg"
          id="selecForCate"
          title="selecForCate"
          onChange={(e) => setParent(e.target.value)}
          value={parent}
        >
          {Category.filter((x) => x.parent_id === "")?.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="relative inline-block align-top w-full rounded-lg">
        <select
          className="relative block w-full h-12 pr-8 pl-[15px] text-sm box-border z-[1] border rounded-lg"
          id="selecForCate"
          title="selecForCate"
          onChange={(e) => setChild(e.target.value)}
          value={child}
        >
          {Category.filter((x) => x.parent_id === parent)?.map(
            (item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            )
          )}
        </select>
      </div>
    </>
  );
};

export default DropdownForCategory;
