import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, Building, Heart, Shield, Target, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">About MediCare Clinic</h1>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  For over two decades, MediCare Clinic has been a trusted healthcare partner in our community. We
                  combine medical excellence with genuine compassion to provide care that makes a real difference in
                  people's lives.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Our mission is simple: to deliver exceptional, patient-centered healthcare that addresses your unique
                  needs and helps you achieve optimal wellness.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src="/modern-medical-clinic-building-exterior-healthcare.jpg" alt="MediCare Clinic Building" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-foreground">Our Mission</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    To provide accessible, high-quality healthcare services that prioritize patient well-being, foster
                    trust, and promote healthier communities through compassionate and comprehensive medical care.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <Heart className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-foreground">Our Vision</h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    To be the leading healthcare provider in our region, recognized for clinical excellence, innovative
                    care delivery, and an unwavering commitment to improving the health and quality of life for every
                    patient we serve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-secondary/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Core Values</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                These principles guide everything we do at MediCare Clinic.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Heart,
                  title: "Compassion",
                  description: "We treat every patient with kindness, empathy, and respect.",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We maintain the highest standards in medical care and service.",
                },
                {
                  icon: Shield,
                  title: "Integrity",
                  description: "We uphold honesty and ethical practices in all we do.",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description: "We work together with patients and colleagues for best outcomes.",
                },
              ].map((value) => (
                <Card key={value.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline / History */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">Our Journey</h2>
            <div className="mt-12">
              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />
                <div className="space-y-12">
                  {[
                    {
                      year: "2003",
                      title: "Foundation",
                      description:
                        "MediCare Clinic was founded with a vision to provide accessible, quality healthcare.",
                    },
                    {
                      year: "2010",
                      title: "Expansion",
                      description: "Expanded our facility to include specialized cardiology and pediatric departments.",
                    },
                    {
                      year: "2018",
                      title: "Technology Integration",
                      description: "Implemented cutting-edge electronic health records and telemedicine services.",
                    },
                    {
                      year: "2023",
                      title: "Community Recognition",
                      description: "Received the Regional Excellence in Healthcare Award for outstanding patient care.",
                    },
                  ].map((milestone, index) => (
                    <div
                      key={milestone.year}
                      className={`relative flex items-start gap-6 md:gap-0 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary md:left-1/2 md:-translate-x-1/2">
                        <Building className="h-3 w-3 text-primary-foreground" />
                      </div>
                      <div
                        className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                      >
                        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                          {milestone.year}
                        </span>
                        <h3 className="mt-2 text-lg font-semibold text-foreground">{milestone.title}</h3>
                        <p className="mt-1 text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
              Experience the MediCare Difference
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Join thousands of patients who trust us with their health.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-card text-foreground hover:bg-card/90" asChild>
                <Link href="/book">Book an Appointment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                asChild
              >
                <Link href="/doctors">Meet Our Doctors</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
