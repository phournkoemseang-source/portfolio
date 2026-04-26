import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#" className="font-heading text-xl font-bold text-primary">
        KP<span className="text-accent">.</span>
      </a>
      <p className="text-sm text-muted-foreground flex items-center gap-1">
        © {new Date().getFullYear()} Koemseang PHOEURN. Built with <Heart size={12} className="text-primary" /> in Cambodia.
      </p>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
