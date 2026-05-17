import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import blackboxImg from "../../assets/blackbox.jpg";
import canvaImg from "../../assets/canva.jpg";
import claudeImg from "../../assets/claude.jpg";
import copilotImg from "../../assets/copilot.jpg";
import cssImg from "../../assets/css.jpg";
import dbmsImg from "../../assets/dbms.jpg";
import deepseekImg from "../../assets/deepseek.jpg";
import dockerImg from "../../assets/docker.jpg";
import drawIoImg from "../../assets/draw.io.jpg";
import figmaImg from "../../assets/figma.jpg";
import gitImg from "../../assets/git.jpg";
import gptImg from "../../assets/gpt.jpg";
import grokImg from "../../assets/grok.jpg";
import htmlImg from "../../assets/html.jpg";
import jiraImg from "../../assets/jira.jpg";
import jsImg from "../../assets/js-1.jpg";
import laravelImg from "../../assets/laravel.jpg";
import lovableImg from "../../assets/lovable.jpg";
import mongodbImg from "../../assets/mongodb.png";
import mysqlImg from "../../assets/mysql.jpg";
import nodeImg from "../../assets/node.jpg";
import phpImg from "../../assets/php.jpg";
import postmanImg from "../../assets/postman.jpg";
import powerbiImg from "../../assets/powerbi.png";
import pythonImg from "../../assets/python-1.jpg";
import typescriptImg from "../../assets/typescript-1.jpg";
import wordpressImg from "../../assets/wordpress.jpg";

type SkillItem = {
  name: string;
  image?: string;
};

type SkillGroup = {
  title: string;
  items: SkillItem[];
};

const techSkillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: [
      { name: "JavaScript", image: jsImg },
      { name: "TypeScript", image: typescriptImg },
      { name: "PHP", image: phpImg },
      { name: "Python", image: pythonImg },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { name: "HTML", image: htmlImg },
      { name: "CSS", image: cssImg },
    ],
  },
  {
    title: "Backend & Frameworks",
    items: [
      { name: "Node.js", image: nodeImg },
      { name: "Laravel", image: laravelImg },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", image: mysqlImg },
      { name: "MongoDB", image: mongodbImg },
      { name: "Database Management Systems (RDBMS)", image: dbmsImg },
    ],
  },
];

const toolGroups: SkillGroup[] = [
  {
    title: "Development, DevOps & CMS",
    items: [
      { name: "GitHub", image: gitImg },
      { name: "Docker", image: dockerImg },
      { name: "Postman", image: postmanImg },
      { name: "WordPress", image: wordpressImg },
    ],
  },
  {
    title: "Data Analysis",
    items: [
      { name: "Power BI", image: powerbiImg },
    ],
  },
  {
    title: "Design & Collaboration",
    items: [
      { name: "Jira", image: jiraImg },
      { name: "Figma", image: figmaImg },
      { name: "Canva", image: canvaImg },
      { name: "Draw.io", image: drawIoImg },
    ],
  },
];

const aiTools: SkillItem[] = [
  { name: "ChatGPT", image: gptImg },
  { name: "Claude", image: claudeImg },
  { name: "GitHub Copilot", image: copilotImg },
  { name: "Grok", image: grokImg },
  { name: "DeepSeek AI", image: deepseekImg },
  { name: "Lovable", image: lovableImg },
  { name: "Blackbox", image: blackboxImg },
];

const softSkills = [
  "Leadership",
  "Teamwork",
  "Critical Thinking",
  "Time Management",
  "Project Management",
  "Effective Communication",
  "Adaptability",
  "Self Motivation",
  "Responsibility",
  "Respect",
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
            Skills & <span className="text-gradient">Tools</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Organized by category to highlight my core programming skills, professional tools, and AI assistants.
          </p>
        </motion.div>

        <div className="grid xl:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              Tech Skills
            </h3>
            <div className="space-y-6">
              {techSkillGroups.map((group, groupIndex) => (
                <div key={group.title}>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">{group.title}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {group.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 12 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 + groupIndex * 0.12 + itemIndex * 0.05 }}
                        className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/70 p-3"
                      >
                        <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover border border-border/60" />
                        <span className="text-sm font-medium leading-snug">{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-accent" />
                Tools
              </h3>
              <div className="space-y-6">
                {toolGroups.map((group, groupIndex) => (
                  <div key={group.title}>
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">{group.title}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {group.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, y: 12 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.3 + groupIndex * 0.12 + itemIndex * 0.05 }}
                          className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/70 p-3"
                        >
                          <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover border border-border/60" />
                          <span className="text-sm font-medium">{item.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary" />
                AI Tools
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {aiTools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/70 p-3"
                  >
                    {tool.image ? (
                      <img src={tool.image} alt={tool.name} className="w-10 h-10 rounded-lg object-cover border border-border/60" />
                    ) : (
                      <div className="w-10 h-10 rounded-lg border border-border/60 bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground">
                        AI
                      </div>
                    )}
                    <span className="text-sm font-medium">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 glass rounded-2xl p-6"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-primary" />
            Soft Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.04 }}
                className="rounded-xl border border-border/60 bg-card/70 px-3 py-2 text-center text-sm"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
