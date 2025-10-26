import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(40 35% 92%), hsl(25 40% 88%), hsl(215 35% 85%))' }}>
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground drop-shadow-sm">
              MANA
            </h3>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3 text-sm sm:text-base text-foreground/70">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <a href="mailto:contact@mana.org" className="hover:text-primary transition-smooth break-all">
                  contact@mana.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>+91 XXX XXX XXXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-foreground/10 text-center text-sm sm:text-base text-foreground/60">
          <p>&copy; {new Date().getFullYear()} MANA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
