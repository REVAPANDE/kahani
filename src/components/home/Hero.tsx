import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero section">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-golden/5 rounded-full blur-3xl" />
      </div>

      <div className="container-main section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Sparkles size={16} />
              <span>Celebrating Diverse Voices</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight"
            >
              Every Voice Has a{" "}
              <span className="text-gradient">Story</span> Worth Telling
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Kahani amplifies the voices of underrepresented communities, especially women, 
              through powerful storytelling. Join us in celebrating resilience, culture, and the 
              extraordinary journeys that inspire change.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/stories">
                  Explore Stories
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/submit">Share Your Story</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex gap-8 sm:gap-12"
            >
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Stories Shared</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-bold text-accent">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Communities</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-bold text-golden">10K+</p>
                <p className="text-sm text-muted-foreground mt-1">Readers</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                    alt="Woman professional smiling confidently"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
                    alt="Portrait of a woman with warm smile"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
                    alt="Woman leader in her community"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80"
                    alt="Entrepreneur woman in business"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/20 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-accent/20 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
