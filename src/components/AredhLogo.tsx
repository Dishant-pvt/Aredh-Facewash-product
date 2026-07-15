import React, { useState } from "react";

interface AredhLogoProps {
  className?: string;
  height?: number | string;
}

export default function AredhLogo({ className = "", height = 40 }: AredhLogoProps) {
  const [imgSrc, setImgSrc] = useState("/img/logo.svg");

  const handleError = () => {
    // If the custom path "/img/logo.svg" fails, fallback to standard logo.svg path
    if (imgSrc !== "/img/logo.svg") {
      setImgSrc("/img/logo.svg");
    }
  };

  const heightStyle = typeof height === "number" ? `${height}px` : height;

  return (
    <img
      src={imgSrc}
      alt="AREDH Logo"
      style={{ height: heightStyle, width: "auto" }}
      className={`select-none object-contain ${className}`}
      onError={handleError}
      referrerPolicy="no-referrer"
    />
  );
}

