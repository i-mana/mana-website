import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, Shield, Handshake, Leaf } from "lucide-react";

const values = [
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

const CoreValues = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Values</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-soft transition-smooth border-2 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center group-hover:scale-110 transition-smooth shadow-soft">
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

        <div className="text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
          <p className="text-2xl font-semibold text-primary">
            Empowering People. Inspiring Progress. Building India Together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
