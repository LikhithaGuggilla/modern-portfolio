export function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(217, 119, 6, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(217, 119, 6, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        animation: 'gridMove 20s linear infinite'
      }}>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-600 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.4
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(80px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          50% {
            transform: translate(20px, -30px) scale(1.5);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
