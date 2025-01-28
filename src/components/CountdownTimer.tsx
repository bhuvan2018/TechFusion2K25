import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-01-31T14:00:00")

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { scale: 0, rotateY: 90 },
    visible: {
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <motion.div className="text-center" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.h3 variants={textVariants} className="text-2xl font-bold mb-2">
        Event Starts In
      </motion.h3>
      <motion.p variants={textVariants} className="text-xl mb-4 text-purple-500">
        Every Second Counts...
      </motion.p>
      <motion.div className="flex justify-center gap-4" variants={containerVariants}>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div
            key={unit}
            className="bg-black/80 p-4 rounded-lg min-w-[100px]"
            variants={itemVariants}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="text-3xl font-bold text-white"
              >
                {value}
              </motion.div>
            </AnimatePresence>
            <div className="text-sm text-gray-400 capitalize">{unit}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}