import heroBg from "@/assets/hero-bg.jpg";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/97 via-background/95 to-background/97" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in">
          {/* Main branding */}
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 animate-scale-in">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight">
              <span className="gradient-hero bg-clip-text text-transparent drop-shadow-sm">
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
