import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import StoryCard from "@/components/stories/StoryCard";
import { stories } from "@/data/stories";

const FeaturedStories = () => {
  const featuredStories = stories.filter((story) => story.featured).slice(0, 3);

  return (
    <section className="section-padding bg-secondary/30" aria-labelledby="featured-heading">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Featured Stories
          </span>
          <h2
            id="featured-heading"
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold"
          >
            Voices That Inspire
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover powerful narratives from women around the world who are breaking barriers, 
            preserving culture, and creating change.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStories.map((story, index) => (
            <StoryCard key={story.id} {...story} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/stories">
              View All Stories
              <ArrowRight size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedStories;
