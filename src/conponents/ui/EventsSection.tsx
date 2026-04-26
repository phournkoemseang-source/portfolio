import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Users, Award } from "lucide-react";

const events = [
  {
    title: "Full-Stack Developer Workshop",
    type: "Workshop",
    date: "Mar 2026",
    location: "PNC Campus",
    description: "Gained knowledge about full-stack development from Koemsran (Senior Software Engineer). Learned about new languages, tools, and how to adapt to modern technologies.",
    icon: Award,
  },
  {
    title: "Barcamp Cambodia",
    type: "Conference",
    date: "2025",
    location: "Phnom Penh",
    description: "Participated in Cambodia's largest tech unconference, engaging with developers and tech enthusiasts from across the country.",
    icon: Users,
  },
  {
    title: "GDG DevFest Phnom Penh",
    type: "Workshop",
    date: "2025",
    location: "Phnom Penh",
    description: "Attended workshops on web technologies, cloud computing, and modern development practices hosted by Google Developer Group.",
    icon: Award,
  },
  {
    title: "PNC Tech Workshops",
    type: "Workshop",
    date: "2025 – Present",
    location: "PNC Campus",
    description: "Regular workshops at Passerelles Numériques Cambodia covering software development, networking, version control, and professional skills.",
    icon: Calendar,
  },
  {
    title: "Web Development Bootcamp",
    type: "Bootcamp",
    date: "2025",
    location: "Phnom Penh",
    description: "Intensive bootcamp covering HTML, CSS, JavaScript, Vue.js, and modern frontend frameworks with hands-on project building.",
    icon: Award,
  },
  {
    title: "Cambodia ICT Community Events",
    type: "Meetup",
    date: "2024 – Present",
    location: "Phnom Penh",
    description: "Active participation in local tech meetups, coding sessions, and knowledge-sharing events within Cambodia's growing IT community.",
    icon: MapPin,
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
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary tracking-widest uppercase">Community</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Workshops & <span className="text-gradient">Events</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            I actively participate in tech events to learn, grow, and connect with the developer community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className="glass rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <event.icon size={18} className="text-primary" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  {event.type}
                </span>
              </div>
              <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors">{event.title}</h3>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Calendar size={10} /> {event.date}</span>
                <span className="flex items-center gap-1"><MapPin size={10} /> {event.location}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
