import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { services } from "@/lib/data"
import { Activity, ArrowRight, Baby, Beaker, Heart, Stethoscope, Syringe, Video } from "lucide-react"

const iconMap: { [key: string]: React.ElementType } = {
  stethoscope: Stethoscope,
  baby: Baby,
  heart: Heart,
  flask: Beaker,
  syringe: Syringe,
  video: Video,
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Medical Services</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We offer a comprehensive range of healthcare services designed to meet all your medical needs. From
                preventive care to specialized treatments, our expert team is here to help you achieve optimal health.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const IconComponent = iconMap[service.icon] || Activity
                return (
                  <Card
                    key={service.id}
                    className="group flex flex-col border-border transition-all hover:border-primary/30 hover:shadow-lg"
                  >
                    <CardContent className="flex flex-1 flex-col p-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-primary/10">
                        <IconComponent className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="mt-5 text-xl font-semibold text-foreground">{service.name}</h2>
                      <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{service.description}</p>
                      <Button
                        variant="ghost"
                        className="mt-4 w-fit px-0 text-primary hover:bg-transparent hover:text-primary/80"
                        asChild
                      >
                        <Link href="/book">
                          Book Appointment
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Insurance Section */}
        <section className="bg-secondary/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">Insurance & Payment</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                We accept most major insurance plans and offer flexible payment options to ensure quality care is
                accessible to everyone.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Blue Cross Blue Shield",
                "Aetna",
                "Cigna",
                "UnitedHealthcare",
                "Medicare",
                "Medicaid",
                "Humana",
                "Kaiser Permanente",
              ].map((insurance) => (
                <Card key={insurance} className="text-center">
                  <CardContent className="p-4">
                    <p className="font-medium text-foreground">{insurance}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Don't see your insurance listed? Contact us to verify coverage.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-foreground">Need Help Choosing a Service?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Our team is here to help you find the right care for your needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-card text-foreground hover:bg-card/90" asChild>
                <Link href="/contact">Contact Us</Link>
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
