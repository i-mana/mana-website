import { Card } from "@/components/ui/card";
import { Eye } from "lucide-react";

const Vision = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Eye className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Vision</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <Card className="p-8 md:p-12 shadow-card hover:shadow-soft transition-smooth gradient-card border-2">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-2xl md:text-3xl font-semibold leading-relaxed text-foreground">
              To join hands in India's growth and make technology the bridge that brings everyone along
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision an India where technology serves as the great equalizer, connecting every citizen to opportunities and progress. Our vision is to create a digital ecosystem that honors our rich heritage while embracing innovation, ensuring no one is left behind in our nation's journey forward.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Vision;
