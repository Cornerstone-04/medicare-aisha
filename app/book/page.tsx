"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { doctors } from "@/lib/data"
import { Calendar, Check, ChevronRight, Mail, Phone, User } from "lucide-react"

type BookingStep = "doctor" | "datetime" | "details" | "confirmation"

interface BookingData {
  doctorId: string
  day: string
  time: string
  firstName: string
  lastName: string
  email: string
  phone: string
  reason: string
  isNewPatient: boolean
}

function BookingContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [currentStep, setCurrentStep] = useState<BookingStep>("doctor")
  const [booking, setBooking] = useState<BookingData>({
    doctorId: searchParams.get("doctor") || "",
    day: searchParams.get("day") || "",
    time: searchParams.get("time") || "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    isNewPatient: true,
  })

  const selectedDoctor = doctors.find((d) => d.id === booking.doctorId)

  useEffect(() => {
    if (booking.doctorId && currentStep === "doctor") {
      if (searchParams.get("doctor")) {
        setCurrentStep("datetime")
      }
    }
  }, [])

  const steps = [
    { id: "doctor", label: "Select Doctor" },
    { id: "datetime", label: "Date & Time" },
    { id: "details", label: "Your Details" },
    { id: "confirmation", label: "Confirmation" },
  ]

  const currentStepIndex = steps.findIndex((s) => s.id === currentStep)

  const handleNext = () => {
    const stepOrder: BookingStep[] = ["doctor", "datetime", "details", "confirmation"]
    const currentIndex = stepOrder.indexOf(currentStep)
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1])
    }
  }

  const handleBack = () => {
    const stepOrder: BookingStep[] = ["doctor", "datetime", "details", "confirmation"]
    const currentIndex = stepOrder.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1])
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case "doctor":
        return !!booking.doctorId
      case "datetime":
        return !!booking.day && !!booking.time
      case "details":
        return !!booking.firstName && !!booking.lastName && !!booking.email && !!booking.phone
      default:
        return false
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Progress Steps */}
      <nav aria-label="Progress" className="mb-10">
        <ol className="flex items-center justify-center">
          {steps.map((step, index) => (
            <li key={step.id} className={`flex items-center ${index < steps.length - 1 ? "flex-1" : ""}`}>
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    index < currentStepIndex
                      ? "bg-primary text-primary-foreground"
                      : index === currentStepIndex
                        ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index < currentStepIndex ? <Check className="h-5 w-5" /> : index + 1}
                </div>
                <span
                  className={`mt-2 hidden text-xs font-medium sm:block ${
                    index <= currentStepIndex ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`mx-2 h-0.5 flex-1 transition-colors sm:mx-4 ${
                    index < currentStepIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Step Content */}
      <Card className="border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl">
            {currentStep === "doctor" && "Choose Your Doctor"}
            {currentStep === "datetime" && "Select Date & Time"}
            {currentStep === "details" && "Your Information"}
            {currentStep === "confirmation" && "Appointment Confirmed!"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Step 1: Select Doctor */}
          {currentStep === "doctor" && (
            <div className="grid gap-4 sm:grid-cols-2">
              {doctors.map((doctor) => (
                <button
                  key={doctor.id}
                  onClick={() => setBooking((prev) => ({ ...prev, doctorId: doctor.id }))}
                  className={`flex items-start gap-4 rounded-lg border p-4 text-left transition-all ${
                    booking.doctorId === doctor.id
                      ? "border-primary bg-primary/5 ring-2 ring-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                    <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                    <p className="text-sm text-primary">{doctor.specialty}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{doctor.experience} years experience</p>
                  </div>
                  {booking.doctorId === doctor.id && <Check className="h-5 w-5 text-primary" />}
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Select Date & Time */}
          {currentStep === "datetime" && selectedDoctor && (
            <div className="space-y-6">
              <div>
                <Label className="mb-3 block text-base">Select Day</Label>
                <div className="flex flex-wrap gap-2">
                  {selectedDoctor.availability.map((day) => (
                    <button
                      key={day.day}
                      onClick={() =>
                        setBooking((prev) => ({
                          ...prev,
                          day: day.day,
                          time: "",
                        }))
                      }
                      className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                        booking.day === day.day
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {day.day}
                    </button>
                  ))}
                </div>
              </div>

              {booking.day && (
                <div>
                  <Label className="mb-3 block text-base">Select Time</Label>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
                    {selectedDoctor.availability
                      .find((d) => d.day === booking.day)
                      ?.slots.map((slot, idx) => (
                        <button
                          key={idx}
                          disabled={!slot.available}
                          onClick={() =>
                            setBooking((prev) => ({
                              ...prev,
                              time: slot.time,
                            }))
                          }
                          className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                            !slot.available
                              ? "cursor-not-allowed border-muted bg-muted text-muted-foreground line-through"
                              : booking.time === slot.time
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border hover:border-primary/50"
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                  </div>
                </div>
              )}

              {booking.day && booking.time && (
                <Card className="bg-secondary/50">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {booking.day} at {booking.time}
                      </p>
                      <p className="text-sm text-muted-foreground">with {selectedDoctor.name}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Step 3: Patient Details */}
          {currentStep === "details" && (
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <div className="relative mt-1.5">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="pl-10"
                      value={booking.firstName}
                      onChange={(e) =>
                        setBooking((prev) => ({
                          ...prev,
                          firstName: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <div className="relative mt-1.5">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="pl-10"
                      value={booking.lastName}
                      onChange={(e) =>
                        setBooking((prev) => ({
                          ...prev,
                          lastName: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative mt-1.5">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10"
                    value={booking.email}
                    onChange={(e) =>
                      setBooking((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <div className="relative mt-1.5">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    className="pl-10"
                    value={booking.phone}
                    onChange={(e) =>
                      setBooking((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="reason">Reason for Visit (optional)</Label>
                <Textarea
                  id="reason"
                  placeholder="Brief description of your symptoms or reason for appointment..."
                  className="mt-1.5 min-h-[100px]"
                  value={booking.reason}
                  onChange={(e) =>
                    setBooking((prev) => ({
                      ...prev,
                      reason: e.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <Label className="mb-3 block">Are you a new patient?</Label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setBooking((prev) => ({ ...prev, isNewPatient: true }))}
                    className={`flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                      booking.isNewPatient
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    Yes, I'm new
                  </button>
                  <button
                    onClick={() =>
                      setBooking((prev) => ({
                        ...prev,
                        isNewPatient: false,
                      }))
                    }
                    className={`flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                      !booking.isNewPatient
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    Returning patient
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === "confirmation" && selectedDoctor && (
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mt-4 text-2xl font-bold text-foreground">Booking Confirmed!</h2>
              <p className="mt-2 text-muted-foreground">A confirmation email has been sent to {booking.email}</p>

              <Card className="mt-8 text-left">
                <CardContent className="divide-y divide-border p-0">
                  <div className="flex items-center gap-4 p-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full">
                      <Image
                        src={selectedDoctor.image || "/placeholder.svg"}
                        alt={selectedDoctor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{selectedDoctor.name}</p>
                      <p className="text-sm text-primary">{selectedDoctor.specialty}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{booking.day}</p>
                      <p className="text-sm text-muted-foreground">at {booking.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {booking.firstName} {booking.lastName}
                      </p>
                      <p className="text-sm text-muted-foreground">{booking.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <Link href="/">Return to Home</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/book">Book Another</Link>
                </Button>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {currentStep !== "confirmation" && (
            <div className="mt-8 flex justify-between border-t border-border pt-6">
              <Button variant="outline" onClick={handleBack} disabled={currentStep === "doctor"}>
                Back
              </Button>
              <Button onClick={handleNext} disabled={!canProceed()}>
                {currentStep === "details" ? "Confirm Booking" : "Continue"}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default function BookPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <Suspense fallback={null}>
          <BookingContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
