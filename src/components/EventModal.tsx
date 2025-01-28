import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone } from 'lucide-react';

interface Event {
  theme: string;
  title: string;
  rules: string[];
  heads: { name: string; phone: string }[];
}

interface EventModalProps {
  event: Event | null;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  if (!event) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-black/80 backdrop-blur-md p-8 rounded-2xl max-w-md w-full mx-4 relative"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X />
          </button>

          <h2 className="text-2xl font-bold text-purple-400 mb-2">{event.theme}</h2>
          <h3 className="text-xl text-white mb-6">{event.title}</h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Rules</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {event.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Event Heads</h4>
              <div className="space-y-4">
                {event.heads.map((head, index) => (
                  <div key={index} className="flex items-start gap-4 text-gray-300">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-purple-400" />
                      <span>{head.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-purple-400" />
                      <span>{head.phone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}