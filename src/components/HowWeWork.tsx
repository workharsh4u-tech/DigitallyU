import { motion } from "framer-motion";
import { Search, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Strategy & System Audit",
    desc: "We analyze your current operations, identify bottlenecks, and map opportunities for AI-driven optimization.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Architecture & Automation Design",
    desc: "Our team architects custom AI solutions and automation workflows tailored to your growth objectives.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deployment, Integration & Optimization",
    desc: "We deploy, integrate with your existing stack, and continuously optimize for maximum performance.",
  },
];

const HowWeWork = () => {
  return (
    <section id="process" className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            How We <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-14 h-14 rounded-2xl glass gradient-border mx-auto mb-6 flex items-center justify-center">
                <step.icon size={24} className="text-primary" />
              </div>
              <span className="text-xs font-mono text-primary mb-2 block">
                Step {step.step}
              </span>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
