import { useState } from "react";
import { ChevronDown } from "lucide-react";

type CustomAccordionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export default function CustomAccordion({
  title,
  children,
  defaultOpen = false,
}: CustomAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-[#C8C5D3] bg-[#F8F7FB] overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left transition-colors hover:bg-[#F2F0F8]"
      >
        <h2 className="text-xl font-semibold text-[#1E1E24]">
          {title}
        </h2>

        <ChevronDown
          size={22}
          className={`shrink-0 text-[#666] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6">
            <p className="text-base leading-7 text-[#666]">
              {children}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}