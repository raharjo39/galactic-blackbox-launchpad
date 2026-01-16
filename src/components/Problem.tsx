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
            <strong className="text-foreground">Galactic BlackBox™</strong> adalah platform pemantauan dan surveilans kapal jarak jauh yang dirancang untuk memastikan operasi maritim Anda selalu terlihat dan terdokumentasi dengan baik.
          </p>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Galactic BlackBox mengintegrasikan data video, operasional, dan telemetri ke dalam satu tampilan terpadu untuk mendukung pemantauan real-time, deteksi dini kejadian, serta dokumentasi lengkap untuk kebutuhan audit dan keamanan.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Dirancang dengan prinsip <strong className="text-foreground">sederhana, handal, dan selalu aktif</strong>, Galactic BlackBox membantu manajemen mengambil keputusan berbasis data tanpa menambah kompleksitas operasional.
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
