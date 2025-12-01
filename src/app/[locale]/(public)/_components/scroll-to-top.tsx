"use client";
import { ArrowUp } from "lucide-react";

const ScrollToTopArrow = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="bg-[#f5f5f5] rounded-full p-2 cursor-pointer"
      onClick={handleScroll}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopArrow;
