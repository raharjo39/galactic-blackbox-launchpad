import galacticLogo from "@/assets/galactic-logo.jpg";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={galacticLogo} alt="Galactic" className="h-8 w-auto" />
            <div className="flex flex-col">
              <span className="font-display font-semibold text-lg tracking-wide">
                GALACTIC
              </span>
              <span className="text-xs text-muted-foreground">
                PT Galactic Indonesia Perkasa
              </span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Galactic Indonesia Perkasa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
