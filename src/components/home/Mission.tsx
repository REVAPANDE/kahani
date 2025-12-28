import { motion } from "framer-motion";
import { Heart, Users, Globe, Mic } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Empowerment",
    description: "We believe in the transformative power of sharing one's story to inspire and uplift others.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Every voice matters. We create space for stories from all backgrounds and experiences.",
  },
  {
    icon: Globe,
    title: "Diversity",
    description: "We celebrate the rich tapestry of cultures, traditions, and perspectives that make us unique.",
  },
  {
    icon: Mic,
    title: "Amplification",
    description: "We amplify voices that have been historically marginalized and underrepresented.",
  },
];

const Mission = () => {
  return (
    <section className="section-padding" aria-labelledby="mission-heading">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-primary uppercase tracking-wider"
            >
              Our Mission
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              id="mission-heading"
              className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight"
            >
              Changing the World, <br />
              <span className="text-primary">One Story at a Time</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg text-muted-foreground leading-relaxed"
            >
              Kahani, meaning "story" in Hindi, was founded with a simple yet powerful mission: 
              to create a platform where underrepresented voices can be heard, celebrated, and 
              preserved for future generations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-4 text-lg text-muted-foreground leading-relaxed"
            >
              We believe that stories have the power to build bridges, foster understanding, 
              and create lasting change. Through authentic storytelling, we honor the journeys 
              of women and marginalized communities worldwide.
            </motion.p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
