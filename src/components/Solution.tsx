import { motion } from "framer-motion";
import { Satellite, Cloud, Shield, Zap, Globe, Lock } from "lucide-react";
import systemDiagram from "@/assets/system-diagram.jpg";

const Solution = () => {
  const services = [
    {
      number: "01",
      icon: Satellite,
      title: "Starlink Integration",
      description: "Always-on satellite connectivity ensuring your operations remain visible from anywhere in the world.",
      features: ["Real-time Connectivity", "Global Coverage", "Low Latency", "Automatic Failover"]
    },
    {
      number: "02",
      icon: Cloud,
      title: "Cloud-Based Storage",
      description: "Secure cloud storage ensures every second of footage is preserved and accessible anytime.",
      features: ["Automatic Backup", "Secure Encryption", "Easy Access", "Long-term Archive"]
    },
    {
      number: "03",
      icon: Shield,
      title: "AI-Driven Surveillance",
      description: "Smart detection and automated alerts powered by advanced machine learning.",
      features: ["Anomaly Detection", "Smart Alerts", "Pattern Recognition", "Predictive Analysis"]
    },
    {
      number: "04",
      icon: Zap,
      title: "SD-WAN Technology",
      description: "Advanced networking technology ensuring optimal bandwidth and failover protection.",
      features: ["Bandwidth Optimization", "Traffic Management", "Redundancy", "QoS Control"]
    },
    {
      number: "05",
      icon: Globe,
      title: "Fleet Management",
      description: "Monitor your entire fleet from anywhere with comprehensive real-time dashboards.",
      features: ["Centralized Dashboard", "Multi-vessel View", "Historical Data", "Custom Reports"]
    },
    {
      number: "06",
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with international maritime standards.",
      features: ["End-to-end Encryption", "Compliance Ready", "Access Control", "Audit Logs"]
    }
  ];

  return (
    <section className="py-24 bg-secondary/30" id="services">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-wide mb-4">
            SERVICES
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid lg:grid-cols-2 gap-8 items-start"
            >
              <div>
                <div className="flex items-start gap-6 mb-6">
                  <span className="font-display text-4xl font-light text-primary/60">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium mb-3 tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2 pl-16">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="text-sm text-muted-foreground before:content-['•'] before:mr-2 before:text-primary"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {index === 0 && (
                <div className="hidden lg:block">
                  <img
                    src={systemDiagram}
                    alt="System Architecture"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
