import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type WorkshopExperience = {
  title: string;
  subtitle: string;
  date: string;
  highlights: string[];
};

const workshopExperiences: WorkshopExperience[] = [
  {
    title: "Full-Stack Developer Workshop",
    subtitle: "Presenter: Koemsran (Senior Software Engineer)",
    date: "March 28, 2026",
    highlights: [
      "Gained deeper knowledge in this new major and connected theory with real workplace experience.",
      "Learned more about becoming a Software Engineer with professional guidance from industry.",
      "Explored new programming languages and tools to adapt to modern technologies.",
    ],
  },
  {
    title: "Database Administration Workshop",
    subtitle: "(Database Administration at ABA)",
    date: "March 15, 2026",
    highlights: [
      "Gained practical database administration (DBA) knowledge including management, security, maintenance, and backup.",
      "Learned from industry professionals in banking about large-scale critical data systems and daily responsibilities.",
      "Strengthened career preparation for data infrastructure and database roles.",
    ],
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass rounded-2xl p-6 md:p-8 lg:p-10">
            <p className="text-sm font-mono tracking-widest uppercase text-primary mb-3">Learning Journey</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">Workshop Experiences</h2>
            <p className="text-muted-foreground mb-8 md:mb-10">
              Hands-on workshops where I learned from professionals and improved my real-world technical skills.
            </p>

            <div className="relative pl-6 md:pl-10">
              <div className="absolute left-1.5 md:left-2 top-3 bottom-3 w-px bg-primary/40" />

              {workshopExperiences.map((workshop, i) => (
                <motion.article
                  key={workshop.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className={i === workshopExperiences.length - 1 ? "relative" : "relative mb-10"}
                >
                  <span className="absolute -left-[22px] md:-left-[34px] top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-primary">{workshop.title}</h3>
                    <span className="text-sm md:text-base font-medium text-foreground/80">{workshop.date}</span>
                  </div>

                  <p className="text-base text-foreground/90 mb-3">{workshop.subtitle}</p>

                  <ul className="space-y-2 text-muted-foreground">
                    {workshop.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="text-primary mt-[2px]">*</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
