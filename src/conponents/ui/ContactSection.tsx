import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-secondary/30 relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/3 blur-3xl" />

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-primary text-primary-foreground p-6 md:p-8 lg:p-10 shadow-xl shadow-primary/20"
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase mb-2">Contact</h2>
              <div className="w-full h-px bg-primary-foreground/30 mb-5" />

              <div className="space-y-4 text-base md:text-lg">
                <a href="tel:+85531232668" className="flex items-start gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  <Phone size={18} className="mt-1" />
                  <span>(+855) 31-232-6668</span>
                </a>

                <a href="mailto:phournkoemseang@gmail.com" className="flex items-start gap-3 text-primary-foreground/90 hover:text-primary-foreground transition-colors break-all">
                  <Mail size={18} className="mt-1" />
                  <span>phournkoemseang@gmail.com</span>
                </a>

                <p className="flex items-start gap-3 text-primary-foreground/90">
                  <MapPin size={18} className="mt-1" />
                  <span>BP 511, Phum Tropeang Chhuk (Borey Sorla) Sangkat, Street 371, Phnom Penh</span>
                </p>

                <a
                  href="https://www.program-pnc.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block underline text-primary-foreground/90 hover:text-primary-foreground"
                >
                  https://www.program-pnc.site/
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase mb-2">Education</h2>
              <div className="w-full h-px bg-primary-foreground/30 mb-5" />

              <div className="space-y-7 text-primary-foreground/90">
                <div>
                  <p className="text-xl font-semibold">2025 - Present</p>
                  <p className="text-2xl font-bold uppercase leading-tight mt-1 text-primary-foreground">Pursuing Associate Degree</p>
                  <p className="mt-2 text-lg">At Passerelles Numeriques Cambodia (PNC)</p>
                </div>

                <div>
                  <p className="text-xl font-semibold">2021 - 2024</p>
                  <p className="text-2xl font-bold uppercase leading-tight mt-1 text-primary-foreground">Graduate Form High School</p>
                  <p className="mt-2 text-lg">At Hun Sen Phnom Kravanh High Schoo</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
