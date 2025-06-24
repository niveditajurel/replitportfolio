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
    <section className="relative overflow-hidden py-32 bg-base dark:bg-ink text-ink dark:text-base min-h-screen flex items-center">
      {/* Animated gradient blob */}
      <div className="absolute -top-40 -left-40 w-[480px] h-[480px] bg-gradient-to-br from-accent/40 to-flair/30 rounded-full blur-3xl animate-blob" />
      
      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Text block */}
          <motion.div variants={itemVariants}>
            <Badge 
              variant="secondary" 
              className="mb-6 px-4 py-2 text-sm font-medium bg-accent/10 text-accent border-accent/20 cursor-glow"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Available for New Opportunities
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-semibold leading-tight mb-4">
              Turning empathy into{" "}
              <span className="text-accent">product&nbsp;strategy</span>
            </h1>

            {/* Typewriter */}
            <div className="mt-4 text-xl font-medium tracking-wide mb-6">
              <span className="inline-block min-h-[2.5rem]">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="max-w-xl text-lg mb-10 text-muted-foreground">
              Early-career Product Manager passionate about crafting data-driven experiences that delight users and drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/projects">
                <Button 
                  size="lg" 
                  className="group relative inline-flex items-center gap-2 px-8 py-4 text-lg rounded-full bg-accent text-base hover:shadow-lg transition-all duration-200 font-semibold cursor-glow hover-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  onClick={handleExploreWork}
                  aria-label="Explore my portfolio projects"
                >
                  Explore My Work
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="inline-flex items-center gap-2 px-8 py-4 text-lg rounded-full border border-ink/40 dark:border-base/40 hover:bg-ink/5 dark:hover:bg-base/10 transition-all duration-200 cursor-glow hover-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                onClick={handleDownloadResume}
                aria-label="Download my resume PDF"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-flair/20 rounded-full blur-2xl transform scale-110"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Alex Chen profile"
              className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}