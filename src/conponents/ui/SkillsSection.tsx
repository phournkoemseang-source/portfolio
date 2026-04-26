import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technicalSkills = [
  { name: "HTML & CSS", level: 90, color: "bg-primary" },
  { name: "JavaScript", level: 80, color: "bg-accent" },
  { name: "Vue.js", level: 78, color: "bg-primary" },
  { name: "PHP / Laravel", level: 72, color: "bg-accent" },
  { name: "SASS", level: 75, color: "bg-primary" },
  { name: "MySQL / Database", level: 70, color: "bg-accent" },
  { name: "Python (Algorithm)", level: 60, color: "bg-primary" },
  { name: "WordPress", level: 65, color: "bg-accent" },
];

const tools = [
  "Jira", "GitHub", "AWS", "Figma", "Postman", "Draw.io", "Canva",
  "VS Code", "Vercel", "Firebase", "Docker", "Linux",
  "ChatGPT", "Claude.ai", "Lovable.dev", "Blackbox AI", "DeepSeek",
];

const softSkills = [
  "Leadership", "Teamwork", "Critical Thinking",
  "Time Management", "Project Management", "Effective Communication",
  "Adaptability", "Self Motivation", "Responsibility", "Respect",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/3 blur-3xl" />
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-widest uppercase">What I Know</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              Technical Skills
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm font-mono text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent" />
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-card border border-border/50"
                >
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-sm">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
