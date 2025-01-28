import { motion } from "framer-motion"

interface Coordinator {
  image: string
  name: string
  designation: string
}

const staffCoordinator: Coordinator = {
  image: "/src/components/neema.jpg",
  name: "Prof. Neema H",
  designation: "Assistant Professor",
}

const studentCoordinators: Coordinator[][] = [
  // Row 1 - 2 coordinators
  [
    { image: "/src/components/Bhuvan.jpg", name: "Bhuvan Shetty", designation: "Student Coordinator" },
    { image: "/src/components/adithya.jpg", name: "Adithya G", designation: "Student Coordinator" },
  ],
  // Row 2 - 3 coordinators
  [
    { image: "/src/components/shivani.jpg", name: "Shivani Rao", designation: "Student Coordinator" },
    { image: "/src/components/ranjith.jpg", name: "Ranjeeth", designation: "Student Coordinator" },
    { image: "/src/components/jenita.jpg", name: "Jenita D Costa", designation: "Student Coordinator" },
  ],
  // Row 3 - 5 coordinators
  [
    { image: "/src/components/shraddha.jpg", name: "Shraddha B D", designation: "Student Coordinator" },
    { image: "/src/components/thripthi.jpg", name: "Thripthi", designation: "Student Coordinator" },
    { image: "/src/components/chaithanya.jpg", name: "Chaithanya", designation: "Student Coordinator" },
    { image: "/src/components/raksha.JPG", name: "Raksha Shetty", designation: "Student Coordinator" },
    { image: "/src/components/prajna.jpg", name: "Prajna K", designation: "Student Coordinator" },
  ],
  // Row 4 - 5 coordinators
  [
    { image: "/src/components/kanya.jpg", name: "Kanya Shenoy", designation: "Student Coordinator" },
    { image: "/src/components/disha.jpg", name: "Disha M T", designation: "Student Coordinator" },
    { image: "/src/components/karthik.jpg", name: "PG Karthik", designation: "Student Coordinator" },
    { image: "/src/components/dhanush.JPG", name: "Dhanush H", designation: "Student Coordinator" },
    { image: "/src/components/chetan.JPG", name: "Chethan", designation: "Student Coordinator" },
  ],
]

export default function CoordinatorsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Staff Coordinator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-12 font-serif tracking-wide">STAFF COORDINATOR</h2>
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 rounded-full overflow-hidden mb-4 ring-4 ring-purple-500">
            <img
              src={staffCoordinator.image || "/placeholder.svg"}
              alt={staffCoordinator.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold text-white font-sans">{staffCoordinator.name}</h3>
          <p className="text-gray-300 font-light">{staffCoordinator.designation}</p>
        </div>
      </motion.div>

      {/* Student Coordinators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-12 font-serif tracking-wide">STUDENT COORDINATORS</h2>
        <div className="space-y-12">
          {studentCoordinators.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-8 flex-wrap">
              {row.map((coordinator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-3 ring-2 ring-purple-500">
                    <img
                      src={coordinator.image || "/placeholder.svg"}
                      alt={coordinator.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-white font-sans">{coordinator.name}</h3>
                  <p className="text-sm text-gray-300">{coordinator.designation}</p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}