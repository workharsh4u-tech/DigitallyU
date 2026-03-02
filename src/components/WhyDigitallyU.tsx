import { motion } from "framer-motion";
import { Brain, Users, Scale, Cog, LineChart } from "lucide-react";

const reasons = [
  { icon: Brain, title: "AI-First Architecture" },
  { icon: Users, title: "Founder-Led Strategy" },
  { icon: Scale, title: "Scalable System Design" },
  { icon: Cog, title: "Automation-Focused Execution" },
  { icon: LineChart, title: "Data-Driven Optimization" },
];

const WhyDigitallyU = () => {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
            Why Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Why <span className="gradient-text">DigitallyU</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 text-center hover:bg-secondary/30 transition-colors duration-300"
            >
              <r.icon size={28} className="text-primary mx-auto mb-3" />
              <p className="text-sm font-medium leading-snug">{r.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDigitallyU;
