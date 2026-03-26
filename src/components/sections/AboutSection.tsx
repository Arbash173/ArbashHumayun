'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, GraduationCap } from 'lucide-react'
import { education, languages } from '@/data/portfolio'
import { formatDate } from '@/lib/utils'

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate Full Stack Developer with expertise in modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Professional Background
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I&apos;m a dedicated Full Stack Web Developer with 4+ years of experience 
                building and scaling frontend-heavy web applications. I have delivered 
                production React and Next.js applications serving 5,000+ users, reduced 
                frontend performance bottlenecks by up to 30%, and built reusable component 
                systems that reduced duplicate code by ~35%.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Key Strengths
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Full-stack development with modern frameworks
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Cloud services and DevOps practices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Performance optimization and testing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Agile development and team collaboration
                </li>
              </ul>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <GraduationCap className="w-6 h-6 text-blue-400 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-400">{edu.institution}</p>
                        <p className="text-sm text-gray-500">
                          {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((language, index) => (
                  <motion.div
                    key={language.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{language.name}</span>
                      <span className="text-blue-400 text-sm">{language.proficiency}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ 
                          width: language.name === 'English' ? '100%' : '60%' 
                        }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - 3D Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-gray-700/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">AH</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Arbash Humayun
                  </h3>
                  <p className="text-gray-400">Full Stack Developer</p>
                  <div className="flex items-center justify-center mt-4 space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Berlin, Germany
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      4+ Years Exp
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
