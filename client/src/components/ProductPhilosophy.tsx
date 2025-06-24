import { motion } from 'framer-motion';
import { useState } from 'react';

const philosophies = [
  {
    title: "User-Centric Innovation",
    description: "Every feature starts with understanding real user pain points. I believe great products solve problems people didn't even know they had.",
    icon: "👥",
    color: "from-accent/20 to-accent/5"
  },
  {
    title: "Data-Driven Decisions",
    description: "Intuition guides, but data decides. I combine behavioral analytics with user feedback to validate every product hypothesis.",
    icon: "📈",
    color: "from-flair/20 to-flair/5"
  },
  {
    title: "Agile Iteration",
    description: "Ship fast, learn faster. I embrace MVPs and continuous iteration to deliver value early and often.",
    icon: "🚀",
    color: "from-mint/20 to-mint/5"
  }
];

const PhilosophyCard = ({ philosophy, index }: { philosophy: typeof philosophies[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative p-8 rounded-[32px] bg-gradient-to-br ${philosophy.color} border border-border/20 overflow-hidden cursor-pointer min-h-[280px]`}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Background decorative element */}
        <motion.div
          className="absolute top-4 right-4 text-8xl opacity-10"
          animate={{ rotate: isHovered ? 15 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {philosophy.icon}
        </motion.div>

        {/* Floating background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -bottom-8 -right-8 w-24 h-24 bg-current opacity-5 rounded-full"
            animate={{ 
              scale: isHovered ? 1.5 : 1,
              opacity: isHovered ? 0.1 : 0.05 
            }}
            transition={{ duration: 0.6 }}
          />
        </div>

        <div className="relative z-10 h-full flex flex-col">
          <motion.div
            className="text-4xl mb-6"
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0 
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            {philosophy.icon}
          </motion.div>
          
          <h3 className="text-xl font-semibold mb-4 text-foreground leading-tight">
            {philosophy.title}
          </h3>
          
          <motion.p 
            className="text-muted-foreground leading-relaxed flex-1"
            animate={{ opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {philosophy.description}
          </motion.p>

          <motion.div
            className="mt-6 flex items-center text-sm font-medium text-accent"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            Learn more
            <motion.svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProductPhilosophy = () => (
  <section className="py-32 relative overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-transparent to-background" />
    
    {/* Floating background elements */}
    <motion.div
      className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full opacity-40"
      animate={{
        y: [0, -20, 0],
        opacity: [0.4, 0.8, 0.4],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div
      className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-flair rounded-full opacity-30"
      animate={{
        y: [0, 15, 0],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl lg:text-6xl font-semibold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Product philosophy that delivers
        </motion.h2>
        <motion.p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Building products that users love while achieving business outcomes through strategic thinking and technical execution
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {philosophies.map((philosophy, index) => (
          <PhilosophyCard key={philosophy.title} philosophy={philosophy} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductPhilosophy;