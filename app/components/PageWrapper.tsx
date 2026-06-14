"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EnvelopeIntro from "./EnvelopeIntro";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);

  return (
    // relative so the absolute-positioned envelope is contained within the mobile column
    <div className="relative">
      <AnimatePresence>
        {!opened && <EnvelopeIntro onOpen={() => setOpened(true)} />}
      </AnimatePresence>
      {children}
    </div>
  );
}
