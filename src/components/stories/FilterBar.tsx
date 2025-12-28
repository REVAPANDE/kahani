import { motion } from "framer-motion";

interface FilterBarProps {
  themes: string[];
  communities: string[];
  selectedTheme: string;
  selectedCommunity: string;
  onThemeChange: (theme: string) => void;
  onCommunityChange: (community: string) => void;
}

const FilterBar = ({
  themes,
  communities,
  selectedTheme,
  selectedCommunity,
  onThemeChange,
  onCommunityChange,
}: FilterBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-xl p-6 shadow-sm border border-border/50"
      role="search"
      aria-label="Filter stories"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Theme Filter */}
        <div className="flex-1">
          <label
            htmlFor="theme-filter"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Filter by Theme
          </label>
          <select
            id="theme-filter"
            value={selectedTheme}
            onChange={(e) => onThemeChange(e.target.value)}
            className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          >
            <option value="">All Themes</option>
            {themes.map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>

        {/* Community Filter */}
        <div className="flex-1">
          <label
            htmlFor="community-filter"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Filter by Community
          </label>
          <select
            id="community-filter"
            value={selectedCommunity}
            onChange={(e) => onCommunityChange(e.target.value)}
            className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          >
            <option value="">All Communities</option>
            {communities.map((community) => (
              <option key={community} value={community}>
                {community}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        {(selectedTheme || selectedCommunity) && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => {
              onThemeChange("");
              onCommunityChange("");
            }}
            className="self-end h-11 px-6 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
          >
            Clear Filters
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default FilterBar;
