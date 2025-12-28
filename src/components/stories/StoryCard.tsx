import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface StoryCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  community: string;
  theme: string;
  imageUrl: string;
  index?: number;
}

const StoryCard = ({
  id,
  title,
  excerpt,
  author,
  community,
  theme,
  imageUrl,
  index = 0,
}: StoryCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="story-card group"
    >
      <Link to={`/stories/${id}`} className="block" aria-label={`Read ${title}`}>
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={`Story illustration for ${title}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Theme badge */}
          <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
            {theme}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Community tag */}
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            {community}
          </span>

          {/* Title */}
          <h3 className="mt-2 text-xl font-serif font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="mt-3 text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {excerpt}
          </p>

          {/* Author & CTA */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground/80">
              by {author}
            </span>
            <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all duration-300">
              Read Story
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default StoryCard;
