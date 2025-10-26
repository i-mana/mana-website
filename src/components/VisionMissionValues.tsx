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
          <Card className="p-1 shadow-lg hover:shadow-xl transition-smooth animate-fade-in overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-primary opacity-20" />
            <div className="absolute inset-[2px] bg-background rounded-lg" />
            <div className="relative p-8 md:p-10 space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full border-2 border-secondary/30">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Our Vision</h2>
              <div className="flex gap-1">
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-accent rounded-full" />
                <div className="w-4 h-1 bg-accent/50 rounded-full" />
              </div>
              <p className="text-xl md:text-2xl font-semibold leading-relaxed text-foreground">
                To join hands in India's growth and make technology the bridge that brings everyone along
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We see technology as a helping hand that lifts people up — blending India's spirit of unity with innovation that drives growth for all.
              </p>
            </div>
          </Card>

          {/* Mission */}
          <Card className="p-1 shadow-lg hover:shadow-xl transition-smooth animate-fade-in overflow-hidden relative group" style={{ animationDelay: '100ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-secondary opacity-20" />
            <div className="absolute inset-[2px] bg-background rounded-lg" />
            <div className="relative p-8 md:p-10 space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full border-2 border-accent/30">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Our Mission</h2>
              <div className="flex gap-1">
                <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
                <div className="w-4 h-1 bg-primary/50 rounded-full" />
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className="p-1 group hover:shadow-xl transition-smooth animate-fade-in overflow-hidden relative"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10 group-hover:opacity-20 transition-smooth" />
                  <div className="absolute inset-[1px] bg-background rounded-lg" />
                  <CardContent className="relative p-8 space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary via-accent to-primary p-[2px] group-hover:scale-110 transition-smooth shadow-lg">
                      <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                        <Icon className="h-7 w-7 text-secondary" />
                      </div>
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
