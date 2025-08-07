'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { contactInfo, certificates } from '@/data/portfolio'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // For now, just open email client
    window.open(`mailto:${contactInfo.email}?subject=Portfolio Contact&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`)
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let&apos;s discuss your next project or collaboration opportunity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>{contactInfo.email}</span>
                </motion.a>
                <motion.a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <Phone className="w-6 h-6 text-green-400" />
                  <span>{contactInfo.phone}</span>
                </motion.a>
                <motion.div
                  className="flex items-center space-x-4 text-gray-300"
                  whileHover={{ x: 10 }}
                >
                  <MapPin className="w-6 h-6 text-red-400" />
                  <span>{contactInfo.location}</span>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <motion.a
                  href={`https://${contactInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href={`https://${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={24} />
                </motion.a>
               
              </div>
            </div>

            {/* Certificates */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Certifications
              </h3>
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 rounded-lg p-4"
                  >
                    <h4 className="text-white font-semibold">{cert.name}</h4>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    <p className="text-gray-500 text-xs">{cert.date}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400">
            © 2024 Arbash Humayun. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
