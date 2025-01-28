import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Calendar, Clock, Heart } from "lucide-react"

export default function ContactSection() {
  return (
    <div className="bg-black/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-400 mb-4">Social Connections</h2>
          <p className="text-gray-300">Connect with Us..!!</p>
        </div>

        <div className="flex justify-center gap-8 mb-16">
          <motion.a
            href="mailto:bhuvanshetty2018@gmail.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full"
          >
            <Mail className="w-8 h-8 text-white" />
          </motion.a>
          <motion.a
            href="https://wa.me/+916361782350"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full"
          >
            <Phone className="w-8 h-8 text-white" />
          </motion.a>
        </div>

        <div className="flex justify-center gap-8 mb-16">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold text-xl"
    onClick={() => {
      const link = document.createElement('a');
      link.href = '/src/components/schedule.pdf'; // File path relative to the `public` folder in Next.js
      link.download = 'schedule.pdf'; // Name of the file for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
  >
    SCHEDULE
  </motion.button>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold text-xl"
  >
    BROCHURE
  </motion.button>
</div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-400 mb-4">College Location</h2>
          <p className="text-gray-300 mb-8">We Are Here!!</p>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.9606164567563!2d75.18120047466148!3d12.781068387517045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4bd112e521305%3A0xc08171b778a56885!2sVivekananda%20College%20of%20Engineering%20%26%20Technology%2C%20Puttur!5e0!3m2!1sen!2sin!4v1737833735372!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <footer className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Contact</h3>
            <div className="space-y-4">
              <p className="text-white text-lg">Vivekananda College of Engineering and Technology, Puttur</p>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>+91 6361782350</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>bhuvanshetty2018@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Puttur, Karnataka</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Event on</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-5 h-5" />
                <span>31st January 2025</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-5 h-5" />
                <span>Friday, 2 PM</span>
              </div>
            </div>
          </div>
        </footer>

        <div className="mt-12 text-center text-gray-300">
          <p className="mb-2">@Tech Fusion 2K25, All Rights Reserved</p>
          <p className="flex items-center justify-center">
            Made with <Heart className="w-5 h-5 mx-1 text-red-500" /> by BHUVAN SHETTY
          </p>
        </div>
      </div>
    </div>
  )
}