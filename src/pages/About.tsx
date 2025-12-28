import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Users, Globe, BookOpen, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-transparent">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">
              About <span className="text-primary">Kahani</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Kahani, meaning "story" in Hindi, is more than just a platform—it's a movement. 
              We believe that every person has a story worth telling, and every voice deserves 
              to be heard.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold">
                Amplifying Voices That Shape Our World
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We founded Kahani with a simple yet powerful mission: to create a safe, 
                welcoming space where underrepresented communities—especially women—can share 
                their experiences, celebrate their heritage, and inspire others.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                In a world where certain voices are often overlooked or silenced, we believe 
                in the transformative power of storytelling to build bridges, foster empathy, 
                and create lasting change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-primary/10">
                  <BookOpen className="text-primary mb-3" size={32} />
                  <h3 className="font-semibold text-lg">500+ Stories</h3>
                  <p className="text-sm text-muted-foreground mt-1">Shared and celebrated</p>
                </div>
                <div className="p-6 rounded-xl bg-accent/10">
                  <Globe className="text-accent mb-3" size={32} />
                  <h3 className="font-semibold text-lg">50+ Communities</h3>
                  <p className="text-sm text-muted-foreground mt-1">Represented worldwide</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="p-6 rounded-xl bg-golden/10">
                  <Users className="text-golden mb-3" size={32} />
                  <h3 className="font-semibold text-lg">10K+ Readers</h3>
                  <p className="text-sm text-muted-foreground mt-1">Engaged monthly</p>
                </div>
                <div className="p-6 rounded-xl bg-primary/10">
                  <Heart className="text-primary mb-3" size={32} />
                  <h3 className="font-semibold text-lg">100% Impact</h3>
                  <p className="text-sm text-muted-foreground mt-1">Community driven</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-bold">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "We honor the raw, unfiltered truths of lived experiences. Every story shared here is real, powerful, and meaningful.",
              },
              {
                title: "Inclusivity",
                description: "We create space for all voices, especially those that have been historically marginalized or overlooked in mainstream narratives.",
              },
              {
                title: "Empowerment",
                description: "We believe that sharing your story is an act of courage that not only heals the storyteller but inspires countless others.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-card border border-border/50 text-center"
              >
                <h3 className="text-xl font-serif font-semibold">{value.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">
              Join Our Community
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Whether you want to share your own story or simply be inspired by others, 
              you're welcome here. Every voice matters, every story counts.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/submit">
                  Share Your Story
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/stories">Explore Stories</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
