import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import projectRental from "../../assets/rental-project.png";
import projectMusic from "../../assets/music-project.png";
import projectShopping from "../../assets/shopping-project.png";
import projectNekmak from "../../assets/nekmak.png";

const projects = [
  {
    title: "NekMak Restaurant",
    description: "A simple and luxurious dining platform where users can browse menus, order food online, and book tables for special dates or events. Built with a focus on premium aesthetics and smooth performance.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Firebase"],
    image: projectNekmak,
    color: "from-primary/10 to-accent/10",
    github: "https://github.com/phournkoemseang-source/NekMak_Restaurant.git",
    live: "https://seang12.web.app/",
  },
  {
    title: "Service Rental Vehicles",
    description: "A web platform that allows users to rent motorbikes, bicycles, and cars. Users can search for nearby rental shops, select rental duration, and book instantly. Built with Vue.js frontend and Laravel backend.",
    tags: ["Vue.js", "Laravel", "PHP", "MySQL", "AWS"],
    image: projectRental,
    color: "from-primary/10 to-accent/10",
    github: "https://github.com/deth2026/Rental_Service.git",
    live: "https://chongchoul.online/",
  },

  {
    title: "Music Player App",
    description: "A Music App with role-based access where users can play, pause, and upload their own songs. Features automatic random song selection and letter-based song search.",
    tags: ["HTML", "CSS", "Bootstrap 5", "SweetAlert2", "JavaScript"],
    image: projectMusic,
    color: "from-accent/10 to-primary/10",
    github: "https://github.com/Rathana-061/Music_Player",
    live: "",
  },

  {
    title: "Online Shopping (E-commerce)",
    description: "An e-commerce platform with a static website where users can browse products by category. Built with a clean, user-friendly interface for an intuitive shopping experience.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub", "Vercel"],
    image: projectShopping,
    color: "from-accent/10 to-primary/10",
    github: "https://github.com/koemseang/final-project.git",
    live: "https://project-web-livid.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/30 relative overflow-hidden" ref={ref}>
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/3 blur-3xl" />
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-widest uppercase">My Work</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Real projects I've built during my studies at PNC, showcasing my skills in web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group glass rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center cursor-pointer hover:bg-card transition-colors">
                        <Code2 size={14} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center cursor-pointer hover:bg-card transition-colors">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
