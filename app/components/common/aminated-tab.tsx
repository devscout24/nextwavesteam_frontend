import { motion } from "framer-motion";
import { useState } from "react";

type TTabItem = {
  id: string;
  label: string;
};

export function AnimatedTabs({ tabs , onTabChange , bg , aminatebg , activeTxt }: { tabs: TTabItem[]; onTabChange?: (id: string) => void , bg?: string , aminatebg?: string , activeTxt?: string }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className={`flex w-full h-fit rounded-full ${bg || "bg-[#F0EDFF]"} p-1`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
            if (onTabChange) {
              onTabChange(tab.id);
            }
          }}
          className={`relative flex-1 rounded-full px-3 py-1.5 text-sm font-medium text-[#717182] transition focus-visible:outline-2 cursor-pointer ${
            activeTab === tab.id ? (activeTxt || "text-white") : "hover:text-foreground/60"
          }`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="lng_switcher"
              className={`absolute inset-0 z-0 ${aminatebg || "bg-[#5A38F5]"} rounded-full`}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}

          <span className="relative z-10 text-nowrap text-base   ">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}