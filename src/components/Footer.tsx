import { Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "#founder" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "AI Chatbots", href: "#solutions" },
    { label: "WhatsApp Automation", href: "#solutions" },
    { label: "AI Dashboards", href: "#solutions" },
    { label: "Custom AI Tools", href: "#solutions" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border/50 pt-16 pb-8 px-6">
      <div className="container-tight">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-xl font-bold tracking-tight">
              Digitally<span className="gradient-text">U</span>
            </a>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              AI-Powered Digital Transformation for modern startups.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DigitallyU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
