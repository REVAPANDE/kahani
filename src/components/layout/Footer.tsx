import { Link } from "react-router-dom";
import { Heart, Mail, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border" role="contentinfo">
      <div className="container-main section-padding !py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-serif font-bold text-primary">Kahani</h2>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Amplifying voices that deserve to be heard. Every story matters, every voice counts. 
              Join us in celebrating the beautiful tapestry of human experiences.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:hello@kahani.com"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Email us"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/stories" className="text-muted-foreground hover:text-primary transition-colors">
                  All Stories
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-muted-foreground hover:text-primary transition-colors">
                  Share Your Story
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/stories?theme=empowerment" className="text-muted-foreground hover:text-primary transition-colors">
                  Empowerment
                </Link>
              </li>
              <li>
                <Link to="/stories?theme=resilience" className="text-muted-foreground hover:text-primary transition-colors">
                  Resilience
                </Link>
              </li>
              <li>
                <Link to="/stories?theme=culture" className="text-muted-foreground hover:text-primary transition-colors">
                  Culture & Heritage
                </Link>
              </li>
              <li>
                <Link to="/stories?theme=breaking-barriers" className="text-muted-foreground hover:text-primary transition-colors">
                  Breaking Barriers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kahani. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-primary fill-primary" /> for storytellers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
