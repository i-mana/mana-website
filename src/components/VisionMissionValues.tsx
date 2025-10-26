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
          {/* Vision - Realistic Flowing Parchment Scroll */}
          <Card className="relative shadow-2xl hover:shadow-3xl transition-smooth animate-fade-in overflow-visible group border-0 bg-transparent px-4">
            {/* Top scroll rod with realistic wood texture and curves */}
            <div className="absolute -top-6 left-8 right-8 h-5">
              {/* Rod shadow */}
              <div className="absolute inset-0 top-1 bg-black/30 rounded-full blur-sm" />
              {/* Wooden rod with grain */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 rounded-full shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-b from-amber-600/50 via-transparent to-amber-900/50 rounded-full" />
              {/* Rod ends (caps) */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-yellow-700 to-amber-900 rounded-full shadow-md border-2 border-amber-800" />
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-yellow-700 to-amber-900 rounded-full shadow-md border-2 border-amber-800" />
            </div>
            
            {/* Top edge curl effect */}
            <div className="absolute -top-2 left-12 right-12 h-8 bg-gradient-to-b from-amber-200 via-amber-100 to-transparent dark:from-amber-900 dark:via-amber-950 rounded-t-3xl shadow-inner" />
            
            {/* Bottom scroll rod */}
            <div className="absolute -bottom-6 left-8 right-8 h-5">
              <div className="absolute inset-0 -top-1 bg-black/30 rounded-full blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 rounded-full shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-600/50 via-transparent to-amber-900/50 rounded-full" />
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-yellow-700 to-amber-900 rounded-full shadow-md border-2 border-amber-800" />
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-yellow-700 to-amber-900 rounded-full shadow-md border-2 border-amber-800" />
            </div>
            
            {/* Bottom edge curl effect */}
            <div className="absolute -bottom-2 left-12 right-12 h-8 bg-gradient-to-t from-amber-200 via-amber-100 to-transparent dark:from-amber-900 dark:via-amber-950 rounded-b-3xl shadow-inner" />
            
            {/* Main parchment body with flowing edges */}
            <div className="relative" style={{ 
              clipPath: 'polygon(2% 0%, 98% 0%, 100% 2%, 100% 98%, 98% 100%, 2% 100%, 0% 98%, 0% 2%)'
            }}>
              {/* Parchment base with realistic texture */}
              <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 dark:from-amber-950/40 dark:via-yellow-950/30 dark:to-amber-900/40 shadow-2xl">
                {/* Paper texture overlay */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 46, 0.03) 2px, rgba(139, 92, 46, 0.03) 4px)`
                }} />
                
                {/* Age spots and stains */}
                <div className="absolute top-10 right-20 w-16 h-16 bg-amber-800/5 dark:bg-amber-950/30 rounded-full blur-xl" />
                <div className="absolute bottom-16 left-24 w-12 h-12 bg-amber-700/5 dark:bg-amber-900/30 rounded-full blur-lg" />
                <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-amber-600/5 dark:bg-amber-800/30 rounded-full blur-md" />
                
                {/* Aged/burnt edges */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-transparent to-amber-900/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-amber-800/10 via-transparent to-amber-800/15" />
                
                {/* Ornate left border with flowing pattern */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-secondary/20 to-transparent">
                  <svg className="absolute left-3 top-8 bottom-8 w-4" viewBox="0 0 20 400" preserveAspectRatio="none">
                    <path d="M10 0 Q15 100 10 200 T10 400" stroke="hsl(var(--secondary))" strokeWidth="1" fill="none" opacity="0.4" />
                    <path d="M12 50 Q14 100 12 150" stroke="hsl(var(--secondary))" strokeWidth="0.5" fill="none" opacity="0.3" />
                  </svg>
                  {/* Decorative flourishes */}
                  <div className="absolute left-4 top-1/4 w-3 h-3 border-2 border-secondary/30 rotate-45 rounded-sm" />
                  <div className="absolute left-5 top-1/2 w-2 h-2 bg-secondary/20 rotate-45" />
                  <div className="absolute left-4 top-3/4 w-3 h-3 border-2 border-secondary/30 rotate-45 rounded-sm" />
                </div>
                
                {/* Ornate right border with flowing pattern */}
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-accent/20 to-transparent">
                  <svg className="absolute right-3 top-8 bottom-8 w-4" viewBox="0 0 20 400" preserveAspectRatio="none">
                    <path d="M10 0 Q5 100 10 200 T10 400" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" opacity="0.4" />
                    <path d="M8 50 Q6 100 8 150" stroke="hsl(var(--accent))" strokeWidth="0.5" fill="none" opacity="0.3" />
                  </svg>
                  <div className="absolute right-4 top-1/4 w-3 h-3 border-2 border-accent/30 rotate-45 rounded-sm" />
                  <div className="absolute right-5 top-1/2 w-2 h-2 bg-accent/20 rotate-45" />
                  <div className="absolute right-4 top-3/4 w-3 h-3 border-2 border-accent/30 rotate-45 rounded-sm" />
                </div>
                
                {/* Content area */}
                <div className="relative px-16 md:px-20 py-12 space-y-6">
                  <div className="inline-flex items-center justify-center p-3 bg-amber-100/50 dark:bg-amber-900/30 rounded-full border-2 border-secondary/20 shadow-sm">
                    <Eye className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-100 font-serif drop-shadow-sm">Our Vision</h2>
                  <div className="flex items-center gap-2">
                    <div className="h-px w-16 bg-gradient-to-r from-secondary/60 to-accent/60" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-accent/60" />
                    <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
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
