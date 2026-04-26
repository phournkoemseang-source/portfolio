import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "Pursuing Associate Degree in IT",
    company: "Passerelles Numériques Cambodia (PNC)",
    period: "2025 – Present",
    description: "Full-time IT program focusing on software development, networking, and professional skills. Developing technical and soft skills to build a career in IT industry and digital fields.",
    tags: ["Full Stack", "Networking", "Professional Skills"],
  },
  {
    title: "Graduate – High School",
    company: "Hun Sen Phnom Kravanh High School",
    period: "2021 – 2024",
    description: "Completed high school education in Pursat Province, building a strong academic foundation before transitioning into IT studies.",
    tags: ["Education", "Foundation"],
  },
  {
    title: "Developer – Service Rental Vehicles (VC1 Project)",
    company: "Team Project at PNC",
    period: "Dec 22, 2025 – Jan 04, 2026",
    description: "Developed a Vehicle Rental Service App allowing users to rent motorbikes, bicycles, and cars. Contributed to frontend (Vue.js), backend (Laravel), and MySQL database integration. Used Jira, GitHub for task management and version control.",
    tags: ["Vue.js", "Laravel", "PHP", "MySQL", "Jira"],
  },
   
  {
    title: "Front-End Developer – Music Player",
    company: "Team Project at PNC",
    period: "Dec 22, 2025 – Jan 04, 2026",
    description: "Developed a Music App with role-based access where users can play, pause, upload songs, and discover random tracks. Integrated Firebase and LocalStorage for data management.",
    tags: ["HTML", "CSS", "Bootstrap 5", "JavaScript", "Firebase"],
  },

  {
    title: "Frontend Developer – Online Shopping (E-commerce)",
    company: "Team Project at PNC",
    period: "Sep 02 – Oct 09, 2025",
    description: "Developed an e-commerce platform with a static website where users can view and click on product categories. Contributed to frontend using HTML, CSS with JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub", "Figma"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-widest uppercase">My Journey</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1.5 mt-2 z-10" />

              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-0 md:mr-auto" : "md:pl-0 md:ml-auto"}`}>
                <div className="glass rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{exp.title}</h3>
                  <p className="text-sm text-primary/80 font-medium mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
