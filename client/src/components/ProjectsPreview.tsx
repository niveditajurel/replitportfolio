import { motion } from 'framer-motion';
import projects from '../data/projectsPreview.json';

interface Project {
  id: string;
  title: string;
  role: string;
  thumb: string;
  caption: string;
  link: string;
}

const Card = ({ p }: { p: Project }) => (
  <a href={p.link} className="group relative block w-full h-80 overflow-hidden rounded-2xl shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
    {/* background image */}
    <img 
      src={p.thumb} 
      alt={p.title} 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
    />

    {/* sliding overlay */}
    <motion.div
      initial={{ y: '100%' }}
      whileHover={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      className="absolute inset-0 bg-ink/90 dark:bg-base/90 text-base dark:text-ink p-6 flex flex-col justify-end"
    >
      <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
      <p className="text-sm opacity-80 mb-3">{p.role}</p>
      <p className="text-sm leading-snug">{p.caption}</p>
    </motion.div>
  </a>
);

const ProjectsPreview = () => (
  <section id="work" className="py-28 bg-background">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl lg:text-5xl font-semibold mb-12 text-foreground">
        A tiny&nbsp;fraction&nbsp;of&nbsp;my&nbsp;work
      </h2>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((p: Project) => <Card key={p.id} p={p} />)}
      </div>
    </div>
  </section>
);

export default ProjectsPreview;