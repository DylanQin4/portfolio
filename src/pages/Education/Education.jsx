import { useState } from "react"
import { Award, Calendar, BookOpen, Trophy } from "lucide-react"
import { motion } from "framer-motion"

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const educationData = [
    {
      degree: "Licence en Informatique",
      school: "ITUniversity, Antananarivo",
      mascot: null,
      year: "Septembre 2021 - Décembre 2025",
      achievements: ["Spécialisation en développement logiciel", "Plusieurs projets réalisés"],
      skills: ["Java", "React", "Spring", "PHP", "C#", "C/C++", "SQL", "..."],
      description:
        "Formation au sein de l’une des universités de référence à Madagascar, axée sur une approche fortement orientée projets. Au-delà de l’apprentissage des technologies, cette formation m’a permis de développer des compétences en gestion de projet, prise en main de projets existants et travail sous contraintes de délais, dans des contextes proches du monde professionnel.",

    },
    {
      degree: "Formation en développement web",
      school: "Sayna",
      mascot: null,
      year: "Février 2020 - Juin 2020",
      achievements: ["Formation intensive", "Focus sur les bases du développement web"],
      skills: ["HTML", "CSS", "JavaScript", "React", "Ruby On Rails", "Git", "..."],
      description:
          "Formation intensive en développement web, axée sur la pratique et l’apprentissage par projets. Cette expérience m’a permis d’acquérir des bases solides en intégration web, en logique de programmation et en travail collaboratif, tout en développant une réelle autonomie technique.",
    },
    {
      degree: "Baccalauréat Série C",
      school: "Lycée Privé Kanana Madagascar, Antsirabe",
      mascot: null,
      year: "2019",
      achievements: ["Spécialité Mathématiques et Sciences Physiques"],
      skills: ["Mathématiques", "Physique", "Chimie", "Informatique Bureautique", "Philosophie", "Anglais", "Français", "..."],
      description:
          "Formation scientifique avec un fort accent sur les mathématiques et les sciences physiques, préparation solide aux études supérieures en informatique.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const leftCardVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
      <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
          <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Parcours Éducatif
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Explorez comment chaque étape académique a nourri la créativité, l'expertise technique et l'élan vers mon
              parcours professionnel.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-teal-500 to-blue-500 top-0 bottom-0 hidden md:block">
              <motion.div
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full bg-gradient-to-b from-teal-500 to-blue-500"
              />
            </div>

            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-16">
              {educationData.map((edu, index) => {
                const isLeft = index % 2 === 0

                return (
                    <div key={index} className="relative">
                      {/* Timeline Dot */}
                      <motion.div
                          variants={dotVariants}
                          className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full border-4 border-[#04081A] z-10 hidden md:block"
                      />

                      {/* Timeline Connector */}
                      <div
                          className={`absolute top-3 w-8 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 hidden md:block ${
                              isLeft ? "right-1/2 mr-3" : "left-1/2 ml-3"
                          }`}
                      />

                      <motion.div
                          variants={isLeft ? leftCardVariants : cardVariants}
                          className={`flex ${isLeft ? "md:justify-start" : "md:justify-end"} justify-center`}
                      >
                        <div
                            className={`w-full md:w-5/12 relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                                hoveredIndex === index
                                    ? "border-teal-500 scale-[1.02] shadow-lg shadow-teal-500/20"
                                    : "border-blue-400/20"
                            }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <div className="space-y-6">
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <motion.span
                                    className="text-3xl"
                                    animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                  {edu.mascot}
                                </motion.span>
                                <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                              </div>
                              <p className="text-lg text-gray-300 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-teal-500" />
                                {edu.school}
                              </p>
                              <p className="text-gray-400 flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {edu.year}
                              </p>
                            </div>

                            <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                              {edu.description}
                            </p>

                            <div className="space-y-3">
                              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                                <Trophy className="w-4 h-4 text-yellow-500" />
                                Réalisations clés
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {edu.achievements.map((achievement, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                                    >
                                      <Award className="w-4 h-4" />
                                      <span>{achievement}</span>
                                    </motion.div>
                                ))}
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {edu.skills.map((skill, i) => (
                                  <motion.span
                                      key={i}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 transition-colors duration-200"
                                  >
                                    {skill}
                                  </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default EducationSection