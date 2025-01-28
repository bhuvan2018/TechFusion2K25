import { motion } from 'framer-motion';
import CounterAnimation from './CounterAnimation';

export default function AboutSection() {
  const images = [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=500",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=500",
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=500",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={img}
                alt={`Event ${index + 1}`}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-purple-400">About event</h3>
          <h2 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 font-['Audiowide']">
            Welcome to Tech Fusion-2K25
          </h2>
          <p className="text-2xl uppercase font-bold tracking-wide text-gray-300">
            DIVE INTO EXCITING COMPETITION TO SHOWCASE YOUR TALENT WITH REWARDS.
          </p>
          <div className="flex gap-12 mt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">
                <CounterAnimation from={0} to={7} duration={2} />+
              </div>
              <div className="text-sm text-gray-400 mt-2">Events to participate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">
                <CounterAnimation from={0} to={7} duration={2} />+
              </div>
              <div className="text-sm text-gray-400 mt-2">Prizes to win</div>
            </div>
          </div>
          <motion.a
            href="https://vcetputtur.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">About</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 animate-pulse" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}