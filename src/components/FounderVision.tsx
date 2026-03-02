import { motion } from "framer-motion";
import founderImg from "@/assets/founder.jpg";

const FounderVision = () => {
  return (
    <section id="founder" className="section-padding">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 gradient-blue-purple rounded-3xl opacity-10 blur-2xl" />
            <img
              src={founderImg}
              alt="Harsh Tiwari, Founder & CEO of DigitallyU"
              className="relative w-full max-w-md mx-auto aspect-[4/5] object-cover rounded-2xl"
              loading="lazy"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              Founder's Vision
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Building the Digital Infrastructure of{" "}
              <span className="gradient-text">Tomorrow's Businesses</span>.
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Harsh Tiwari founded DigitallyU to help startups unlock scalable
              growth through AI-powered digital transformation. The mission is
              to eliminate operational inefficiencies and build intelligent
              systems that empower founders to focus on innovation and expansion.
            </p>

            <div className="flex items-center gap-4">
              <div>
                <p className="font-semibold">Harsh Tiwari</p>
                <p className="text-sm text-muted-foreground">
                  Founder & CEO, DigitallyU
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderVision;
