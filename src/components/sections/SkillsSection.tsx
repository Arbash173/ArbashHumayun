'use client'

import { motion } from 'framer-motion'
import { Scene } from '@/components/3d/Scene'
import { SkillSphere } from '@/components/3d/SkillSphere'
import { skills } from '@/data/portfolio'

const skillCategories = [
  { name: 'Frontend', color: '#3b82f6' },
  { name: 'Backend', color: '#10b981' },
  { name: 'Tools & DevOps', color: '#f59e0b' },
  { name: 'AI Tools', color: '#8b5cf6' },
]

export function SkillsSection() {

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My expertise in modern web technologies and development tools
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - 3D Skills Sphere */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-96 lg:h-[500px]"
          >
            <Scene className="w-full h-full">
              <SkillSphere skills={skills} radius={2.5} />
            </Scene>
          </motion.div>

          {/* Right Column - Skills Categories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {skillCategories.map((category, categoryIndex) => {
              const categorySkills = skills.filter(skill => {
                if (category.name === 'Frontend') return skill.category === 'frontend'
                if (category.name === 'Backend') return skill.category === 'backend'
                if (category.name === 'Tools & DevOps') return skill.category === 'tools'
                if (category.name === 'AI Tools') return skill.category === 'ai'
                return false
              })

              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-lg p-6"
                >
                  <h3 
                    className="text-xl font-bold text-white mb-4"
                    style={{ color: category.color }}
                  >
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">{skill.name}</span>
                          <span className="text-gray-500 text-xs">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="h-2 rounded-full transition-all duration-1000"
                            style={{ backgroundColor: category.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Performance</h3>
            <p className="text-gray-400 text-sm">
              Optimized applications for speed and efficiency
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Maintenance</h3>
            <p className="text-gray-400 text-sm">
              Clean, maintainable code with best practices
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Testing</h3>
            <p className="text-gray-400 text-sm">
              Comprehensive testing with Jest and Cypress
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
