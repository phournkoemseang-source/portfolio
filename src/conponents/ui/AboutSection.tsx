import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Heart, Coffee } from "lucide-react";

const facts = [
  { icon: MapPin, label: "From", value: "Pursat Province, Cambodia" },
  { icon: GraduationCap, label: "Studying", value: "Associate Degree at PNC" },
  { icon: Coffee, label: "Languages", value: "Khmer & English" },
  { icon: Heart, label: "Passion", value: "Web Development" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/3 blur-3xl" />
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-widest uppercase">Get to Know</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-8 mb-10"
          >
            <div className="glass rounded-2xl px-6 py-4 text-center">
              <p className="text-2xl font-bold text-primary">10+</p>
              <p className="text-xs text-muted-foreground">Workshops</p>
            </div>
            <div className="glass rounded-2xl px-6 py-4 text-center">
              <p className="text-2xl font-bold text-accent">4+</p>
              <p className="text-xs text-muted-foreground">Projects</p>
            </div>
            <div className="glass rounded-2xl px-6 py-4 text-center">
              <p className="text-2xl font-bold text-primary">5+</p>
              <p className="text-xs text-muted-foreground">Volunteering</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I'm <span className="font-semibold text-primary">Koemseang PHOEURN</span>, a Khmer national born on July 14th, 2006 in{" "}
              <span className="font-semibold">Pursat Province</span>. I graduated from Hun Sen Phnom Kravanh High School 
              in 2024 and I'm currently pursuing my Associate Degree at{" "}
              <span className="font-semibold">Passerelles Numériques Cambodia (PNC)</span> (2025–2026).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Through this program, I'm developing technical and soft skills to build a career in the IT industry 
              and digital fields. I specialize in front-end and full-stack web development using Vue.js, React, 
              JavaScript, PHP, and modern frameworks like Laravel.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm passionate about coding, reading books, and continuously developing my language skills. 
              I actively attend workshops and collaborate with teams using tools like Jira, GitHub, Figma, 
              and AI-powered development tools.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {facts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50"
                >
                  <fact.icon size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{fact.label}</p>
                    <p className="text-sm font-medium text-foreground">{fact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        </div>
    </section>
  );
};

export default AboutSection;
