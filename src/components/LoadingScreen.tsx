import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Cpu } from "lucide-react"
import { gsap } from "gsap"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"

export default function LoadingScreen() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine)
  }

  useEffect(() => {
    const timeline = gsap.timeline()

    // Step 1: Delay for 2 seconds, then show the title
    timeline
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power4.out",
        delay: 2, // Wait 2 seconds before showing the title
      })
      // Step 2: Keep both text and logo visible for 2 seconds
      .to(containerRef.current, {
        opacity: 1, // Ensure they remain visible
        duration: 2, // Hold visibility for 2 seconds
        ease: "none",
      })
      // Step 3: Fade out the loading screen
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          document.body.style.overflow = "auto" // Enable page scrolling
        },
      })
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: ["#4F46E5", "#06B6D4", "#10B981"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      <div className="relative flex items-center justify-center w-screen h-screen">
        {/* Large rotating logo background */}
        <motion.div
          className="absolute"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
          style={{ width: "75vh", height: "75vh" }} // 75% of viewport height
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
          <Cpu className="w-full h-full text-white opacity-20" />
        </motion.div>

        {/* Centered content */}
        <div className="relative z-10 text-center">
          <motion.h1
            ref={titleRef}
            initial={{ opacity: 0, y: 50 }}
            className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-tech"
          >
            Tech Fusion 2K25
          </motion.h1>
        </div>
      </div>

      {/* Holographic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,_rgba(255,255,255,0.1)_1px,_transparent_1px),_linear-gradient(90deg,_transparent_0%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:30px_30px] opacity-20" />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

        .font-tech {
          font-family: 'Orbitron', sans-serif;
        }
      `}</style>
    </motion.div>
  )
}