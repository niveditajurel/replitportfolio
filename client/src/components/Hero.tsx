import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';

const typewriterTexts = [
  "0→1 Thinker",
  "Data-Led Decisions", 
  "User-First Mindset"
];

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter animation effect
  useEffect(() => {
    const currentFullText = typewriterTexts[currentTextIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      // Typing phase
      if (displayText.length < currentFullText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Pause before deleting
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Deleting phase
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        // Move to next text
        setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentTextIndex]);

  const handleExploreWork = () => {
    trackEvent('Explore My Work');
  };

  const handleDownloadResume = () => {
    trackEvent('Download Resume');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Badge 
              variant="secondary" 
              className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 cursor-glow"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Available for New Opportunities
            </Badge>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight"
          >
            Turning empathy into{" "}
            <span className="text-gradient">product strategy</span>
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed"
          >
            <span className="inline-block min-h-[2.5rem]">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Early-career Product Manager passionate about creating digital experiences 
            that solve real problems and delight users.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/projects">
              <Button 
                size="lg" 
                className="group relative inline-flex items-center px-8 py-4 text-lg cursor-glow hover-glow bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                onClick={handleExploreWork}
                aria-label="Explore my portfolio projects"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="inline-flex items-center px-8 py-4 text-lg cursor-glow hover-glow border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/50 transform hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              onClick={handleDownloadResume}
              aria-label="Download my resume PDF"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}