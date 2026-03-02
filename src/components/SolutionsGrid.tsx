import { motion } from "framer-motion";
import {
  MessageSquare,
  Smartphone,
  Wrench,
  BarChart3,
  Layers,
  Globe,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "AI Chatbot Development",
    desc: "Intelligent conversational agents that handle customer queries, qualify leads, and automate support 24/7.",
  },
  {
    icon: Smartphone,
    title: "WhatsApp Automation Systems",
    desc: "End-to-end WhatsApp business automation for lead nurturing, notifications, and customer engagement.",
  },
  {
    icon: Wrench,
    title: "Custom AI Tools",
    desc: "Bespoke AI-powered tools tailored to your unique business workflows and operational requirements.",
  },
  {
    icon: BarChart3,
    title: "AI Dashboard & Analytics",
    desc: "Real-time intelligent dashboards that surface actionable insights and drive data-informed decisions.",
  },
  {
    icon: Layers,
    title: "Mini ERP Systems",
    desc: "Lightweight enterprise resource planning systems designed for agile startups and growing businesses.",
  },
  {
    icon: Globe,
    title: "Website + AI Integration",
    desc: "Modern web platforms with embedded AI capabilities for personalization, search, and automation.",
  },
  {
    icon: GraduationCap,
    title: "Admission Automation",
    desc: "Complete admission funnel automation for EdTech startups — from inquiry to enrollment.",
  },
];

const SolutionsGrid = () => {
  return (
    <section id="solutions" className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
            Our Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Solutions Built for <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From automation to analytics, we build the intelligent systems your startup needs to grow.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group glass rounded-2xl p-6 hover:bg-secondary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl gradient-blue-purple flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.desc}
              </p>
              <span className="text-xs font-medium text-primary group-hover:underline">
                Learn More →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;
