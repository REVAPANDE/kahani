import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { themes, communities } from "@/data/stories";

const Submit = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    community: "",
    theme: "",
    story: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Story Submitted!",
      description: "Thank you for sharing your story. We'll review it and get back to you soon.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="section-padding min-h-[60vh] flex items-center">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
                <CheckCircle className="text-accent" size={40} />
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold">
                Thank You for Sharing!
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Your story has been submitted successfully. Our team will review it and 
                reach out to you soon. Your voice matters, and we're honored to be part 
                of your journey.
              </p>
              <Button
                variant="hero"
                size="lg"
                className="mt-8"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    title: "",
                    community: "",
                    theme: "",
                    story: "",
                  });
                }}
              >
                Submit Another Story
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

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
              Share Your Story
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Your experiences have the power to inspire, educate, and connect. 
              Share your journey with our global community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding !pt-0">
        <div className="container-main max-w-3xl">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border/50"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Story Title */}
            <div className="mt-6">
              <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
                Story Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Give your story a compelling title"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              {/* Community */}
              <div>
                <label htmlFor="community" className="block text-sm font-medium text-foreground mb-2">
                  Community *
                </label>
                <select
                  id="community"
                  name="community"
                  required
                  value={formData.community}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <option value="">Select your community</option>
                  {communities.map((community) => (
                    <option key={community} value={community}>
                      {community}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Theme */}
              <div>
                <label htmlFor="theme" className="block text-sm font-medium text-foreground mb-2">
                  Theme *
                </label>
                <select
                  id="theme"
                  name="theme"
                  required
                  value={formData.theme}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <option value="">Select a theme</option>
                  {themes.map((theme) => (
                    <option key={theme} value={theme}>
                      {theme}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Story Content */}
            <div className="mt-6">
              <label htmlFor="story" className="block text-sm font-medium text-foreground mb-2">
                Your Story *
              </label>
              <textarea
                id="story"
                name="story"
                required
                value={formData.story}
                onChange={handleChange}
                rows={10}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Share your story here. Don't hold back - your voice matters and your experiences deserve to be heard..."
              />
              <p className="mt-2 text-sm text-muted-foreground">
                Minimum 200 words recommended. Your story will be reviewed before publishing.
              </p>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Your Story
                    <Send size={20} />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Submit;
