import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import founderImg from "@/assets/founder.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative container-tight px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8"
            >
              <span className="w-2 h-2 rounded-full gradient-blue-purple" />
              AI-Powered Digital Transformation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              Transform Your Startup Into an{" "}
              <span className="gradient-text">AI-Powered</span> Growth Machine.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg"
            >
              We design intelligent automation systems and AI-powered digital
              infrastructure that help modern startups scale faster with less
              manual effort.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 gradient-blue-purple rounded-full px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow-blue"
              >
                Book Free Strategy Call
                <ArrowRight size={16} />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 glass gradient-border rounded-full px-8 py-3.5 text-sm font-medium text-foreground hover:bg-secondary/50 transition-colors"
              >
                Explore Our Solutions
              </a>
            </motion.div>
          </div>

          {/* Founder Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-1 gradient-blue-purple rounded-2xl opacity-20 blur-xl" />
              <div className="relative glass-strong rounded-2xl p-6 max-w-xs">
                <img
                  src={founderImg}
                  alt="Harsh Tiwari, Founder & CEO of DigitallyU"
                  className="w-full aspect-square object-cover rounded-xl mb-4"
                  loading="eager"
                />
                <h3 className="text-lg font-semibold">Harsh Tiwari</h3>
                <p className="text-sm text-muted-foreground">
                  Founder & CEO, DigitallyU
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <ChevronDown size={16} className="text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
