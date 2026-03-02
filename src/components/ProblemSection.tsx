import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const problems = [
  "Manual processes slow growth",
  "Poor workflow automation",
  "Lack of AI-driven insights",
  "Missed leads and inefficient follow-ups",
  "Scaling without digital systems",
];

const ProblemSection = () => {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8">
            <AlertTriangle size={14} className="text-primary" />
            The Problem
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12">
            Startups Don't Fail From Lack of Ideas —{" "}
            <span className="text-muted-foreground">
              They Fail From Operational Chaos.
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3 glass rounded-xl p-4"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-sm text-muted-foreground">{problem}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
