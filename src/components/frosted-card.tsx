import { ReactNode } from "react";

interface FrostedCardProps {
  children: ReactNode;
  className?: string;
}

export function FrostedCard({ children, className = "" }: FrostedCardProps) {
  return (
    <div
      className={`
        relative p-8 rounded-2xl
        bg-gradient-to-br from-black/50 via-zinc-900/30 to-black/60 backdrop-blur-2xl
        border border-amber-900/40
        shadow-2xl shadow-black/50
        before:absolute before:inset-0
        before:rounded-2xl before:p-[1px]
        before:bg-gradient-to-br before:from-amber-700/30 before:via-amber-900/20 before:to-transparent
        before:-z-10 before:blur-[0.5px]
        after:absolute after:inset-[0] after:top-0 after:left-0 after:right-0 after:h-[1px]
        after:bg-gradient-to-r after:from-transparent after:via-amber-600/50 after:to-transparent
        after:rounded-t-2xl
        hover:border-amber-800/50
        hover:before:from-amber-600/40 hover:before:via-amber-800/30
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}