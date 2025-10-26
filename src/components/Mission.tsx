import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-accent/10 rounded-full mb-4">
            <Sparkles className="h-6 w-6 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Mission</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <Card className="p-8 md:p-12 shadow-card hover:shadow-soft transition-smooth gradient-card border-2">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-2xl md:text-3xl font-semibold leading-relaxed text-foreground">
              To empower India's growth through inclusive and innovative technology for all
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Mission;
