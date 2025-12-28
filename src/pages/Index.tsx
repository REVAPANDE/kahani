import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedStories from "@/components/home/FeaturedStories";
import Mission from "@/components/home/Mission";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedStories />
      <Mission />
      <CallToAction />
    </Layout>
  );
};

export default Index;
