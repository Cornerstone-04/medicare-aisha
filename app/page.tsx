import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { doctors, services } from "@/lib/data"
import { ArrowRight, Calendar, CheckCircle2, Clock, Heart, Shield, Star, Stethoscope, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="max-w-xl">
                <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Accepting New Patients
                </p>
                <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Your Health, Our Priority
                </h1>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                  Experience compassionate, personalized healthcare from our team of dedicated medical professionals.
                  We're here to support your wellness journey every step of the way.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link href="/book">
                      Book Appointment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/services">Our Services</Link>
                  </Button>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Same-Day Appointments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Insurance Accepted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Telehealth Available</span>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/modern-medical-clinic-interior-with-friendly-docto.jpg"
                    alt="MediCare Clinic - Modern healthcare facility"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <Card className="absolute -bottom-6 -left-6 w-64 shadow-lg">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">4.9</p>
                      <p className="text-sm text-muted-foreground">Patient Rating</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border bg-card py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { value: "20+", label: "Years of Excellence" },
                { value: "15K+", label: "Patients Served" },
                { value: "12", label: "Expert Physicians" },
                { value: "98%", label: "Patient Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Why Choose MediCare?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                We combine cutting-edge medical expertise with a compassionate approach to deliver healthcare that truly
                makes a difference.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Heart,
                  title: "Patient-Centered Care",
                  description:
                    "We listen to your concerns and create personalized treatment plans tailored to your unique needs.",
                },
                {
                  icon: Users,
                  title: "Expert Medical Team",
                  description:
                    "Our board-certified physicians bring decades of combined experience across multiple specialties.",
                },
                {
                  icon: Clock,
                  title: "Convenient Scheduling",
                  description: "Easy online booking with same-day appointments available to fit your busy schedule.",
                },
                {
                  icon: Shield,
                  title: "Quality & Safety",
                  description:
                    "We maintain the highest standards of care with state-of-the-art facilities and protocols.",
                },
              ].map((feature) => (
                <Card key={feature.title} className="border-border bg-card transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="bg-secondary/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Services</h2>
                <p className="mt-2 max-w-xl text-muted-foreground">
                  Comprehensive healthcare services designed to meet all your medical needs under one roof.
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((service) => (
                <Card
                  key={service.id}
                  className="group border-border bg-card transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary/10">
                      <Stethoscope className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{service.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Doctors Preview */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Meet Our Doctors</h2>
                <p className="mt-2 max-w-xl text-muted-foreground">
                  Our team of experienced, compassionate physicians is dedicated to providing exceptional care.
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/doctors">
                  View All Doctors
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {doctors.map((doctor) => (
                <Card key={doctor.id} className="group overflow-hidden border-border transition-shadow hover:shadow-md">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                    <p className="text-sm text-primary">{doctor.specialty}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{doctor.credentials}</p>
                    <Button variant="outline" size="sm" className="mt-4 w-full bg-transparent" asChild>
                      <Link href={`/book?doctor=${doctor.id}`}>Book Appointment</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">Ready to Schedule Your Visit?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Take the first step towards better health. Book your appointment online or call us today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-card text-foreground hover:bg-card/90" asChild>
                <Link href="/book">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Online
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="tel:+1234567890">Call (123) 456-7890</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
