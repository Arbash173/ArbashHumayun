'use client'

import { motion } from 'framer-motion'
import { Calendar, Award } from 'lucide-react'
import { experience } from '@/data/portfolio'
import { formatDate } from '@/lib/utils'

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500/50 transition-colors duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-blue-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-yellow-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="text-gray-300 text-sm flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">3+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">10+</div>
            <div className="text-gray-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">15+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
