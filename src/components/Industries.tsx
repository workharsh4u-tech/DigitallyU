import { motion } from "framer-motion";
import { Rocket, Cloud, BookOpen, TrendingUp, Zap } from "lucide-react";

const industries = [
  { icon: Rocket, label: "Tech Startups" },
  { icon: Cloud, label: "SaaS Companies" },
  { icon: BookOpen, label: "EdTech Platforms" },
  { icon: TrendingUp, label: "Growth-Stage Businesses" },
  { icon: Zap, label: "Digital-First Enterprises" },
];

const Industries = () => {
  return (
    <section id="industries" className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
            Industries
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-2xl px-6 py-5 flex items-center gap-3 hover:bg-secondary/30 transition-colors duration-300"
            >
              <ind.icon size={20} className="text-primary" />
              <span className="text-sm font-medium">{ind.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
