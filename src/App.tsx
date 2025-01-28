import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import CountdownTimer from './components/CountdownTimer';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import CoordinatorsSection from './components/CoordinatorsSection';
import ContactSection from './components/ContactSection';
import RegistrationForm from './components/RegistrationForm';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white">
      <Toaster position="top-center" />
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  TechRockers
                </h1>
                <h2 className="text-4xl font-extrabold mb-4">
                  WHERE TALENT MEETS OPPORTUNITY!!
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  College Level IT Fest!
                </p>
                
                <motion.button
                  onClick={() => setShowRegistration(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-xl font-bold text-white
                    hover:from-purple-700 hover:to-pink-700 transition-all duration-300
                    shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]
                    animate-pulse hover:animate-none"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  REGISTER NOW!
                </motion.button>
              </motion.div>

              <motion.div
                className="flex justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Cpu size={400} className="text-purple-500" />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <CountdownTimer />
          </motion.div>
        </div>

        {/* About Section */}
        <AboutSection />

        {/* Events Section */}
        <EventsSection />

        {/* Coordinators Section */}
        <CoordinatorsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Registration Form Modal */}
        <RegistrationForm 
          isOpen={showRegistration} 
          onClose={() => setShowRegistration(false)} 
        />
      </main>
    </div>
  );
}