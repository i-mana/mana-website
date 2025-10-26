import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo/Title */}
          <div className="space-y-2">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="gradient-hero bg-clip-text text-transparent">
                MANA
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground">
              Making Apps for Nation's Advancements
            </p>
          </div>

          {/* Vision */}
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              To join hands in India's growth and make technology the bridge that brings everyone along
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-soft hover:shadow-lg transition-smooth group"
            >
              Our Mission
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-muted transition-smooth"
            >
              Learn More
            </Button>
          </div>

          {/* Stats or Tagline */}
          <div className="pt-12">
            <p className="text-lg text-muted-foreground font-medium">
              Empowering People. Inspiring Progress. Building India Together.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
