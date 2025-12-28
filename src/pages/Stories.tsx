import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import StoryCard from "@/components/stories/StoryCard";
import FilterBar from "@/components/stories/FilterBar";
import { stories, themes, communities } from "@/data/stories";

const Stories = () => {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedCommunity, setSelectedCommunity] = useState("");

  const filteredStories = useMemo(() => {
    return stories.filter((story) => {
      const matchesTheme = !selectedTheme || story.theme === selectedTheme;
      const matchesCommunity = !selectedCommunity || story.community === selectedCommunity;
      return matchesTheme && matchesCommunity;
    });
  }, [selectedTheme, selectedCommunity]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-transparent">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">
              All Stories
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore powerful narratives from underrepresented communities around the world. 
              Each story is a testament to resilience, courage, and the human spirit.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <FilterBar
            themes={themes}
            communities={communities}
            selectedTheme={selectedTheme}
            selectedCommunity={selectedCommunity}
            onThemeChange={setSelectedTheme}
            onCommunityChange={setSelectedCommunity}
          />
        </div>
      </section>

      {/* Stories Grid */}
      <section className="section-padding !pt-8" aria-label="Stories collection">
        <div className="container-main">
          {filteredStories.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story, index) => (
                <StoryCard key={story.id} {...story} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-muted-foreground">
                No stories found matching your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedTheme("");
                  setSelectedCommunity("");
                }}
                className="mt-4 text-primary font-medium hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Stories;
