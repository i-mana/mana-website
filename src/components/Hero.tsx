import heroUnity from "@/assets/hero-unity.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(40 35% 92%), hsl(25 40% 88%), hsl(215 35% 85%))' }}>
      {/* Background with subtle pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroUnity})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.15) contrast(1.1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/60 to-background/70" />
      </div>

      {/* Subtle animated gradient orbs */}
      <div className="absolute top-1/3 right-1/3 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container relative z-10 px-4 h-full flex items-start pt-20 sm:pt-24 md:pt-32 lg:pt-40">
        <div className="max-w-5xl mx-auto text-center animate-fade-in w-full">
          {/* Main branding - positioned at top */}
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight mb-4 sm:mb-6 md:mb-8">
              <span className="text-foreground" style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.3), 2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
                MANA
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 leading-relaxed px-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
              Empower People • Inspire Progress • Build India Together
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
