export function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Brown floating particles scattered across the screen */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-amber-800 rounded-full opacity-60 animate-float" style={{ animationDuration: '6s' }} />
      <div className="absolute top-20 right-32 w-2 h-2 bg-amber-700 rounded-full opacity-50 animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }} />
      <div className="absolute top-40 left-1/4 w-4 h-4 bg-amber-900 rounded-full opacity-40 animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      <div className="absolute top-60 right-1/3 w-2 h-2 bg-orange-800 rounded-full opacity-50 animate-float" style={{ animationDuration: '9s', animationDelay: '0.5s' }} />
      <div className="absolute bottom-40 left-16 w-3 h-3 bg-amber-800 rounded-full opacity-60 animate-float" style={{ animationDuration: '8s', animationDelay: '1.5s' }} />
      <div className="absolute bottom-60 right-20 w-2 h-2 bg-amber-700 rounded-full opacity-50 animate-float" style={{ animationDuration: '7s', animationDelay: '3s' }} />
      <div className="absolute top-1/3 right-16 w-3 h-3 bg-amber-900 rounded-full opacity-40 animate-float" style={{ animationDuration: '6s', animationDelay: '2.5s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-orange-900 rounded-full opacity-50 animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-20 w-2 h-2 bg-amber-800 rounded-full opacity-60 animate-float" style={{ animationDuration: '7s', animationDelay: '3.5s' }} />
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-amber-700 rounded-full opacity-50 animate-float" style={{ animationDuration: '9s', animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/2 w-2 h-2 bg-orange-800 rounded-full opacity-40 animate-float" style={{ animationDuration: '6s', animationDelay: '0.8s' }} />
      <div className="absolute top-32 right-1/2 w-4 h-4 bg-amber-900 rounded-full opacity-50 animate-float" style={{ animationDuration: '8s', animationDelay: '1.2s' }} />
      <div className="absolute bottom-32 right-40 w-3 h-3 bg-amber-800 rounded-full opacity-60 animate-float" style={{ animationDuration: '7s', animationDelay: '2.8s' }} />
      <div className="absolute top-1/4 left-40 w-2 h-2 bg-amber-700 rounded-full opacity-50 animate-float" style={{ animationDuration: '9s', animationDelay: '1.8s' }} />
      <div className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-orange-900 rounded-full opacity-40 animate-float" style={{ animationDuration: '6s', animationDelay: '3.2s' }} />
      
      {/* Additional particles for more coverage */}
      <div className="absolute top-[15%] left-[60%] w-3 h-3 bg-amber-800 rounded-full opacity-50 animate-float" style={{ animationDuration: '7s', animationDelay: '0.3s' }} />
      <div className="absolute top-[45%] right-[15%] w-2 h-2 bg-amber-700 rounded-full opacity-60 animate-float" style={{ animationDuration: '8s', animationDelay: '1.7s' }} />
      <div className="absolute top-[65%] left-[35%] w-4 h-4 bg-amber-900 rounded-full opacity-40 animate-float" style={{ animationDuration: '9s', animationDelay: '2.3s' }} />
      <div className="absolute top-[85%] right-[45%] w-2 h-2 bg-orange-800 rounded-full opacity-50 animate-float" style={{ animationDuration: '6s', animationDelay: '1.1s' }} />
      <div className="absolute top-[25%] left-[80%] w-3 h-3 bg-amber-800 rounded-full opacity-55 animate-float" style={{ animationDuration: '7s', animationDelay: '2.7s' }} />
      <div className="absolute top-[55%] right-[70%] w-2 h-2 bg-amber-700 rounded-full opacity-45 animate-float" style={{ animationDuration: '8s', animationDelay: '0.9s' }} />
      <div className="absolute top-[75%] left-[15%] w-3 h-3 bg-orange-900 rounded-full opacity-50 animate-float" style={{ animationDuration: '9s', animationDelay: '3.1s' }} />
      <div className="absolute top-[35%] right-[25%] w-4 h-4 bg-amber-900 rounded-full opacity-45 animate-float" style={{ animationDuration: '6s', animationDelay: '1.9s' }} />
      <div className="absolute top-[95%] left-[55%] w-2 h-2 bg-amber-800 rounded-full opacity-60 animate-float" style={{ animationDuration: '7s', animationDelay: '0.6s' }} />
      <div className="absolute top-[5%] right-[65%] w-3 h-3 bg-amber-700 rounded-full opacity-50 animate-float" style={{ animationDuration: '8s', animationDelay: '2.4s' }} />
    </div>
  );
}
