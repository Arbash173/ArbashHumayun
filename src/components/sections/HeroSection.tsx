'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Scene } from '@/components/3d/Scene'
import { FloatingParticles } from '@/components/3d/FloatingParticles'
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react'
import { contactInfo } from '@/data/portfolio'
import { scrollToSection } from '@/lib/utils'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene className="w-full h-full">
          <FloatingParticles count={1500} />
        </Scene>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Arbash Humayun
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-blue-400 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Web Developer
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full Stack Web Developer with 3+ years of experience building 
            responsive, accessible, and high-performance web applications using 
            React.js, Next.js, and Angular. Skilled in Node.js and REST API 
            development, with hands-on experience in AWS cloud services, Docker 
            containerization, and implementing CI/CD pipelines.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              variant="gradient"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="group"
            >
              Get In Touch
              <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="border-white text-white hover:bg-white hover:text-black"
            >
              View Projects
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href={`mailto:${contactInfo.email}`}
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={24} />
            </motion.a>
            <motion.a
              href={`https://${contactInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href={`https://${contactInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator - Fixed positioning */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
          className="cursor-pointer"
        >
          <ArrowDown className="h-6 w-6 text-white" />
        </motion.div>
      </motion.div>
    </section>
  )
}
