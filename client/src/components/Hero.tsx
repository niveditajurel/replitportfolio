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
    <section className="relative isolate overflow-hidden py-40 bg-base dark:bg-ink text-ink dark:text-base min-h-screen flex items-center">
      {/* Glow #1 - top left */}
      <div className="absolute -top-56 -left-48 w-[580px] h-[580px] rounded-full bg-[radial-gradient(circle_at_center,rgba(91,141,239,0.35)_0%,transparent_70%)] blur-[120px] animate-slowPulse pointer-events-none" />
      {/* Glow #2 - bottom right */}
      <div className="absolute bottom-[-220px] right-[-260px] w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle_at_center,rgba(248,150,118,0.35)_0%,transparent_70%)] blur-[140px] animate-slowPulseReverse pointer-events-none" />
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl w-full lg:w-3/5"
        >
          {/* Data pulse line SVG */}
          <svg 
            className="absolute top-8 left-1/2 -translate-x-1/2 w-96 h-16 pointer-events-none mix-blend-difference opacity-10"
            viewBox="0 0 384 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0,32 Q96,8 192,32 T384,32" 
              stroke="currentColor" 
              strokeWidth="1" 
              fill="none"
              strokeDasharray="4 4"
              className="animate-pulse-line"
            />
          </svg>

          {/* Text block */}
          <motion.div variants={itemVariants}>
            <Badge 
              variant="secondary" 
              className="mb-6 px-4 py-2 text-sm font-medium bg-accent/10 text-accent border-accent/20 cursor-glow"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Available for New Opportunities
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-semibold leading-[1.15] mb-4 text-ink dark:text-base">
              Turning empathy into&nbsp;
              <span className="relative inline-block transition-colors duration-300 hover:text-flair">
                product strategy
                <span className="absolute inset-0 bg-accent/20 rounded-md -z-10 scale-105 blur-sm opacity-0 hover:opacity-100 transition" />
              </span>
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
                <button 
                  className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-base shadow-lg hover:shadow-xl transition cursor-glow hover-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 font-medium bg-[#242424] text-[#d6d6d6]"
                  onClick={handleExploreWork}
                  aria-label="Explore my portfolio projects"
                >
                  Explore My Work
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition">
                    →
                  </span>
                </button>
              </Link>
              
              <button 
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full border border-ink/40 dark:border-base/40 hover:bg-ink/5 dark:hover:bg-base/10 transition-all duration-200 cursor-glow hover-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                onClick={handleDownloadResume}
                aria-label="Download my resume PDF"
              >
                <Download className="w-5 h-5" />
                Download Resume
                <span className="transform translate-x-0 group-hover:translate-x-1 transition opacity-0 group-hover:opacity-100">
                  →
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/60 dark:text-base/60">
        <div className="w-[22px] h-[38px] rounded-xl border border-current flex justify-center">
          <div className="w-[4px] h-[8px] bg-current rounded-full animate-scrollDot" />
        </div>
        <span className="text-xs tracking-wide">scroll</span>
      </div>
    </section>
  );
}