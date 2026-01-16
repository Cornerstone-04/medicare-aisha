import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { doctors } from "@/lib/data"
import { Award, Calendar, Clock, Globe } from "lucide-react"

export default function DoctorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Meet Our Doctors</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Our team of board-certified physicians combines years of experience with a genuine commitment to your
                health. Get to know the experts who will be caring for you.
              </p>
            </div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {doctors.map((doctor) => (
                <Card key={doctor.id} className="overflow-hidden border-border transition-shadow hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative aspect-square w-full sm:aspect-[3/4] sm:w-48 lg:w-56">
                        <Image
                          src={doctor.image || "/placeholder.svg"}
                          alt={doctor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div>
                          <h2 className="text-xl font-semibold text-foreground">{doctor.name}</h2>
                          <p className="text-primary">{doctor.specialty}</p>
                          <Badge variant="secondary" className="mt-2 font-normal">
                            {doctor.credentials}
                          </Badge>
                        </div>

                        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{doctor.bio}</p>

                        <div className="mt-4 space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Award className="h-4 w-4 text-primary" />
                            <span>{doctor.experience} years experience</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Globe className="h-4 w-4 text-primary" />
                            <span>{doctor.languages.join(", ")}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>Available {doctor.availability.map((d) => d.day.slice(0, 3)).join(", ")}</span>
                          </div>
                        </div>

                        <div className="mt-auto flex gap-3 pt-6">
                          <Button asChild className="flex-1">
                            <Link href={`/book?doctor=${doctor.id}`}>
                              <Calendar className="mr-2 h-4 w-4" />
                              Book Appointment
                            </Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link href={`/schedule?doctor=${doctor.id}`}>View Schedule</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-foreground">Need Help Choosing a Doctor?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Our staff can help match you with the right physician based on your healthcare needs.
            </p>
            <Button size="lg" variant="secondary" className="mt-8 bg-card text-foreground hover:bg-card/90" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
