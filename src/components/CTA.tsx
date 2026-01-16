import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-background" id="contact">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-wide mb-8">
            Contact Us
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Ready to transform your vessel surveillance? Get in touch with our team 
            to discuss how Galactic BlackBox™ can enhance your maritime operations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button variant="default" size="lg" className="tracking-wide">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="tracking-wide">
              Schedule Demo
            </Button>
          </div>

          {/* Contact Info Grid */}
          <div className="grid sm:grid-cols-3 gap-8 pt-10 border-t border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground block mb-1">Email</span>
                <a 
                  href="mailto:sales@gip.co.id" 
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  sales@gip.co.id
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground block mb-1">Phone</span>
                <a 
                  href="tel:+6281554443241" 
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  +62 815-5444-3241
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground block mb-1">Location</span>
                <span className="text-sm font-medium">
                  Bandung, West Java, Indonesia
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
