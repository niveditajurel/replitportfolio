import items from '../data/teasers.json';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface TeaserItem {
  id: string;
  title: string;
  tags: string;
  thumb: string;
  summary: string;
  href: string;
}

const Teaser = ({ item, index }: { item: TeaserItem; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="group relative block w-full overflow-hidden rounded-[40px] bg-gradient-to-br from-secondary/80 to-secondary cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Default state - bento card with image previews */}
      <motion.div
        className="relative p-8 min-h-[420px] flex flex-col"
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {/* Project images - stacked and rotated */}
        <div className="relative mb-6 flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-[280px]">
            {/* Main project image */}
            <div className="relative transform rotate-3 bg-white rounded-[20px] p-2 shadow-lg">
              <img 
                src={item.thumb} 
                alt={item.title} 
                className="w-full h-[180px] object-cover rounded-[16px]" 
              />
            </div>
            
            {/* Secondary image overlay */}
            <div className="absolute -top-4 -right-4 transform -rotate-6 bg-white rounded-[20px] p-2 shadow-md w-24 h-24 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-accent/30 to-flair/30 rounded-[12px] flex items-center justify-center">
                <div className="w-8 h-8 bg-accent rounded-full opacity-80"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Project info */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-foreground leading-tight">
            {item.title.split(' – ')[0]}
            <span className="block text-lg font-normal text-muted-foreground mt-1">
              {item.tags}
            </span>
          </h3>
        </div>
      </motion.div>

      {/* Hover state - detailed overlay */}
      <motion.div
        className="absolute inset-0 p-8 flex flex-col justify-between"
        style={{
          background: index % 2 === 0 
            ? 'linear-gradient(135deg, #F89676 0%, #FFA726 100%)' 
            : 'linear-gradient(135deg, #5B8DEF 0%, #7B68EE 100%)'
        }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 20
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-lg leading-relaxed font-medium text-white/95 mb-6 max-w-[300px]">
            {item.summary}
          </p>
        </div>
        
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">
              {item.title.split(' – ')[0]}
            </h3>
            <p className="text-sm text-white/80 font-medium">
              {item.tags}
            </p>
          </div>
          
          <motion.div
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <svg 
              className="w-5 h-5 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const WorkTeasers = () => (
  <section id="tiny-work" className="py-32 bg-gradient-to-b from-background to-secondary/20">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-6xl font-semibold mb-6 leading-tight">
          Tiny fraction of my work
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Teaming with founders to propel their next product breakthrough – design that's both functional and great looking
        </p>
      </motion.div>
      
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Teaser item={item} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkTeasers;