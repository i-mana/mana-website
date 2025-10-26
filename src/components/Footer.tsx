import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 text-foreground py-16 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
              MANA
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              MANA
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#mission" className="hover:text-primary transition-smooth">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#values" className="hover:text-primary transition-smooth">
                  Core Values
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-smooth">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:contact@mana.org" className="hover:text-primary transition-smooth">
                  contact@mana.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+91 XXX XXX XXXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MANA. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Building India's digital future, together.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
