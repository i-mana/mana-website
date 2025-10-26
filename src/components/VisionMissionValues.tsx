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
    <section className="py-24 px-6 md:px-8 lg:px-12 bg-muted/30">
      <div className="max-w-[1600px] mx-auto">
        {/* Vision & Mission, and Core Values in a single row */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Vision & Mission Combined Card */}
          <Card className="relative shadow-lg hover:shadow-xl transition-smooth animate-fade-in overflow-visible group border-0 flex flex-col">
            {/* Ornate corner decorations */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-secondary rounded-tl-lg" />
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-accent rounded-tr-lg" />
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-accent rounded-bl-lg" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-secondary rounded-br-lg" />
            
            {/* Parchment background */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-accent/5 rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent rounded-lg" />
            
            {/* Border frame */}
            <div className="absolute inset-3 border-2 border-secondary/20 rounded-md pointer-events-none" />
            
            <div className="relative p-6 md:p-8 space-y-8 flex-1 flex flex-col">
              {/* Vision Section */}
              <div className="space-y-4">
                <div className="relative flex items-center justify-center p-3 border-2 border-secondary/30 rounded-full">
                  <div className="absolute left-3 right-1/2 h-px bg-gradient-to-r from-secondary/30 to-transparent mr-16" />
                  <div className="relative z-10 inline-flex items-center justify-center p-3 bg-background rounded-full">
                    <Eye className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="absolute left-1/2 right-3 h-px bg-gradient-to-l from-secondary/30 to-transparent ml-16" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Our Vision</h2>
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-secondary to-accent" />
                  <div className="w-2 h-2 rotate-45 bg-accent" />
                  <div className="h-px flex-1 bg-gradient-to-l from-secondary to-accent" />
                </div>
                <p className="text-lg md:text-xl font-semibold leading-relaxed text-foreground">
                  To join hands in India's growth and make technology the bridge that brings everyone along
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  We see technology as a helping hand that lifts people up — blending India's spirit of unity with innovation that drives growth for all.
                </p>
              </div>

              {/* Mission Section */}
              <div className="space-y-4">
                <div className="relative flex items-center justify-center p-3 border-2 border-accent/30 rounded-full">
                  <div className="absolute left-3 right-1/2 h-px bg-gradient-to-r from-accent/30 to-transparent mr-16" />
                  <div className="relative z-10 inline-flex items-center justify-center p-3 bg-background rounded-full">
                    <Sparkles className="h-5 w-5 text-accent" />
                  </div>
                  <div className="absolute left-1/2 right-3 h-px bg-gradient-to-l from-accent/30 to-transparent ml-16" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Our Mission</h2>
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-accent to-primary" />
                  <div className="w-2 h-2 rotate-45 bg-primary" />
                  <div className="h-px flex-1 bg-gradient-to-l from-accent to-primary" />
                </div>
                <p className="text-lg md:text-xl font-semibold leading-relaxed text-foreground">
                  To empower India's growth through inclusive and innovative technology for all
                </p>
              </div>
            </div>
          </Card>

          {/* Core Values Card */}
          <Card className="relative shadow-lg hover:shadow-xl transition-smooth animate-fade-in overflow-visible group border-0 flex flex-col" style={{ animationDelay: '100ms' }}>
            {/* Ornate corner decorations */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg" />
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg" />
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg" />
            
            {/* Parchment background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/5 to-transparent rounded-lg" />
            
            {/* Border frame */}
            <div className="absolute inset-3 border-2 border-primary/20 rounded-md pointer-events-none" />
            
            <div className="relative p-6 md:p-8 space-y-4 h-full flex flex-col">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full border border-primary/30">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Core Values</h2>
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-primary to-accent" />
                <div className="w-2 h-2 rotate-45 bg-accent" />
                <div className="h-px flex-1 bg-gradient-to-l from-primary to-accent" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The principles that guide everything we do
              </p>
              <div className="space-y-3 pt-2 flex-1">
                {coreValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="space-y-1">
                      <div className="flex items-start gap-2">
                        <Icon className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-semibold text-sm text-foreground leading-tight">{value.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>

        {/* Detailed Core Values Section Below */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className="relative group hover:shadow-xl transition-smooth animate-fade-in overflow-visible border-0"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
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
                  
                  <CardContent className="relative p-6 space-y-3">
                    <div className="relative w-12 h-12 group-hover:scale-110 transition-smooth">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-lg opacity-20" />
                      <div className="relative w-full h-full border-2 border-secondary/30 rounded-lg bg-background/50 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-px w-8 bg-gradient-to-r from-secondary to-accent" />
                      <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
                    </div>
                    <h3 className="text-lg font-bold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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
