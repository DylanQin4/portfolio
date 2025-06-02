import { Code2, Layers, Network, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const ExperienceCard = ({ title, company, period, description, icon: Icon, index }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2,
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.2 + 0.3,
      },
    },
  }

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2 + 0.1,
      },
    },
  }

  return (
      <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="group relative"
      >
        {/* Timeline connector */}
        <motion.div
            variants={lineVariants}
            className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-transparent hidden lg:block origin-top"
        />

        {/* Main card */}
        <motion.div
            className="relative ml-0 lg:ml-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
        >
          {/* Timeline dot */}
          <motion.div
              variants={iconVariants}
              className="absolute -left-20 top-8 hidden lg:flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/30"
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Mobile icon */}
          <motion.div
              variants={iconVariants}
              className="flex lg:hidden items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/30"
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Content */}
          <div className="space-y-4">
            {/* Header */}
            <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                {title}
              </h3>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex items-center gap-2 text-blue-400 font-semibold">
                  <MapPin className="w-4 h-4" />
                  {company}
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  {period}
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
                className="text-gray-300 leading-relaxed text-sm lg:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
            >
              {description}
            </motion.p>

            {/* Decorative line */}
            <motion.div
                className="w-full h-px bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.8, duration: 0.8 }}
            />
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
      </motion.div>
  )
}

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Code2,
      title: "Développeur Fullstack Django/NextJs",
      company: "Code-Talent",
      period: "Avril 2024 - Août 2024",
      description:
          "En tant que développeur fullstack chez Code-Talent, j'ai contribué à plusieurs projets web, notamment les plateformes MyAsa et Artizaho, ainsi que diverses landing pages interactives en Next.js. En parallèle, j'ai été impliqué dans des tâches DevOps, de la mise en place des conteneurs Docker jusqu'au déploiement des projets.",
    },
    {
      icon: Layers,
      title: "Développeur React Freelance",
      company: "Buy Your Way",
      period: "Avril 2024 - Juin 2024",
      description:
          "Développement d'une plateforme événementielle avec gestion des utilisateurs, des rôles et des contenus dynamiques (stands, galeries, menus). Création d'une interface dédiée aux exposants pour personnaliser leurs stands et suivre les performances, avec un design responsive pour une navigation optimale.",
    },
    {
      icon: Code2,
      title: "Développeur React",
      company: "Pereeple",
      period: "Nov 2023 - Avril 2024",
      description:
          "Création d'une plateforme web avec React et TypeScript pour la planification de voyages, incluant l'ajout d'événements comme des hôtels, transports, services et activités. Intégration d'une fonction de génération de factures PDF et gestion des fournisseurs avec leurs tarifs.",
    },
    {
      icon: Network,
      title: "Web Designer Freelance",
      company: "Gomed",
      period: "Juin 2020 - Nov 2020",
      description:
          "Conception d'une maquette sur Figma pour un site vitrine de pharmacie, suivie de son intégration en HTML/CSS avec un design responsive.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  }

  const orbVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  }

  return (
      <div className="min-h-screen bg-[#04081A] relative overflow-hidden py-20">
        {/* Background effects */}
        <div className="absolute inset-0">
          {/* Gradient orbs */}
          <motion.div
              variants={orbVariants}
              initial="hidden"
              animate="visible"
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"
          />
          <motion.div
              variants={orbVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"
          />

          {/* Grid pattern */}
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
          />
        </div>

        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center space-y-8 mb-20"
          >
            <motion.div variants={headerVariants} className="relative">
              <h2 className="text-3xl md:text-5xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Expérience Professionnelle
              </h2>
              <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full"
              />
            </motion.div>
            <motion.p
                variants={subtitleVariants}
                className="text-md md:text-lg text-gray-400 font-medium tracking-wide text-center max-w-2xl"
            >
              Un aperçu de mon parcours professionnel et des projets qui ont façonné mon expertise en développement web.
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} index={index} />
              ))}
            </div>
          </div>

          {/* Bottom decoration */}
          <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex justify-center mt-20"
          >
            <div className="w-px h-20 bg-gradient-to-b from-blue-500/50 to-transparent origin-top" />
          </motion.div>
        </div>
      </div>
  )
}

export default ExperienceSection