import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { toast } from "sonner";

const StrategyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    revenue: "",
    automate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({ name: "", company: "", email: "", revenue: "", automate: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all";

  return (
    <section id="contact" className="section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              Get Started
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your Free <span className="gradient-text">Strategy Call</span>
            </h2>
            <p className="text-muted-foreground">
              Tell us about your startup and we'll craft a custom AI transformation roadmap.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 gradient-blue-purple rounded-3xl opacity-10 blur-xl" />
            <form
              onSubmit={handleSubmit}
              className="relative glass-strong rounded-2xl p-6 md:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  maxLength={100}
                  className={inputClass}
                />
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  required
                  maxLength={100}
                  className={inputClass}
                />
              </div>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                maxLength={255}
                className={inputClass}
              />
              <select
                name="revenue"
                value={formData.revenue}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="" disabled>
                  Current Revenue Stage
                </option>
                <option value="pre-revenue">Pre-Revenue</option>
                <option value="0-10k">$0 – $10K/mo</option>
                <option value="10k-50k">$10K – $50K/mo</option>
                <option value="50k-100k">$50K – $100K/mo</option>
                <option value="100k+">$100K+/mo</option>
              </select>
              <input
                name="automate"
                value={formData.automate}
                onChange={handleChange}
                placeholder="What would you like to automate?"
                maxLength={200}
                className={inputClass}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your goals..."
                rows={4}
                maxLength={1000}
                className={inputClass + " resize-none"}
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 gradient-blue-purple rounded-xl px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow-blue"
              >
                <Send size={16} />
                Submit & Book Call
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategyForm;
