import { Heart, Mail, Phone, Link2 } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/20">
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <a href="#" className="font-heading text-2xl font-bold text-primary">
            KP<span className="text-accent">.</span>
          </a>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Web Developer focused on clean, user-friendly digital solutions.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wider uppercase mb-3">Quick Links</h3>
          <div className="space-y-2 text-sm">
            <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wider uppercase mb-3">Contact Me</h3>
          <div className="space-y-2 text-sm">
            <a href="mailto:phournkoemseang@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail size={15} />
              phournkoemseang@gmail.com
            </a>
            <a href="tel:+85531232668" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone size={15} />
              (+855) 31-232-6668
            </a>
            <a href="https://github.com/phournkoemseang-source" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Link2 size={15} />
              github.com/phournkoemseang-source
            </a>
          </div>
        </div>
      </div>

      <div className="pt-5 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          &copy; {new Date().getFullYear()} Koemseang PHOEURN. Built with <Heart size={12} className="text-primary" /> in Cambodia.
        </p>
        <a href="#contact" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          Let&apos;s Connect
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

