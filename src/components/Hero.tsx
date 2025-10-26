import heroUnity from "@/assets/hero-unity.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background with subtle pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroUnity})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/60 to-background/70" />
      </div>

      {/* Subtle animated gradient orbs */}
      <div className="absolute top-1/3 right-1/4 sm:right-1/3 w-48 h-48 sm:w-64 sm:h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 sm:left-1/3 w-40 h-40 sm:w-56 sm:h-56 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 sm:py-24 md:py-0">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Main branding - positioned at top */}
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-6 sm:mb-8">
              <span className="text-foreground" style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.3), 2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
                MANA
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 leading-relaxed px-4 sm:px-0" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
              Empower People • Inspire Progress • Build India Together
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
