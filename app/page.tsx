"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  ChefHat,
  Users,
  Calendar,
  Award,
  Menu,
  X,
  MessageCircle,
  Globe,
  Utensils,
  Heart,
  Clock,
  Shield,
  Leaf,
  Bot,
} from "lucide-react"
import { LampDemo } from "@/components/ui/lamp"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will contact you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <ChefHat className="h-8 w-8 text-cyan-400" />
              <span className="ml-2 text-xl font-bold text-white">Sree Veerat Caters</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("pindi-vantalu")}
                  className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Pindi Vantalu
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-cyan-400 p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950 border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("pindi-vantalu")}
                className="block text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Pindi Vantalu
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative">
        <LampDemo />
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/vedire-raghuveer-reddy.png"
                alt="Vedire Raghuveer Reddy"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover border border-slate-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-6 rounded-2xl shadow-xl">
                <Award className="h-8 w-8 mb-2" />
                <p className="font-semibold">25+ Years</p>
                <p className="text-sm">Experience</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="bg-cyan-100 text-cyan-800 mb-4">About Us</Badge>
                <h2 className="text-4xl font-bold text-white mb-6">Meet Vedire Raghuveer Reddy</h2>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed">
                With over 25 years of culinary excellence, Vedire Raghuveer Reddy has built Sree Veerat Caters and
                Events into one of the most trusted names in traditional Indian catering. Our journey began with a
                simple vision: to bring authentic flavors and impeccable service to every celebration, from intimate
                local gatherings to grand national and international events.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                We offer the best quality of food at all costs, ensuring that every dish meets our exacting standards of
                taste, presentation, and hygiene. From corporate conferences in major cities to destination weddings
                abroad, we have successfully catered events across India and internationally, adapting our traditional
                recipes to suit diverse palates while maintaining authenticity.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                Our commitment to quality, tradition, and innovation has made us the preferred choice for discerning
                clients who value authenticity and excellence, whether they're hosting a local celebration or an
                international gathering.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">1000+</div>
                  <div className="text-slate-400">Events Catered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">50+</div>
                  <div className="text-slate-400">Signature Dishes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-800 mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent mb-6">
              Comprehensive Catering Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From traditional South Indian feasts to modern corporate events, we deliver exceptional culinary
              experiences tailored to your needs.
            </p>
          </div>

          {/* Services Grid with Glowing Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-cyan-400" />,
                title: "Wedding Catering",
                description:
                  "Complete wedding catering with traditional menus, custom decorations, and professional staff for your special day.",
                features: [
                  "Traditional South Indian menus",
                  "Destination wedding services",
                  "Custom decoration & setup",
                ],
              },
              {
                icon: <Calendar className="h-8 w-8 text-cyan-400" />,
                title: "Corporate Events",
                description:
                  "Professional catering for business meetings, conferences, and corporate celebrations with modern presentation.",
                features: ["Business lunch catering", "Conference & seminar meals", "Office party arrangements"],
              },
              {
                icon: <Shield className="h-8 w-8 text-cyan-400" />,
                title: "Quality Assurance",
                description:
                  "Premium homemade taste with natural ingredients, ensuring authentic flavors without any artificial additives.",
                features: ["No artificial colors", "No Ajinomoto", "100% homemade taste"],
              },
              {
                icon: <Star className="h-8 w-8 text-cyan-400" />,
                title: "Birthday Parties",
                description:
                  "Fun and festive birthday celebrations with customizable menus suitable for all age groups and preferences.",
                features: ["Kid-friendly options", "Custom birthday cakes", "Party decorations"],
              },
              {
                icon: <Award className="h-8 w-8 text-cyan-400" />,
                title: "Event Management",
                description:
                  "Complete event planning and management including venue decoration, entertainment coordination, and logistics.",
                features: ["Full event planning", "Venue decoration", "Entertainment coordination"],
              },
              {
                icon: <Globe className="h-8 w-8 text-cyan-400" />,
                title: "International Events",
                description:
                  "Global catering services with premium quality food delivered worldwide, adapting to local preferences while maintaining authenticity.",
                features: ["International reach", "Premium quality assurance", "Cultural adaptations"],
              },
            ].map((service, index) => (
              <div key={index} className="relative min-h-[20rem]">
                <div className="relative h-full rounded-2xl border border-slate-700 p-1">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className="relative h-full bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-cyan-500/20 rounded-full mr-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    </div>

                    <p className="text-slate-300 mb-6 flex-grow">{service.description}</p>

                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-slate-400">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Telangana Pindi Vantalu Section */}
      <section id="pindi-vantalu" className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Telangana Specialties</Badge>
            <h2 className="text-4xl font-bold bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent mb-6">
              Authentic Pindi Vantalu
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the rich culinary heritage of Telangana with our traditional Pindi Vantalu - authentic
              village-style snacks and sweets that bring the taste of rural Telangana to your celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">Traditional Snacks & Sweets</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Pindi Vantalu snacks represent the authentic taste of Telangana festivals and celebrations. Our master
                chefs prepare these traditional delicacies using time-honored recipes and the finest ingredients,
                ensuring every bite captures the essence of our cultural heritage.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                From crispy Murukulu to sweet Boorelu, each snack is carefully crafted to perfection. These traditional
                treats are perfect for festivals, special occasions, or whenever you want to experience the authentic
                flavors of Telangana cuisine.
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl border border-slate-700 p-1">
                <GlowingEffect
                  spread={30}
                  glow={true}
                  disabled={false}
                  proximity={48}
                  inactiveZone={0.1}
                  borderWidth={2}
                />
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Traditional Telangana Pindi Vantalu Snacks"
                  className="rounded-xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Signature Snacks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Heart className="h-6 w-6 text-orange-400" />,
                title: "Sakinalu",
                description: "Crispy ring-shaped snacks made with rice flour and spices",
              },
              {
                icon: <Utensils className="h-6 w-6 text-orange-400" />,
                title: "Harshalu",
                description: "Traditional sweet treats perfect for festive occasions",
              },
              {
                icon: <ChefHat className="h-6 w-6 text-orange-400" />,
                title: "Garelu",
                description: "Savory lentil fritters with authentic village flavors",
              },
              {
                icon: <Clock className="h-6 w-6 text-orange-400" />,
                title: "Murukulu",
                description: "Crispy spiral-shaped snacks made from rice flour and spices",
              },
              {
                icon: <Leaf className="h-6 w-6 text-orange-400" />,
                title: "Boorelu",
                description: "Sweet lentil dumplings in jaggery syrup, perfect for festivals",
              },
              {
                icon: <Star className="h-6 w-6 text-orange-400" />,
                title: "Ariselu",
                description: "Traditional rice flour sweet delicacy with sesame seeds",
              },
            ].map((snack, index) => (
              <div key={index} className="relative">
                <div className="relative rounded-xl border border-slate-700 p-1">
                  <GlowingEffect
                    spread={25}
                    glow={true}
                    disabled={false}
                    proximity={32}
                    inactiveZone={0.2}
                    borderWidth={1}
                  />
                  <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-orange-500/20 rounded-full">{snack.icon}</div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{snack.title}</h4>
                    <p className="text-slate-300 text-sm">{snack.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-300 mb-6">
              Experience the authentic taste of Telangana's culinary heritage at your next event
            </p>
            <Button
              onClick={() => window.open("tel:+919949198142")}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              <Phone className="h-5 w-5 mr-2" />
              Order Pindi Vantalu
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-800 mb-4">Gallery</Badge>
            <h2 className="text-4xl font-bold bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent mb-6">
              Our Culinary Experiences
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Witness the warmth and hospitality that defines our catering services through these memorable moments with
              our valued clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-aCZTnAJYi3ByRcKeTQQTyhwN9WIZXq.jpeg",
                alt: "Traditional Dining Experience - Group Gathering",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-4hDLKJlbiBOisqFQ12MNy5iugmJM09.jpeg",
                alt: "Intimate Corporate Meeting Setup",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-ryI3IFU7qXGSCaJBR0QRY825hgmKhX.jpeg",
                alt: "Festive Dining Celebration",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-pY71geI9bGK585M4J8D6fQItcMsZz4.jpeg",
                alt: "Community Feast Gathering",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-jseHndeoZP66PtD35pixghMD1K1xlL.jpeg",
                alt: "Traditional Home-style Catering",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-zahQOxZsFqEt9PED65gFfElb9DJs6y.jpeg",
                alt: "Warm Hospitality Experience",
              },
            ].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-800 mb-4">Testimonials</Badge>
            <h2 className="text-4xl font-bold bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                event: "Wedding Reception",
                rating: 5,
                text: "Sree Veerat Caters made our wedding day absolutely perfect! The food was exceptional, and the service was impeccable. All our guests are still talking about the delicious South Indian feast.",
              },
              {
                name: "Rajesh Kumar",
                event: "Corporate Event",
                rating: 5,
                text: "Professional, punctual, and delicious! They catered our annual company meeting and exceeded all expectations. The presentation was beautiful and the taste was outstanding.",
              },
              {
                name: "Lakshmi Devi",
                event: "Birthday Celebration",
                rating: 5,
                text: "Vedire sir and his team are amazing! They handled my daughter's birthday party with such care and attention to detail. The kids loved the food, and so did all the adults.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] hover:border-cyan-400/30 transition-all duration-500 bg-slate-900/50 border-slate-700 backdrop-blur-sm group"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-500 fill-current group-hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]"
                      />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 italic group-hover:text-slate-200 transition-colors duration-300">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {testimonial.event}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-800 mb-4">Contact Us</Badge>
            <h2 className="text-4xl font-bold bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent mb-6">
              Let's Plan Your Perfect Event
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to create an unforgettable culinary experience? Get in touch with us today for a personalized quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-500 group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="rounded-lg border-slate-600 bg-slate-800/50 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="rounded-lg border-slate-600 bg-slate-800/50 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="rounded-lg border-slate-600 bg-slate-800/50 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell us about your event requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="rounded-lg border-slate-600 bg-slate-800/50 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg transition-colors duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-xl bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-500 group">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-cyan-400 mt-1" />
                      <div>
                        <p className="font-semibold text-white">Phone</p>
                        <p className="text-slate-300">+91 99491 98142</p>
                        <p className="text-slate-300">+91 99081 83616</p>
                        <p className="text-slate-300">+91 70322 59167</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-cyan-400 mt-1" />
                      <div>
                        <p className="font-semibold text-white">Email</p>
                        <p className="text-slate-300">vedire.raghuveer@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-cyan-400 mt-1" />
                      <div>
                        <p className="font-semibold text-white">Address</p>
                        <p className="text-slate-300">
                          123 Catering Street
                          <br />
                          Hyderabad, Telangana 500001
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="mb-6">Call us now for immediate assistance and personalized service.</p>
                  <Button
                    className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                    onClick={() => window.open("tel:+919949198142")}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <ChefHat className="h-8 w-8 text-cyan-400" />
                <span className="ml-2 text-xl font-bold">Sree Veerat Caters</span>
              </div>
              <p className="text-slate-400 mb-4">
                Flavours of Tradition, Served with Elegance. Creating memorable culinary experiences for over 25 years.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-cyan-400 transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-cyan-400 transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("pindi-vantalu")}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Pindi Vantalu
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("gallery")} className="hover:text-cyan-400 transition-colors">
                    Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-cyan-400 transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-slate-400">
                <p>+91 99491 98142</p>
                <p>+91 70322 59167</p>
                <p>vedire.raghuveer@gmail.com</p>
                <p>Hyderabad, Telangana</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Sree Veerat Caters and Events. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        {/* Chatbot Button */}
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
          size="lg"
        >
          <Bot className="h-6 w-6" />
        </Button>

        {/* WhatsApp Button */}
        <Button
          onClick={() =>
            window.open(
              "https://wa.me/919949198142?text=Hello! I would like to inquire about your catering services.",
              "_blank",
            )
          }
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
          size="lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
