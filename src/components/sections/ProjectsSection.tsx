'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Scene } from '@/components/3d/Scene'
import { ProjectCard } from '@/components/3d/ProjectCard'
import { Button } from '@/components/ui/Button'
import { Github, Eye } from 'lucide-react'
import { projects } from '@/data/portfolio'

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const projectPositions: [number, number, number][] = [
    [-4, 0, 0],
    [0, 0, 0],
    [4, 0, 0],
  ]

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing my best work in web development and full-stack applications
          </p>
        </motion.div>

        {/* 3D Projects Display */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-96 lg:h-[500px] mb-16"
        >
          <Scene className="w-full h-full">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                position={projectPositions[index]}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </Scene>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-gray-300 mb-6">{selectedProject.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <Button
                      variant="gradient"
                      onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                      className="flex items-center"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                      className="flex items-center border-gray-600 text-gray-300 hover:bg-gray-800"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Cards Grid (Mobile/Tablet) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500/50 transition-colors duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                {project.liveUrl && (
                  <Button
                    variant="gradient"
                    size="sm"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex items-center"
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex items-center border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            variant="gradient"
            size="lg"
            onClick={() => window.open('https://github.com/Arbash173', '_blank')}
            className="flex items-center mx-auto"
          >
            <Github className="w-5 h-5 mr-2" />
            View More Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
