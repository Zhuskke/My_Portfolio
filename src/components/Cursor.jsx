import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);

    // Detect hover on buttons/links
    const hoverables = document.querySelectorAll("button, a, li");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsHovering(true));
      el.addEventListener("mouseleave", () => setIsHovering(false));
    });

    return () => {
      window.removeEventListener("mousemove", move);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsHovering(true));
        el.removeEventListener("mouseleave", () => setIsHovering(false));
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 transition-transform duration-200 ease-linear`}
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px) ${
          isHovering ? "rotate(720deg) scale(1.5)" : "rotate(0deg) scale(1)"
        }`,
      }}
    >
      {/* Shuriken Shape */}
      <div className="relative w-full h-full">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-yellow-400 -translate-y-1/2"></div>
        <div className="absolute top-0 left-1/2 h-full w-1 bg-yellow-400 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-full h-1 bg-yellow-400 rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-full h-1 bg-yellow-400 -rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Cursor;