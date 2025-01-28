import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"

emailjs.init("qZxycXhU8inKSo8iABzzB")

interface Participant {
  name: string
  phone: string
}

interface FormData {
  madAds: Participant[]
  coding: Participant[]
  designing: Participant[]
  itQuiz: Participant[]
  itManager: Participant[]
  surpriseEvent: Participant[]
  gaming: Participant
}

interface Props {
  isOpen: boolean
  onClose: () => void
}

type EventKey = keyof Omit<FormData, "gaming">

export default function RegistrationForm({ isOpen, onClose }: Props) {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormData>({
    madAds: Array(5).fill({ name: "", phone: "" }),
    coding: Array(2).fill({ name: "", phone: "" }),
    designing: Array(2).fill({ name: "", phone: "" }),
    itQuiz: Array(2).fill({ name: "", phone: "" }),
    itManager: [{ name: "", phone: "" }],
    surpriseEvent: Array(2).fill({ name: "", phone: "" }),
    gaming: { name: "", phone: "" },
  })

  const updateParticipant = (event: EventKey | "gaming", index: number, field: "name" | "phone", value: string) => {
    setFormData((prev) => {
      const newData = { ...prev }
      if (event === "gaming") {
        newData[event] = { ...newData[event], [field]: value }
      } else {
        newData[event][index] = {
          ...newData[event][index],
          [field]: value,
        }
      }
      return newData
    })
  }

  const validateForm = () => {
    const phoneRegex = /^[6-9]\d{9}$/
    const nameRegex = /^[a-zA-Z\s]{2,30}$/
    let isValid = true

    Object.entries(formData).forEach(([event, participants]) => {
      if (Array.isArray(participants)) {
        participants.forEach((participant, index) => {
          if (!nameRegex.test(participant.name)) {
            toast.error(`Invalid name for ${event} participant ${index + 1}`)
            isValid = false
          }
          if (!phoneRegex.test(participant.phone)) {
            toast.error(`Invalid phone number for ${event} participant ${index + 1}`)
            isValid = false
          }
        })
      } else if (event === "gaming") {
        if (!nameRegex.test(participants.name)) {
          toast.error("Invalid name for gaming participant")
          isValid = false
        }
        if (!phoneRegex.test(participants.phone)) {
          toast.error("Invalid phone number for gaming participant")
          isValid = false
        }
      }
    })

    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    try {
      const templateParams = {
        to_email: "bhuvanshetty2018@gmail.com",
        from_name: "Event Registration System",
        message: `
Mad Ads Team:
${formData.madAds.map((p, i) => `Member ${i + 1}: ${p.name} (${p.phone})`).join("\n")}

Coding Team:
${formData.coding.map((p, i) => `Member ${i + 1}: ${p.name} (${p.phone})`).join("\n")}

Designing Team:
${formData.designing.map((p, i) => `Member ${i + 1}: ${p.name} (${p.phone})`).join("\n")}

IT Quiz Team:
${formData.itQuiz.map((p, i) => `Member ${i + 1}: ${p.name} (${p.phone})`).join("\n")}

IT Manager:
${formData.itManager[0].name} (${formData.itManager[0].phone})

Surprise Event Team:
${formData.surpriseEvent.map((p, i) => `Member ${i + 1}: ${p.name} (${p.phone})`).join("\n")}

Gaming:
${formData.gaming.name} (${formData.gaming.phone})
`,
      }

      const response = await emailjs.send(
        "service_o17yyqp",
        "template_0f6e8pl",
        templateParams,
        "x2oCH1LfVilF8i5ij",
      )

      console.log("EmailJS Response:", response)

      if (response.status === 200) {
        toast.success("Registration successful!")
        onClose()
      } else {
        throw new Error(`EmailJS returned status ${response.status}`)
      }
    } catch (error) {
      console.error("EmailJS Error:", error)
      toast.error("Registration failed. Please try again.")
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="container mx-auto px-4 py-8 min-h-screen flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gray-900 rounded-xl p-6 w-full max-w-4xl mx-auto relative">
              <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-white">
                <X />
              </button>

              <h2 className="text-3xl font-bold text-center text-purple-400 mb-2">Registration Form</h2>
              <p className="text-red-500 text-center font-semibold mb-6">
                Only 2nd Year Students are Eligible to Register
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                {/* Mad Ads */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">Mad Ads Team (5 Members)</h3>
                  {formData.madAds.map((participant, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name={`madAds_name_${index + 1}`}
                        value={participant.name}
                        onChange={(e) => updateParticipant("madAds", index, "name", e.target.value)}
                        placeholder={`Member ${index + 1} Name`}
                        className="bg-gray-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
                        required
                      />
                      <input
                        type="tel"
                        name={`madAds_phone_${index + 1}`}
                        value={participant.phone}
                        onChange={(e) => updateParticipant("madAds", index, "phone", e.target.value)}
                        placeholder="Phone Number"
                        className="bg-gray-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
                        required
                      />
                    </div>
                  ))}
                </div>

                {/* Other Events */}
                {(["coding", "designing", "itQuiz", "surpriseEvent"] as const).map((event) => (
                  <div key={event} className="space-y-4">
                    <h3 className="text-xl font-semibold text-purple-400 capitalize">
                      {event.replace(/([A-Z])/g, " $1").trim()} Team (2 Members)
                    </h3>
                    {formData[event].map((participant, index) => (
                      <div key={index} className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name={`${event}_name_${index + 1}`}
                          value={participant.name}
                          onChange={(e) => updateParticipant(event, index, "name", e.target.value)}
                          placeholder={`Member ${index + 1} Name`}
                          className="bg-gray-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
                          required
                        />
                        <input
                          type="tel"
                          name={`${event}_phone_${index + 1}`}
                          value={participant.phone}
                          onChange={(e) => updateParticipant(event, index, "phone", e.target.value)}
                          placeholder="Phone Number"
                          className="bg-gray-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
                          required
                        />
                      </div>
                    ))}
                  </div>
                ))}

                {/* Individual Events */}
                {(["itManager", "gaming"] as const).map((event) => (
                  <div key={event} className="space-y-4">
                    <h3 className="text-xl font-semibold text-purple-400 capitalize">
                      {event.replace(/([A-Z])/g, " $1").trim()} (Individual)
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name={`${event}_name`}
                        value={event === "gaming" ? formData.gaming.name : formData[event][0].name}
                        onChange={(e) => updateParticipant(event, 0, "name", e.target.value)}
                        placeholder="Participant Name"
                        className="bg-gray-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
                        required
                      />
                      <input
                        type="tel"
                        name={`${event}_phone`}
                        value={event === "gaming" ? formData.gaming.phone : formData[event][0].phone}
                        onChange={(e) => updateParticipant(event, 0, "phone", e.target.value)}
                        placeholder="Phone Number"
                        className="bg-gray-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
                        required
                      />
                    </div>
                  </div>
                ))}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Submit Registration
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}