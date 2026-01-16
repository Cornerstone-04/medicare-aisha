export interface Doctor {
  id: string
  name: string
  specialty: string
  credentials: string
  bio: string
  image: string
  experience: number
  languages: string[]
  availability: DaySchedule[]
}

export interface DaySchedule {
  day: string
  slots: TimeSlot[]
}

export interface TimeSlot {
  time: string
  available: boolean
}

export interface Service {
  id: string
  name: string
  description: string
  icon: string
}

export const doctors: Doctor[] = [
  {
    id: "dr-sarah-chen",
    name: "Dr. Sarah Chen",
    specialty: "Family Medicine",
    credentials: "MD, FAAFP",
    bio: "Dr. Chen has been practicing family medicine for over 15 years, specializing in preventive care and chronic disease management. She is dedicated to building lasting relationships with her patients.",
    image: "/professional-female-doctor-portrait-headshot.jpg",
    experience: 15,
    languages: ["English", "Mandarin"],
    availability: [
      {
        day: "Monday",
        slots: [
          { time: "9:00 AM", available: true },
          { time: "9:30 AM", available: true },
          { time: "10:00 AM", available: false },
          { time: "10:30 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "2:30 PM", available: false },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        day: "Tuesday",
        slots: [
          { time: "9:00 AM", available: false },
          { time: "9:30 AM", available: true },
          { time: "10:00 AM", available: true },
          { time: "10:30 AM", available: true },
          { time: "11:00 AM", available: false },
          { time: "2:00 PM", available: true },
          { time: "2:30 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        day: "Wednesday",
        slots: [
          { time: "9:00 AM", available: true },
          { time: "9:30 AM", available: true },
          { time: "10:00 AM", available: true },
          { time: "10:30 AM", available: false },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: false },
          { time: "2:30 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        day: "Thursday",
        slots: [
          { time: "9:00 AM", available: true },
          { time: "9:30 AM", available: false },
          { time: "10:00 AM", available: true },
          { time: "10:30 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "2:30 PM", available: true },
          { time: "3:00 PM", available: false },
        ],
      },
      {
        day: "Friday",
        slots: [
          { time: "9:00 AM", available: true },
          { time: "9:30 AM", available: true },
          { time: "10:00 AM", available: false },
          { time: "10:30 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "2:30 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
    ],
  },
  {
    id: "dr-michael-rodriguez",
    name: "Dr. Michael Rodriguez",
    specialty: "Internal Medicine",
    credentials: "MD, ABIM",
    bio: "Dr. Rodriguez specializes in diagnosing and treating complex medical conditions in adults. His patient-centered approach focuses on comprehensive care and wellness optimization.",
    image: "/professional-male-doctor-portrait-headshot.jpg",
    experience: 12,
    languages: ["English", "Spanish"],
    availability: [
      {
        day: "Monday",
        slots: [
          { time: "8:00 AM", available: true },
          { time: "8:30 AM", available: true },
          { time: "9:00 AM", available: true },
          { time: "9:30 AM", available: false },
          { time: "10:00 AM", available: true },
          { time: "1:00 PM", available: true },
          { time: "1:30 PM", available: true },
          { time: "2:00 PM", available: false },
        ],
      },
      {
        day: "Tuesday",
        slots: [
          { time: "8:00 AM", available: false },
          { time: "8:30 AM", available: true },
          { time: "9:00 AM", available: true },
          { time: "9:30 AM", available: true },
          { time: "10:00 AM", available: true },
          { time: "1:00 PM", available: false },
          { time: "1:30 PM", available: true },
          { time: "2:00 PM", available: true },
        ],
      },
      {
        day: "Wednesday",
        slots: [
          { time: "8:00 AM", available: true },
          { time: "8:30 AM", available: true },
          { time: "9:00 AM", available: false },
          { time: "9:30 AM", available: true },
          { time: "10:00 AM", available: true },
          { time: "1:00 PM", available: true },
          { time: "1:30 PM", available: true },
          { time: "2:00 PM", available: true },
        ],
      },
      {
        day: "Thursday",
        slots: [
          { time: "8:00 AM", available: true },
          { time: "8:30 AM", available: false },
          { time: "9:00 AM", available: true },
          { time: "9:30 AM", available: true },
          { time: "10:00 AM", available: false },
          { time: "1:00 PM", available: true },
          { time: "1:30 PM", available: true },
          { time: "2:00 PM", available: true },
        ],
      },
      {
        day: "Friday",
        slots: [
          { time: "8:00 AM", available: true },
          { time: "8:30 AM", available: true },
          { time: "9:00 AM", available: true },
          { time: "9:30 AM", available: true },
          { time: "10:00 AM", available: true },
          { time: "1:00 PM", available: false },
          { time: "1:30 PM", available: true },
          { time: "2:00 PM", available: true },
        ],
      },
    ],
  },
  {
    id: "dr-emily-thompson",
    name: "Dr. Emily Thompson",
    specialty: "Pediatrics",
    credentials: "MD, FAAP",
    bio: "Dr. Thompson is passionate about children's health and development. She creates a warm, welcoming environment for young patients and their families.",
    image: "/professional-female-pediatrician-doctor-portrait.jpg",
    experience: 10,
    languages: ["English", "French"],
    availability: [
      {
        day: "Monday",
        slots: [
          { time: "9:00 AM", available: true },
          { time: "9:30 AM", available: false },
          { time: "10:00 AM", available: true },
          { time: "10:30 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "2:30 PM", available: true },
          { time: "3:00 PM", available: false },
        ],
      },
      {
        day: "Tuesday",
        slots: [
          { time: "9:00 AM", available: true },
          { time: "9:30 AM", available: true },
          { time: "10:00 AM", available: true },
          { time: "10:30 AM", available: false },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: false },
          { time: "2:30 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        day: "Wednesday",
        slots: [
          { time: "9:00 AM", available: false },
          { time: "9:30 AM", available: true },
          { time: "10:00 AM", available: true },
          { time: "10:30 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "2:30 PM", available: false },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        day: "Thursday",
        slots: [
          { time: "9:00 AM", available: true },
          { time: "9:30 AM", available: true },
          { time: "10:00 AM", available: false },
          { time: "10:30 AM", available: true },
          { time: "11:00 AM", available: false },
          { time: "2:00 PM", available: true },
          { time: "2:30 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
      {
        day: "Friday",
        slots: [
          { time: "9:00 AM", available: true },
          { time: "9:30 AM", available: true },
          { time: "10:00 AM", available: true },
          { time: "10:30 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "2:00 PM", available: true },
          { time: "2:30 PM", available: true },
          { time: "3:00 PM", available: true },
        ],
      },
    ],
  },
  {
    id: "dr-james-wilson",
    name: "Dr. James Wilson",
    specialty: "Cardiology",
    credentials: "MD, FACC",
    bio: "Dr. Wilson is a board-certified cardiologist with expertise in preventive cardiology and heart disease management. He is committed to helping patients achieve optimal heart health.",
    image: "/professional-male-cardiologist-doctor-portrait.jpg",
    experience: 18,
    languages: ["English"],
    availability: [
      {
        day: "Monday",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "10:30 AM", available: true },
          { time: "11:00 AM", available: false },
          { time: "11:30 AM", available: true },
          { time: "3:00 PM", available: true },
          { time: "3:30 PM", available: true },
          { time: "4:00 PM", available: true },
        ],
      },
      {
        day: "Wednesday",
        slots: [
          { time: "10:00 AM", available: true },
          { time: "10:30 AM", available: false },
          { time: "11:00 AM", available: true },
          { time: "11:30 AM", available: true },
          { time: "3:00 PM", available: false },
          { time: "3:30 PM", available: true },
          { time: "4:00 PM", available: true },
        ],
      },
      {
        day: "Friday",
        slots: [
          { time: "10:00 AM", available: false },
          { time: "10:30 AM", available: true },
          { time: "11:00 AM", available: true },
          { time: "11:30 AM", available: true },
          { time: "3:00 PM", available: true },
          { time: "3:30 PM", available: true },
          { time: "4:00 PM", available: false },
        ],
      },
    ],
  },
]

export const services: Service[] = [
  {
    id: "primary-care",
    name: "Primary Care",
    description:
      "Comprehensive healthcare for all ages including preventive care, health screenings, and management of chronic conditions.",
    icon: "stethoscope",
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description:
      "Specialized care for infants, children, and adolescents including well-child visits, immunizations, and developmental assessments.",
    icon: "baby",
  },
  {
    id: "cardiology",
    name: "Cardiology",
    description:
      "Expert diagnosis and treatment of heart conditions including ECG, stress testing, and cardiovascular disease management.",
    icon: "heart",
  },
  {
    id: "laboratory",
    name: "Laboratory Services",
    description:
      "On-site blood work, diagnostic testing, and quick results to support accurate diagnosis and treatment planning.",
    icon: "flask",
  },
  {
    id: "vaccinations",
    name: "Vaccinations",
    description:
      "Complete immunization services for children and adults including flu shots, travel vaccines, and routine immunizations.",
    icon: "syringe",
  },
  {
    id: "telehealth",
    name: "Telehealth",
    description:
      "Convenient virtual consultations from the comfort of your home for follow-ups, minor illnesses, and medical advice.",
    icon: "video",
  },
]
