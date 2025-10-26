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
          {/* Vision - Parchment Scroll Style */}
          <Card className="relative shadow-2xl hover:shadow-3xl transition-smooth animate-fade-in overflow-visible group border-0 bg-transparent">
            {/* Top scroll rod */}
            <div className="absolute -top-4 left-0 right-0 h-4 bg-gradient-to-r from-secondary/60 via-secondary/80 to-secondary/60 rounded-full shadow-lg" />
            <div className="absolute -top-4 left-4 right-4 h-4 bg-gradient-to-b from-secondary/40 to-secondary/70 rounded-full" />
            
            {/* Bottom scroll rod */}
            <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-r from-secondary/60 via-secondary/80 to-secondary/60 rounded-full shadow-lg" />
            <div className="absolute -bottom-4 left-4 right-4 h-4 bg-gradient-to-b from-secondary/70 to-secondary/40 rounded-full" />
            
            {/* Parchment body */}
            <div className="relative bg-gradient-to-br from-amber-50/90 via-yellow-50/80 to-amber-100/90 dark:from-amber-950/30 dark:via-yellow-950/20 dark:to-amber-900/30 rounded-sm shadow-xl backdrop-blur-sm">
              {/* Aged edges effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-800/20 via-transparent to-amber-800/20 rounded-sm" />
              <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-transparent to-amber-900/10 rounded-sm" />
              
              {/* Ornate left border */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-secondary/30 to-transparent">
                <div className="absolute left-2 top-8 bottom-8 w-0.5 bg-secondary/40" />
                <div className="absolute left-3 top-12 bottom-12 w-px bg-secondary/30" />
                {/* Decorative elements */}
                <div className="absolute left-2 top-1/4 w-2 h-2 border border-secondary/40 rotate-45" />
                <div className="absolute left-2 top-1/2 w-2 h-2 border border-secondary/40 rotate-45" />
                <div className="absolute left-2 top-3/4 w-2 h-2 border border-secondary/40 rotate-45" />
              </div>
              
              {/* Ornate right border */}
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-accent/30 to-transparent">
                <div className="absolute right-2 top-8 bottom-8 w-0.5 bg-accent/40" />
                <div className="absolute right-3 top-12 bottom-12 w-px bg-accent/30" />
                {/* Decorative elements */}
                <div className="absolute right-2 top-1/4 w-2 h-2 border border-accent/40 rotate-45" />
                <div className="absolute right-2 top-1/2 w-2 h-2 border border-accent/40 rotate-45" />
                <div className="absolute right-2 top-3/4 w-2 h-2 border border-accent/40 rotate-45" />
              </div>
              
              {/* Content area */}
              <div className="relative px-16 py-10 space-y-6">
                <div className="inline-flex items-center justify-center p-3 bg-secondary/10 rounded-full border border-secondary/30">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-serif">Our Vision</h2>
                <div className="flex items-center gap-2">
                  <div className="h-px w-12 bg-gradient-to-r from-secondary to-accent" />
                  <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
                  <div className="h-px flex-1 bg-gradient-to-r from-accent to-transparent" />
                </div>
                <p className="text-xl md:text-2xl font-semibold leading-relaxed text-amber-950 dark:text-amber-100 font-serif">
                  To join hands in India's growth and make technology the bridge that brings everyone along
                </p>
                <p className="text-base text-amber-800 dark:text-amber-200 leading-relaxed italic">
                  We see technology as a helping hand that lifts people up — blending India's spirit of unity with innovation that drives growth for all.
                </p>
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
