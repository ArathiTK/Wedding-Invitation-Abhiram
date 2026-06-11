"use client";
import Image from "next/image";

export default function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center my-6 ${className}`}>
      <Image
        src="/assets/ornaments/divider.svg"
        alt=""
        width={400}
        height={20}
        className="w-full max-w-xs opacity-80"
      />
    </div>
  );
}
