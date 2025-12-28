import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="section-padding relative overflow-hidden" aria-label="Call to action">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <PenLine className="text-primary" size={32} />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">
            Your Story Matters
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Have a story that deserves to be heard? Share your journey with our global community. 
            Your experience could inspire, empower, and create connections across the world.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/submit">
                Share Your Story
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
