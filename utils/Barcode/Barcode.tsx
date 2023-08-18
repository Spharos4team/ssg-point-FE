"use client";
import React, { useRef, useEffect } from "react";
import JsBarcode from "jsbarcode";
import styles from "./Barcode.module.css";

interface BarcodeProps {
  value: string;
}

const Barcode: React.FC<BarcodeProps> = ({ value }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      JsBarcode(svgRef.current, value, {
        format: "CODE128", // 바코드 형식
        displayValue: true, // value 표시 여부
        height: 80,
        fontSize: 22,
        textAlign: "right",
      });

      const textElement = svgRef.current.querySelector("text");
      textElement?.setAttribute("fill", "#767676");
    }
  }, [value]);

  return <svg className={styles.barcode} ref={svgRef}></svg>;
};

export default Barcode;
