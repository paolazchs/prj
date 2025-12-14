"use client";
import React from "react";
import Image from "next/image";
import Menu from "../ui/Menu";

interface HeaderProps {
  variant?: "primary" | "secondary"
}

export default function Header({variant = "primary"}: HeaderProps) {

 const variantStyleHeader = variant === "primary" ? "bg-white" : "bg-black";
 const textColor = variant === "primary" ? "text-black" : "text-white";

  return (
     <header className={`w-full ${variantStyleHeader} py-4 px-6 flex items-center justify-between`}>
        <h1 className="text-2xl font-bold">
          <span className="text-red-600">Toyota</span>
          <span className={textColor}>Tech</span>
        </h1>

        <Menu/>
    </header>
  );
}
