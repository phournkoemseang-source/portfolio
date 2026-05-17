import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/3 blur-3xl" />

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase mb-4">Profile</h2>
          <div className="w-full h-px bg-border mb-5" />
          <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
            I&apos;m Koemseang PHOEURN, a Khmer national born in July 14th, 2006 in Pursat Province.
            Web Developer with experience building full-stack applications. Delivered four real-world
            projects including a premium dining website (NekMak Restaurant), a vehicle rental platform, and an e-commerce site demonstrating the ability
            to ship production ready code. Passionate about creating clean, user-friendly digital solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
