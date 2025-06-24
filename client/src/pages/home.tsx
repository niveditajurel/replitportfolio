import { Link } from "wouter";
import { useScrollAnimation, useCursorGlow } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Download, 
  Brain, 
  Heart, 
  BarChart3, 
  Users,
  ExternalLink,
  Sparkles
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
  const heroRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const projectRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();
  
  const cursorRef = useCursorGlow();

  const handleDownloadResume = () => {
    console.log("Resume download tracked");
    // Implement actual download logic
  };

  const handleViewProjects = () => {
    console.log("View projects clicked");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl floating" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={heroRef.ref}
            className={`fade-in ${heroRef.isVisible ? "visible" : ""}`}
          >
            <div className="mb-6">
              <Badge 
                variant="secondary" 
                className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Available for New Opportunities
              </Badge>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
              Curious minds build{" "}
              <span className="text-gradient">better products</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Early-career Product Manager passionate about creating digital experiences 
              that solve real problems and delight users.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/projects">
                <Button 
                  size="lg" 
                  className="group inline-flex items-center px-8 py-4 text-lg hover-glow bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
                  onClick={handleViewProjects}
                >
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="inline-flex items-center px-8 py-4 text-lg hover-glow border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/50 transition-all duration-200"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={aboutRef.ref}
            className={`text-center mb-16 fade-in ${aboutRef.isVisible ? "visible" : ""}`}
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
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                ref={cursorRef}
                className={`group cursor-glow hover-glow border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 slide-in-left ${
                  aboutRef.isVisible ? "visible" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
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
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={projectRef.ref}
            className={`text-center mb-16 fade-in ${projectRef.isVisible ? "visible" : ""}`}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Featured Project
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A deep dive into one of my recent product case studies
            </p>
          </div>

          <Card
            className={`overflow-hidden cursor-glow hover-glow border-border/50 bg-card/50 backdrop-blur-sm slide-in-right ${
              projectRef.isVisible ? "visible" : ""
            }`}
          >
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
                    <Button className="group hover-glow bg-primary text-primary-foreground hover:bg-primary/90">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={ctaRef.ref}
            className={`fade-in ${ctaRef.isVisible ? "visible" : ""}`}
          >
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
                  className="group inline-flex items-center px-8 py-4 text-lg hover-glow bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="inline-flex items-center px-8 py-4 text-lg hover-glow border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/50 transition-all duration-200"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}