import { motion } from "framer-motion";

const Problem = () => {
  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-wide mb-8">
            About
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            <strong className="text-foreground">Galactic BlackBox™</strong> is a remote vessel monitoring and surveillance platform designed to ensure your maritime operations remain visible and well-documented at all times.
          </p>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Galactic BlackBox integrates video, operational, and telemetry data into a unified view to support real-time monitoring, early event detection, and complete documentation for audit and security needs.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Designed with the principles of <strong className="text-foreground">simplicity, reliability, and always-on operation</strong>, Galactic BlackBox helps management make data-driven decisions without adding operational complexity.
          </p>
          
          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            <span className="px-4 py-2 text-sm tracking-wide border border-primary/30 text-primary rounded-full">
              Starlink Powered
            </span>
            <span className="px-4 py-2 text-sm tracking-wide border border-primary/30 text-primary rounded-full">
              Real-time Monitoring
            </span>
            <span className="px-4 py-2 text-sm tracking-wide border border-primary/30 text-primary rounded-full">
              Cloud Storage
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
