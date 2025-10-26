import heroUnity from "@/assets/hero-unity.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroUnity})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/60 to-background/70" />
      </div>

      {/* Subtle animated gradient orbs */}
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in pt-20">
          {/* Main branding - moved higher */}
          <div className="space-y-6">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight">
              <span className="text-foreground" style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.3), 2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
                MANA
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
