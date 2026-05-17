import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type ProjectExperience = {
  title: string;
  role: string;
  date: string;
  points: string[];
};

const projectExperiences: ProjectExperience[] = [
  {
    title: "NekMak Restaurant",
    role: "Position: Full-stack Developer",
    date: "May 01, 2026",
    points: [
      "Developed a simple yet luxurious premium dining website with a dark aesthetic, optimized for a high-end user experience.",
      "Implemented core features including an interactive food ordering system and a table reservation module for dating and special events.",
      "Integrated Firebase for real-time data management, handling order submissions and booking requests seamlessly.",
      "Built a fully responsive frontend using Vanilla JavaScript, HTML5, and Tailwind CSS for modern styling and smooth animations.",
      "Deployed and managed the application using Firebase Hosting and GitHub for version control.",
      "Technologies: HTML5, CSS3, JavaScript, Tailwind CSS, Firebase.",
      "Tools: GitHub, Firebase, VS Code.",
    ],
  },
  {
    title: "Service Rental Vehicles - VC1 Project",
    role: "Position: Developer",
    date: "Feb 15 - April 02, 2026",
    points: [
      "Developed a web platform for vehicle rental (motorbikes, bicycles, and cars) enabling users to search nearby shops, view available vehicles, select rental duration, and book instantly.",
      "Contributed to frontend development using Vue.js, backend with Laravel, and MySQL database integration.",
      "Collaborated efficiently using Jira, GitHub, and AI tools; assisted in UX/UI design and deployed the application on AWS.",
      "Technologies: Vue.js, Laravel, PHP, MySQL, JavaScript, HTML, CSS.",
      "Tools: Jira, GitHub, AWS.",
    ],
  },
  {
    title: "Music Player",
    role: "Position: Front-End Developer",
    date: "Dec 22, 2025 - Jan 04, 2026",
    points: [
      "Developed a responsive music web app with user authentication and role-based access.",
      "Implemented core features including play/pause, next/previous, song upload, and real-time search that auto-suggests songs while typing.",
      "Built frontend using JavaScript integrated Firebase and LocalStorage for smooth functionality.",
      "Collaborated using Jira, GitHub, and Figma; deployed on Vercel.",
      "Technologies: HTML, CSS, Bootstrap 5, JavaScript, Firebase.",
    ],
  },
  {
    title: "Online Shopping (E-commerce)",
    role: "Position: Frontend Developer",
    date: "Sep 02 - Oct 09, 2025",
    points: [
      "Developed an e-commerce platform with static website: users can only view and click for category that user love and they want to buy.",
      "Contributed to frontend HTML, CSS with less JavaScript.",
      "Applied tools (GitHub, Figma, Vercel) for version control, design, deploy the result.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase mb-4">Projects Experiences</h2>
          <div className="w-full h-px bg-border mb-8" />

          <div className="relative pl-6 md:pl-8">
            <div className="absolute left-1.5 top-2 bottom-2 w-px bg-primary/50" />

            {projectExperiences.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className={i === projectExperiences.length - 1 ? "relative" : "relative mb-10"}
              >
                <span className="absolute -left-[22px] top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                  <span className="text-sm md:text-base text-foreground/80">{item.date}</span>
                </div>

                <p className="text-lg text-foreground/90 mb-3">{item.role}</p>

                <ul className="space-y-2 text-muted-foreground">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-primary mt-[2px]">*</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
