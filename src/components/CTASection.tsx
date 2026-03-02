import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 gradient-blue-purple opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60" />

          <div className="relative text-center py-20 md:py-28 px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Digitally Transform{" "}
              <span className="gradient-text">Your Startup</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Let's build your AI-powered growth system.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 gradient-blue-purple rounded-full px-8 py-4 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow-blue"
            >
              Book Free Strategy Call
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
