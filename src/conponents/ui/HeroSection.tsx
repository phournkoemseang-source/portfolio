import { motion } from "framer-motion";
import { ArrowDown, MapPin, GraduationCap } from "lucide-react";
import profileImg from "../../assets/seang-pro.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-accent/40" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-primary/30" />

      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Koemseang</span>
              <br />
              <span className="text-foreground/80">PHEOURN</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-4 leading-relaxed">
              A passionate <span className="text-primary font-semibold">Web Developer</span> &{" "}
              <span className="text-primary font-semibold">IT Student</span> crafting modern,
              user-centric digital experiences from Cambodia.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-primary" /> Phnom Penh, Cambodia</span>
              <span className="flex items-center gap-1.5"><GraduationCap size={14} className="text-primary" /> PNC Student</span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a
                href="#about"
                className="px-8 py-3.5 border border-border rounded-full font-medium text-foreground hover:border-primary hover:text-primary transition-all hover:-translate-y-0.5"
              >
                About Me
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Ring decorations */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-accent/10 animate-[spin_30s_linear_infinite_reverse]" />
              
              <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-card shadow-2xl shadow-primary/10">
                <img
                  src={profileImg}
                  alt="Koemseang Phoeurn"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-1/4 glass rounded-xl px-3 py-2 shadow-lg"
              >
                <span className="text-xs font-mono text-primary">&lt;/&gt; Vue.js</span>
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -left-4 bottom-1/4 glass rounded-xl px-3 py-2 shadow-lg"
              >
                <span className="text-xs font-mono text-accent">✦ Design</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16 pb-8"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
