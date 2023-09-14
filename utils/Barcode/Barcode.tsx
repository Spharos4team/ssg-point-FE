"use client";
import React, { useRef, useEffect } from "react";
import JsBarcode from "jsbarcode";
import styles from "./Barcode.module.css";
<<<<<<< HEAD
=======
import { addHyphensToNumber } from "../FormatHelpers";
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12

const Barcode = ({
  type = "basic",
  value,
  height,
}: {
  type?: "basic" | "detail";
  value: string;
  height?: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      JsBarcode(svgRef.current, value, {
        format: "CODE128", // 바코드 형식
        displayValue: true, // value 표시 여부
        height: (height as number) ?? 80,
<<<<<<< HEAD
        fontSize: 22,
        textAlign: "right",
=======
        fontSize: 11,
        textAlign: "right",
        text: addHyphensToNumber(value),
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12
      });

      const textElement = svgRef.current.querySelector("text");
      textElement?.setAttribute("fill", "#767676");
    }
  }, [value]);

  return (
    <svg
      className={type === "basic" ? styles.barcode : styles.barcode_swipe}
      ref={svgRef}
    ></svg>
  );
};

export default Barcode;
