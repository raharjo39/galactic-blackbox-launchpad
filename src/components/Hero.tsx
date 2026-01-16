import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import GeometricBackground from "./GeometricBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Geometric Background */}
      <GeometricBackground />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-ultra text-foreground mb-12"
          >
            GALACTIC BLACKBOX
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="default" size="lg" className="min-w-[160px] tracking-wide">
              Learn More
            </Button>
            <Button variant="outline" size="lg" className="min-w-[160px] tracking-wide">
              Partner with Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
