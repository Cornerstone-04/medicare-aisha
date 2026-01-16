"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, Clock, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Contact Us</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We're here to help. Reach out to us with any questions, concerns, or to schedule your appointment.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
                <p className="mt-4 text-muted-foreground">
                  Our friendly staff is ready to assist you with scheduling, insurance questions, or general inquiries.
                </p>

                <div className="mt-8 space-y-6">
                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Location</h3>
                        <p className="mt-1 text-muted-foreground">
                          123 Medical Center Drive, Suite 100
                          <br />
                          Healthcare City, HC 12345
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <p className="mt-1 text-muted-foreground">
                          Main:{" "}
                          <a href="tel:+1234567890" className="text-primary hover:underline">
                            (123) 456-7890
                          </a>
                          <br />
                          Fax: (123) 456-7891
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="mt-1 text-muted-foreground">
                          General:{" "}
                          <a href="mailto:info@medicare.com" className="text-primary hover:underline">
                            info@medicare.com
                          </a>
                          <br />
                          Appointments:{" "}
                          <a href="mailto:appointments@medicare.com" className="text-primary hover:underline">
                            appointments@medicare.com
                          </a>
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Office Hours</h3>
                        <div className="mt-1 space-y-1 text-muted-foreground">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 2:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardContent className="p-6 sm:p-8">
                    {isSubmitted ? (
                      <div className="py-12 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-foreground">Message Sent!</h3>
                        <p className="mt-2 text-muted-foreground">
                          Thank you for contacting us. We'll get back to you within 1-2 business days.
                        </p>
                        <Button
                          className="mt-6"
                          onClick={() => {
                            setIsSubmitted(false)
                            setFormData({
                              name: "",
                              email: "",
                              phone: "",
                              subject: "",
                              message: "",
                            })
                          }}
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            required
                            className="mt-1.5"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                          />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              className="mt-1.5"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  email: e.target.value,
                                }))
                              }
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                              id="phone"
                              type="tel"
                              className="mt-1.5"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  phone: e.target.value,
                                }))
                              }
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="subject">Subject *</Label>
                          <Select
                            value={formData.subject}
                            onValueChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                subject: value,
                              }))
                            }
                          >
                            <SelectTrigger className="mt-1.5">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="appointment">Appointment Inquiry</SelectItem>
                              <SelectItem value="billing">Billing Question</SelectItem>
                              <SelectItem value="insurance">Insurance Inquiry</SelectItem>
                              <SelectItem value="records">Medical Records</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            required
                            className="mt-1.5 min-h-[150px]"
                            placeholder="How can we help you?"
                            value={formData.message}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                message: e.target.value,
                              }))
                            }
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                          Send Message
                        </Button>

                        <p className="text-center text-sm text-muted-foreground">
                          For urgent matters, please call us directly at{" "}
                          <a href="tel:+1234567890" className="text-primary hover:underline">
                            (123) 456-7890
                          </a>
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="border-t border-border bg-secondary/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-foreground">Find Us</h2>
            <div className="aspect-[16/9] overflow-hidden rounded-xl bg-muted md:aspect-[21/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1637176262866!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MediCare Clinic Location"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
