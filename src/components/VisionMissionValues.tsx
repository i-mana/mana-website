import { Card, CardContent } from "@/components/ui/card";
import { Eye, Sparkles, Heart, Users, Lightbulb, Shield, Handshake, Leaf } from "lucide-react";

const coreValues = [
  {
    icon: Users,
    title: "Empowerment for All",
    description: "We believe technology should uplift everyone — from individuals to communities across India.",
  },
  {
    icon: Lightbulb,
    title: "Innovation with Purpose",
    description: "We design and build solutions that make life better, not just smarter — using creativity and technology to solve real challenges.",
  },
  {
    icon: Shield,
    title: "Integrity in Action",
    description: "We act with honesty, transparency, and accountability in everything we do — ensuring our growth strengthens the trust of the people we serve.",
  },
  {
    icon: Handshake,
    title: "Unity in Progress",
    description: "We grow with India, not apart from it. Collaboration, inclusion, and shared progress guide how we work with communities, partners, and people.",
  },
  {
    icon: Leaf,
    title: "Sustainability and Impact",
    description: "We measure success not just by innovation, but by lasting positive change — in the nation's journey towards a better future.",
  },
];

const VisionMissionValues = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        {/* Vision and Mission Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Vision - Flowing Scroll with Bow */}
          <Card className="relative animate-fade-in border-0 bg-transparent pt-16 pb-8">
            {/* Top rolled scroll cylinder */}
            <div className="absolute -top-2 left-8 right-8 h-20 z-20">
              {/* Cylinder shadow */}
              <div className="absolute inset-0 top-2 bg-black/20 rounded-full blur-md" />
              {/* Main cylinder body */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-200 via-amber-100 to-amber-300 dark:from-amber-800 dark:via-amber-700 dark:to-amber-900 rounded-[50%] shadow-xl border-t-2 border-amber-300/50 dark:border-amber-600/50" />
              {/* Cylinder depth/3D effect */}
              <div className="absolute inset-x-4 bottom-0 h-8 bg-gradient-to-b from-transparent via-amber-800/20 to-amber-900/30 rounded-[50%]" />
              {/* Paper edge showing from roll */}
              <div className="absolute inset-x-6 bottom-2 h-2 bg-amber-50 dark:bg-amber-950/50 rounded-full opacity-60" />
            </div>

            {/* Decorative Ribbon Bow */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
              {/* Bow center knot */}
              <div className="relative w-8 h-6 bg-gradient-to-br from-red-600 to-red-800 rounded-sm shadow-lg transform rotate-45">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-transparent rounded-sm" />
              </div>
              {/* Left bow loop */}
              <div className="absolute -left-10 top-0 w-16 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-full shadow-lg" style={{ clipPath: 'ellipse(70% 100% at 80% 50%)' }}>
                  <div className="absolute inset-0 bg-gradient-to-tl from-red-500/40 to-transparent" />
                </div>
              </div>
              {/* Right bow loop */}
              <div className="absolute -right-10 top-0 w-16 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-800 to-red-900 rounded-full shadow-lg" style={{ clipPath: 'ellipse(70% 100% at 20% 50%)' }}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-500/30 to-transparent" />
                </div>
              </div>
              {/* Left ribbon tail */}
              <div className="absolute -left-8 top-4 w-6 h-16 bg-gradient-to-b from-red-700 to-red-900 shadow-md animate-ribbon-sway" style={{ clipPath: 'polygon(50% 0%, 100% 0%, 80% 100%, 20% 100%, 0% 0%)', transformOrigin: 'top center' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 to-transparent" />
              </div>
              {/* Right ribbon tail */}
              <div className="absolute -right-8 top-4 w-6 h-16 bg-gradient-to-b from-red-800 to-red-950 shadow-md animate-ribbon-sway-reverse" style={{ clipPath: 'polygon(0% 0%, 50% 0%, 100% 0%, 80% 100%, 20% 100%)', transformOrigin: 'top center', animationDelay: '0.3s' }}>
                <div className="absolute inset-0 bg-gradient-to-l from-red-700/40 to-transparent" />
              </div>
            </div>
            
            {/* Main parchment with flowing wavy edges */}
            <div className="relative mx-4 animate-scroll-float" style={{ 
              clipPath: 'polygon(5% 0%, 95% 0%, 98% 2%, 99% 5%, 100% 10%, 99.5% 20%, 100% 30%, 99% 40%, 100% 50%, 99.5% 60%, 100% 70%, 99% 80%, 99.5% 85%, 98% 90%, 95% 93%, 90% 95%, 85% 96%, 75% 97%, 65% 98%, 55% 99%, 45% 99%, 35% 98%, 25% 97%, 15% 96%, 10% 95%, 5% 93%, 2% 90%, 0.5% 85%, 1% 80%, 0% 70%, 0.5% 60%, 0% 50%, 1% 40%, 0% 30%, 0.5% 20%, 0% 10%, 1% 5%, 2% 2%)'
            }}>
              {/* Parchment base with realistic aged texture */}
              <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 dark:from-amber-950/50 dark:via-yellow-950/40 dark:to-amber-900/50 shadow-2xl min-h-[500px]">
                {/* Paper grain texture */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 46, 0.05) 2px, rgba(139, 92, 46, 0.05) 4px),
                                   repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139, 92, 46, 0.03) 2px, rgba(139, 92, 46, 0.03) 4px)`
                }} />
                
                {/* Aged stains and spots */}
                <div className="absolute top-20 right-16 w-24 h-24 bg-amber-900/10 dark:bg-amber-950/40 rounded-full blur-2xl" />
                <div className="absolute bottom-32 left-20 w-16 h-16 bg-amber-800/10 dark:bg-amber-900/40 rounded-full blur-xl" />
                <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-amber-700/8 dark:bg-amber-800/30 rounded-full blur-lg" />
                <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-amber-600/6 dark:bg-amber-700/30 rounded-full blur-xl" />
                
                {/* Burnt/darkened edges */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-transparent to-amber-900/30" />
                <div className="absolute inset-0 bg-gradient-to-b from-amber-800/20 via-transparent via-transparent to-amber-900/40" />
                
                {/* Subtle shadow folds */}
                <div className="absolute inset-y-0 left-1/3 w-px bg-gradient-to-b from-transparent via-amber-900/5 to-transparent" />
                <div className="absolute inset-y-0 right-1/3 w-px bg-gradient-to-b from-transparent via-amber-900/5 to-transparent" />
                
                {/* Content */}
                <div className="relative px-12 md:px-16 py-16 space-y-6">
                  <div className="inline-flex items-center justify-center p-3 bg-amber-100/60 dark:bg-amber-900/40 rounded-full border-2 border-amber-300/40 dark:border-amber-700/40 shadow-sm">
                    <Eye className="h-6 w-6 text-amber-800 dark:text-amber-300" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-100 font-serif drop-shadow-sm">Our Vision</h2>
                  <div className="flex items-center gap-2">
                    <div className="h-px w-16 bg-gradient-to-r from-amber-800/60 dark:from-amber-400/60 to-amber-600/40 dark:to-amber-500/40" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-amber-700/60 dark:bg-amber-500/60" />
                    <div className="h-px flex-1 bg-gradient-to-r from-amber-600/40 dark:from-amber-500/40 to-transparent" />
                  </div>
                  <p className="text-xl md:text-2xl font-semibold leading-relaxed text-amber-950 dark:text-amber-50 font-serif">
                    To join hands in India's growth and make technology the bridge that brings everyone along
                  </p>
                  <p className="text-base text-amber-800 dark:text-amber-200 leading-relaxed italic font-serif">
                    We see technology as a helping hand that lifts people up — blending India's spirit of unity with innovation that drives growth for all.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Mission */}
          <Card className="relative shadow-lg hover:shadow-xl transition-smooth animate-fade-in overflow-visible group border-0" style={{ animationDelay: '100ms' }}>
            {/* Ornate corner decorations */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-accent rounded-tl-lg" />
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-accent rounded-tr-lg" />
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-accent rounded-bl-lg" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-accent rounded-br-lg" />
            
            {/* Parchment background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5 rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-lg" />
            
            {/* Border frame */}
            <div className="absolute inset-3 border-2 border-accent/20 rounded-md pointer-events-none" />
            
            <div className="relative p-8 md:p-10 space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full border border-accent/30">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Our Mission</h2>
              <div className="flex items-center gap-2">
                <div className="h-px w-12 bg-gradient-to-r from-accent to-primary" />
                <div className="w-2 h-2 rotate-45 bg-primary" />
                <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent" />
              </div>
              <p className="text-xl md:text-2xl font-semibold leading-relaxed text-foreground">
                To empower India's growth through inclusive and innovative technology for all
              </p>
            </div>
          </Card>
        </div>

        {/* Core Values Section */}
        <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-accent/10 rounded-full mb-4">
              <Heart className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className="relative group hover:shadow-xl transition-smooth animate-fade-in overflow-visible border-0"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  {/* Corner decorations */}
                  <div className="absolute -top-0.5 -left-0.5 w-6 h-6 border-t-2 border-l-2 border-secondary/50 rounded-tl" />
                  <div className="absolute -top-0.5 -right-0.5 w-6 h-6 border-t-2 border-r-2 border-accent/50 rounded-tr" />
                  <div className="absolute -bottom-0.5 -left-0.5 w-6 h-6 border-b-2 border-l-2 border-accent/50 rounded-bl" />
                  <div className="absolute -bottom-0.5 -right-0.5 w-6 h-6 border-b-2 border-r-2 border-secondary/50 rounded-br" />
                  
                  {/* Parchment background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-accent/3 rounded-lg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/3 to-transparent rounded-lg" />
                  
                  {/* Inner border */}
                  <div className="absolute inset-2 border border-muted/30 rounded-md pointer-events-none" />
                  
                  <CardContent className="relative p-8 space-y-4">
                    <div className="relative w-14 h-14 group-hover:scale-110 transition-smooth">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-lg opacity-20" />
                      <div className="relative w-full h-full border-2 border-secondary/30 rounded-lg bg-background/50 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="h-7 w-7 text-secondary" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-px w-8 bg-gradient-to-r from-secondary to-accent" />
                      <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
