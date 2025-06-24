import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = [
  {
    category: "Product Strategy",
    items: ["User Research", "Market Analysis", "Roadmap Planning", "A/B Testing"],
    color: "from-accent/80 to-accent",
    icon: "🎯"
  },
  {
    category: "Data & Analytics",
    items: ["SQL", "Python", "Mixpanel", "Amplitude", "Tableau"],
    color: "from-flair/80 to-flair",
    icon: "📊"
  },
  {
    category: "Design & Prototyping",
    items: ["Figma", "Sketch", "Principle", "Framer", "Adobe Creative"],
    color: "from-mint/80 to-mint",
    icon: "🎨"
  },
  {
    category: "Tech Stack",
    items: ["React", "JavaScript", "APIs", "No-Code Tools", "Agile/Scrum"],
    color: "from-purple-500/80 to-purple-600",
    icon: "⚡"
  }
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative p-6 rounded-[32px] bg-gradient-to-br ${skill.color} text-white overflow-hidden min-h-[200px] flex flex-col justify-between`}
        whileHover={{ scale: 1.05, rotate: isHovered ? 2 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 text-6xl">
            {skill.icon}
          </div>
          <svg className="absolute bottom-0 right-0 w-32 h-32" viewBox="0 0 100 100">
            <circle cx="80" cy="80" r="40" fill="currentColor" opacity="0.1" />
            <circle cx="90" cy="70" r="20" fill="currentColor" opacity="0.1" />
          </svg>
        </div>

        <div className="relative z-10">
          <motion.h3 
            className="text-xl font-semibold mb-4"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            {skill.category}
          </motion.h3>
          
          <motion.div 
            className="space-y-2"
            animate={{ opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {skill.items.map((item, itemIndex) => (
              <motion.div
                key={item}
                className="text-sm font-medium opacity-90"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
              >
                • {item}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          animate={{ 
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 90 : 0 
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const TechSkills = () => (
  <section className="py-32 relative overflow-hidden bg-gradient-to-b from-secondary/10 to-background">
    {/* Background decorative elements */}
    <div className="absolute inset-0">
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-flair/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-6xl font-semibold mb-6 leading-tight">
          I've got your back with...
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A blend of technical expertise and product intuition that bridges the gap between user needs and business goals
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <SkillCard key={skill.category} skill={skill} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default TechSkills;