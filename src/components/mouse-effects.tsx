import { useState, useEffect } from "react";

export function MouseEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMove = (x: number, y: number) => {
      setMousePosition({ x, y });
      setIsVisible(true);
    };

    // Mouse events for desktop
    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    // Touch events for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
      }
    };

    const handleTouchEnd = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Glowing cursor effect - visible on desktop always, on mobile only during touch */}
      <div
        className={`absolute w-32 h-32 rounded-full bg-gradient-to-r from-amber-500/30 via-orange-500/30 to-amber-600/30 blur-3xl transition-all duration-100 ${
          isVisible ? 'opacity-100' : 'md:opacity-100 opacity-0'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Medium glow layer */}
      <div
        className={`absolute w-20 h-20 rounded-full bg-gradient-to-r from-amber-400/40 via-orange-400/40 to-amber-500/40 blur-2xl transition-all duration-100 ${
          isVisible ? 'opacity-100' : 'md:opacity-100 opacity-0'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Smaller inner glow */}
      <div
        className={`absolute w-8 h-8 rounded-full bg-amber-400/60 blur-xl transition-all duration-100 ${
          isVisible ? 'opacity-100' : 'md:opacity-100 opacity-0'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}