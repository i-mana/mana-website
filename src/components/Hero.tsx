import heroUnity from "@/assets/hero-unity.jpg";
import { Sparkles } from "lucide-react";

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
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in">
          {/* Main branding */}
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 animate-scale-in backdrop-blur-sm">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight">
              <span className="text-foreground" style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.3), 2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
                MANA
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Building India's Digital Future
          </p>

          {/* Core tagline */}
          <div className="pt-8">
            <p className="text-xl md:text-2xl font-medium text-primary">
              Empowering People. Inspiring Progress. Building India Together.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
