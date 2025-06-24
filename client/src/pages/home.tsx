import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useScrollAnimation, useCursorGlow } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hero } from "@/components/Hero";
import WorkTeasers from "@/components/WorkTeasers";
import TechSkills from "@/components/TechSkills";
import ProductPhilosophy from "@/components/ProductPhilosophy";
import { 
  ArrowRight, 
  Brain, 
  Heart, 
  BarChart3, 
  Users
} from "lucide-react";

const featuredProject = {
  title: "MindfulMoney",
  subtitle: "Behavioral Finance App",
  description: "Helping Gen Z build healthy money habits through gamification and behavioral economics principles.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  metrics: {
    users: "15K+",
    growth: "85%",
    impact: "45% improvement in savings rate"
  },
  tags: ["FinTech", "Mobile App", "Behavioral Design"]
};

const coreValues = [
  {
    icon: Heart,
    title: "Human-Centered",
    description: "Every decision starts with understanding real user needs and pain points.",
    color: "text-red-500"
  },
  {
    icon: BarChart3,
    title: "Data-Driven",
    description: "Combining qualitative insights with quantitative metrics to guide strategy.",
    color: "text-blue-500"
  },
  {
    icon: Brain,
    title: "Innovative",
    description: "Exploring new ways to solve problems and create meaningful value.",
    color: "text-purple-500"
  }
];

export default function Home() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const ctaRef = useRef(null);
  
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const projectInView = useInView(projectRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });
  
  const cursorRef = useCursorGlow();

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <motion.section 
        className="py-20 lg:py-32 bg-background"
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Building products with{" "}
              <span className="text-gradient">purpose</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I believe the best products emerge from deep empathy, rigorous research, 
              and the courage to challenge assumptions. My approach blends analytical thinking 
              with creative problem-solving to deliver meaningful user experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={sectionVariants}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  ref={cursorRef}
                  className="group cursor-glow hover-glow border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className={`${value.color} mb-6 flex justify-center`}>
                      <value.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-body font-semibold text-xl text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Project Section */}
      <motion.section 
        className="py-20 lg:py-32 bg-muted/30"
        ref={projectRef}
        initial="hidden"
        animate={projectInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Featured Project
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A deep dive into one of my recent product case studies
            </p>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <Card className="overflow-hidden cursor-glow hover-glow border-border/50 bg-card/50 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                      {featuredProject.title}
                    </h3>
                    <p className="font-body text-xl text-primary font-medium mb-6">
                      {featuredProject.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                      {featuredProject.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {featuredProject.metrics.users}
                        </div>
                        <div className="text-sm text-muted-foreground">Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {featuredProject.metrics.growth}
                        </div>
                        <div className="text-sm text-muted-foreground">Growth</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          45%
                        </div>
                        <div className="text-sm text-muted-foreground">Impact</div>
                      </div>
                    </div>

                    <Link href="/projects">
                      <Button className="group cursor-glow hover-glow bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="View project case studies">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        className="py-20 lg:py-32 bg-background"
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={sectionVariants}>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Let's build something{" "}
              <span className="text-gradient">amazing</span> together
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or just chat about the future of product management and technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="group inline-flex items-center px-8 py-4 text-lg cursor-glow hover-glow bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label="Contact me to discuss opportunities"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="inline-flex items-center px-8 py-4 text-lg cursor-glow hover-glow border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label="Learn more about my background and experience"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <WorkTeasers />
      <TechSkills />
      <ProductPhilosophy />
    </div>
  );
}