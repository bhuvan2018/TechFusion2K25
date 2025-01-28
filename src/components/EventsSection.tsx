import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react"
import EventModal from "./EventModal"

interface Event {
  id: number
  image: string
  theme: string
  title: string
  rules: string[]
  heads: { name: string; phone: string }[]
}

const events: Event[] = [
  {
    id: 1,
    image: "/src/components/CD.png",
    theme: "STOCKFISH",
    title: "Coding",
    rules: [
      "Two Participants make a team",
      "Time limit: 1 hour in Total",
      "Participants must have knowledge of C/C++/Java",
    ],
    heads: [
      { name: "Bhuvan Shetty", phone: "6361782350" },
      { name: "Adithya G", phone: "8762116456" },
    ],
  },
  {
    id: 2,
    image: "/src/components/WD.jpeg",
    theme: "Ex Machina",
    title: "Designing",
    rules: [
      "Two members make a team",
      "No electronic gadgets are allowed",
      "Original designs only",
      "Theme will be provided",
    ],
    heads: [
      { name: "Shraddha B D", phone: "7676874162" },
      { name: "PG Karthik", phone: "7337863449" },
    ],
  },
  {
    id: 3,
    image: "/src/components/xyz.jpg",
    theme: "Space Odyssey",
    title: "IT Quiz",
    rules: [
      "Two members make a team",
      "Questions will be on Technology, GK with Programming",
      "No electronic gadget are allowed",
      "Use of unfair means will lead to disqualification",
    ],
    heads: [
      { name: "Thripthi", phone: "9663997397" },
      { name: "Prajna K", phone: "7795409002" },
    ],
  },
  {
    id: 4,
    image: "/src/components/terminator.jpg",
    theme: "Terminator",
    title: "IT Manager",
    rules: ["Individual participation", "Participant should carry their updated resume(hardcopy)"],
    heads: [
      { name: "Shivani Rao", phone: "9591942790" },
      { name: "Kanya Shenoy", phone: "8792015488" },
    ],
  },
  {
    id: 5,
    image: "/src/components/gaming.jpg",
    theme: "Wall-E",
    title: "Gaming",
    rules: [
      "Individual Participation",
      "Participants are required to bring their own mobile phones",
      "Use of iPads and triggers are not allowed also no internet will be provided",
    ],
    heads: [
      { name: "Ranjeeth", phone: "7676471269" },
      { name: "Dhanush", phone: "8073761019" },
    ],
  },
  {
    id: 6,
    image: "/src/components/av.jpeg",
    theme: "Ultron",
    title: "Mad Ads",
    rules: [
      "Team must have 5 to 6 members",
      "Topic will be given on the spot, with materials provided accordingly",
      "Time will be alloted forr ad preparation",
    ],
    heads: [
      { name: "Jenita D Costa", phone: "9686205482" },
      { name: "Disha M T", phone: "8073437014" },
    ],
  },
  {
    id: 7,
    image: "/src/components/sp.jpeg",
    theme: "The Agent",
    title: "Surprise Event",
    rules: [
      "Two members make a team",
      "Since it's a surprise event, rest of the information will be provided on the day of event",
      "No electronic gadgets are allowed",
    ],
    heads: [
      { name: "Chaithanya", phone: "8123072382" },
      { name: "Raksha Shetty", phone: "6366188858" },
    ],
  },
]

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const slideRight = () => {
    if (currentIndex < events.length - 3) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          Events
        </h2>
        <p className="text-xl text-gray-300 font-light tracking-wide">Showcase Your Skills in Our Exciting Events</p>
      </motion.div>

      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={slideLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white shadow-lg ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:from-purple-700 hover:to-pink-700"
          }`}
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={24} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={slideRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white shadow-lg ${
            currentIndex >= events.length - 3
              ? "opacity-50 cursor-not-allowed"
              : "hover:from-purple-700 hover:to-pink-700"
          }`}
          disabled={currentIndex >= events.length - 3}
        >
          <ChevronRight size={24} />
        </motion.button>

        <div className="overflow-hidden">
          <motion.div
            ref={sliderRef}
            className="flex gap-8"
            animate={{
              x: `-${currentIndex * (100 / 3)}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="min-w-[calc(33.333%-1.5rem)] bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
                    {event.theme}
                  </h3>
                  <h4 className="text-lg text-white font-medium mb-4">{event.title}</h4>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedEvent(event)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>View Details</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  )
}