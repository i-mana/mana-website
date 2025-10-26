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
          {/* Vision */}
          <Card className="p-8 md:p-10 shadow-card hover:shadow-soft transition-smooth border-2 border-secondary/20 animate-fade-in overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-accent/5" />
            <div className="relative space-y-6">
              <div className="inline-flex items-center justify-center p-2 bg-secondary/10 rounded-full">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
              <div className="w-20 h-1 bg-accent rounded-full" />
              <p className="text-xl md:text-2xl font-semibold leading-relaxed text-foreground">
                To join hands in India's growth and make technology the bridge that brings everyone along
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We see technology as a helping hand that lifts people up — blending India's spirit of unity with innovation that drives growth for all.
              </p>
            </div>
          </Card>

          {/* Mission */}
          <Card className="p-8 md:p-10 shadow-card hover:shadow-soft transition-smooth border-2 border-accent/20 animate-fade-in overflow-hidden relative" style={{ animationDelay: '100ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-secondary/5" />
            <div className="relative space-y-6">
              <div className="inline-flex items-center justify-center p-2 bg-accent/10 rounded-full">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <div className="w-20 h-1 bg-secondary rounded-full" />
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-soft transition-smooth border-2 hover:border-accent/30 border-muted animate-fade-in overflow-hidden relative"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 opacity-50" />
                  <CardContent className="relative p-8 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center group-hover:scale-110 transition-smooth shadow-soft">
                      <Icon className="h-7 w-7 text-secondary-foreground" />
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
