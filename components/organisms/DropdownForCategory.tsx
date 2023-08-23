"use client";
import CateJson from "@/datas/category.data.json";
import { useState } from "react";

const DropdownForCategory = () => {
  const categories = CateJson.categories;
  const [parent, setParent] = useState("");
  const [child, setChild] = useState("");

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
          {categories
            .filter((x) => x.parent_id === "")
            ?.map((item, index) => (
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
          {categories
            .filter((x) => x.parent_id === parent)
            ?.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>
      </div>
    </>
  );
};

export default DropdownForCategory;
