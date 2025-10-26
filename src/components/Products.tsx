import { Card } from "@/components/ui/card";
import { Clapperboard, DollarSign, Building2 } from "lucide-react";

const products = [
  {
    name: "CinemaSurvey",
    description: "Revolutionary cinema feedback platform transforming audience insights into actionable data for the entertainment industry.",
    icon: Clapperboard,
    gradient: "from-primary/20 via-accent/10 to-background",
  },
  {
    name: "ChanakyAI",
    description: "Intelligent AI-powered assistant bringing ancient wisdom and modern technology together for strategic decision-making.",
    icon: DollarSign,
    gradient: "from-accent/20 via-primary/10 to-background",
  },
  {
    name: "Realytics",
    description: "Advanced real-time analytics platform delivering powerful insights and data visualization for informed real estate investment decisions.",
    icon: Building2,
    gradient: "from-primary/20 via-secondary/10 to-background",
  },
];

const Products = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Products
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Innovative solutions designed to empower businesses and individuals with cutting-edge technology
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.name}
                className={`group p-6 gradient-card border-2 card-framed transition-all duration-500 hover:shadow-soft hover:-translate-y-2 animate-fade-in cursor-pointer`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center group-hover:scale-110 transition-smooth shadow-soft">
                    <Icon className="h-7 w-7 text-secondary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {product.description}
                </p>

                {/* Decorative bottom line */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent transition-all duration-700 rounded-full" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
