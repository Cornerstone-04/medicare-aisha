"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { doctors } from "@/lib/data"
import { Calendar, Clock } from "lucide-react"

function ScheduleContent() {
  const searchParams = useSearchParams()
  const doctorParam = searchParams.get("doctor")
  const [selectedDoctor, setSelectedDoctor] = useState(doctorParam || doctors[0].id)

  const doctor = doctors.find((d) => d.id === selectedDoctor) || doctors[0]

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Doctor Selector */}
        <div className="mb-8">
          <label className="mb-2 block text-sm font-medium text-foreground">Select Doctor</label>
          <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
            <SelectTrigger className="w-full max-w-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {doctors.map((doc) => (
                <SelectItem key={doc.id} value={doc.id}>
                  {doc.name} - {doc.specialty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Doctor Info Sidebar */}
          <Card className="h-fit">
            <CardContent className="p-6">
              <div className="relative mx-auto aspect-square w-32 overflow-hidden rounded-full">
                <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
              </div>
              <div className="mt-4 text-center">
                <h2 className="text-lg font-semibold text-foreground">{doctor.name}</h2>
                <p className="text-primary">{doctor.specialty}</p>
                <Badge variant="secondary" className="mt-2 font-normal">
                  {doctor.credentials}
                </Badge>
              </div>
              <div className="mt-6 space-y-3 border-t border-border pt-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{doctor.experience} years experience</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Languages:</p>
                  <p>{doctor.languages.join(", ")}</p>
                </div>
              </div>
              <Button className="mt-6 w-full" asChild>
                <Link href={`/book?doctor=${doctor.id}`}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Appointment
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Schedule Grid */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-xl">Weekly Availability</CardTitle>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="h-3 w-3 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Available</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="h-3 w-3 rounded-full bg-muted" />
                  <span className="text-muted-foreground">Booked</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <div className="min-w-[600px]">
                  {/* Day Headers */}
                  <div className="mb-4 grid grid-cols-5 gap-3">
                    {doctor.availability.map((day) => (
                      <div key={day.day} className="rounded-lg bg-secondary/50 p-3 text-center">
                        <p className="font-semibold text-foreground">{day.day}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {day.slots.filter((s) => s.available).length} slots available
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Time Slots */}
                  <div className="grid grid-cols-5 gap-3">
                    {doctor.availability.map((day) => (
                      <div key={day.day} className="space-y-2">
                        {day.slots.map((slot, idx) => (
                          <button
                            key={`${day.day}-${idx}`}
                            disabled={!slot.available}
                            className={`w-full rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                              slot.available
                                ? "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                                : "cursor-not-allowed bg-muted text-muted-foreground line-through"
                            }`}
                            onClick={() => {
                              if (slot.available) {
                                window.location.href = `/book?doctor=${doctor.id}&day=${day.day}&time=${encodeURIComponent(slot.time)}`
                              }
                            }}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-6 text-center text-sm text-muted-foreground">
                Click on an available time slot to book an appointment, or use the{" "}
                <Link href={`/book?doctor=${doctor.id}`} className="text-primary underline-offset-4 hover:underline">
                  booking form
                </Link>{" "}
                for more options.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default function SchedulePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/30 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Doctor's Schedule</h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              View availability and book your appointment at a time that works for you.
            </p>
          </div>
        </section>

        <Suspense fallback={<div className="flex min-h-[400px] items-center justify-center">Loading...</div>}>
          <ScheduleContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
