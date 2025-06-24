import items from '../data/teasers.json';
import { motion } from 'framer-motion';

interface TeaserItem {
  id: string;
  title: string;
  tags: string;
  thumb: string;
  summary: string;
  href: string;
}

const Teaser = ({ item }: { item: TeaserItem }) => (
  <a href={item.href} className="group relative block w-full overflow-hidden rounded-[32px] bg-secondary">
    {/* thumbnail */}
    <img 
      src={item.thumb} 
      alt={item.title} 
      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110" 
    />

    {/* sliding summary */}
    <motion.div
      initial={{ y: '100%' }}
      whileHover={{ y: 0 }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.55 }}
      className="absolute inset-0 flex flex-col justify-between p-6 bg-flair/90 text-ink dark:bg-accent/90 dark:text-base rounded-[32px]"
    >
      <p className="text-lg leading-snug font-medium max-w-xs">{item.summary}</p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-sm opacity-70">{item.tags}</p>
      </div>
    </motion.div>
  </a>
);

const WorkTeasers = () => (
  <section id="tiny-work" className="py-28">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl lg:text-5xl font-semibold mb-12">
        A&nbsp;tiny&nbsp;fraction&nbsp;of&nbsp;my&nbsp;work
      </h2>
      <div className="grid gap-12 md:grid-cols-2">
        {items.map(i => <Teaser key={i.id} item={i} />)}
      </div>
    </div>
  </section>
);

export default WorkTeasers;