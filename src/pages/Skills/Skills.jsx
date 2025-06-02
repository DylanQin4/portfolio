import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import IconCloudDemo from "@/components/globe"
import { Code2, Database, TabletSmartphone, Layout, Cpu, Cloud } from "lucide-react"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaLinux, FaFigma, FaAws, FaJava, FaPhp } from "react-icons/fa"
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiVite,
  SiOracle,
  SiAdobexd,
  SiGooglecloud,
  SiJetbrains,
  SiZod,
  SiReacthookform,
  SiReactquery,
  SiAndroidstudio,
  SiDart,
} from "react-icons/si"
import { TbBrandVscode, TbBrandFramerMotion, TbBrandCSharp, TbBrandReactNative } from "react-icons/tb"
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs"
import { MdAnimation } from "react-icons/md"
import { RiSeoLine } from "react-icons/ri"
import { BiLogoCPlusPlus } from "react-icons/bi"

const SkillCard = ({ icon: Icon, title, skills, color, index }) => {
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
        delay: index * 0.1,
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: index * 0.1 + 0.3,
      },
    },
  }

  return (
      <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <Card className="group relative h-full overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
          <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: index * 0.2,
              }}
          />
          <CardContent className="p-6 relative z-10">
            <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            >
              <motion.div
                  className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
              >
                <Icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {title}
              </h3>
            </motion.div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
            >
              {skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} variants={skillVariants}>
                    <Badge
                        variant="outline"
                        className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      <motion.span
                          className="transform group-hover/badge:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.3 }}
                      >
                        {skill.icon}
                      </motion.span>
                      <span className="font-medium">{skill.name}</span>
                    </Badge>
                  </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
  )
}

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Développement Frontend",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-4 h-4 text-white" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: "Zod",
          icon: <SiZod className="w-4 h-4 text-[#F24E1E]" />,
        },
        {
          name: "React Hook Form",
          icon: <SiReacthookform className="w-4 h-4 text-[#E3342F]" />,
        },
        {
          name: "React Query",
          icon: <SiReactquery className="w-4 h-4 text-[#FF4154]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Framer Motion",
          icon: <TbBrandFramerMotion className="w-4 h-4 text-[#F24E1E]" />,
        },
        {
          name: "Optimisation SEO",
          icon: <RiSeoLine className="w-4 h-4 text-[#FBBF24]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Développement Backend",
      color: "text-green-400",
      skills: [
        {
          name: "Java",
          icon: <FaJava className="w-4 h-4 text-[#F89820]" />,
        },
        {
          name: "C#",
          icon: <TbBrandCSharp className="w-4 h-4 text-[#9B59B6]" />,
        },
        {
          name: "PHP",
          icon: <FaPhp className="w-4 h-4 text-[#777BB3]" />,
        },
        {
          name: "C/C++",
          icon: <BiLogoCPlusPlus className="w-4 h-4 text-[#00599C]" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#8CC84B]" />,
        },
        {
          name: "Oracle",
          icon: <SiOracle className="w-4 h-4 text-[#F80000]" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
      ],
    },
    {
      icon: TabletSmartphone,
      title: "Développement Mobile",
      color: "text-yellow-400",
      skills: [
        {
          name: "React Native",
          icon: <TbBrandReactNative className="w-4 h-4 text-[#61DAFB]" />,
        },
        {
          name: "Dart",
          icon: <SiDart className="w-4 h-4 text-[#00BFFF]" />,
        },
        {
          name: "Flutter",
          icon: <TbBrandReactNative className="w-4 h-4 text-[#02569B]" />,
        },
        {
          name: "Android Studio",
          icon: <SiAndroidstudio className="w-4 h-4 text-[#3DDC84]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        {
          name: "Google Cloud",
          icon: <SiGooglecloud className="w-4 h-4 text-[#4285F4]" />,
        },
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Outils et technologies",
      color: "text-pink-400",
      skills: [
        {
          name: "JetBrains",
          icon: <SiJetbrains className="w-4 h-4 text-[#000000]" />,
        },
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
        },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
      ],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: "Design Responsive",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Adobe XD",
          icon: <SiAdobexd className="w-4 h-4 text-[#FF61F6]" />,
        },
        {
          name: "Prototypage",
          icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" />,
        },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const globeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.2,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  }

  return (
      <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
        {/* Grid Background */}
        <motion.div
            variants={backgroundVariants}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 bg-grid-pattern pointer-events-none"
        />

        <section className="container mx-auto px-4 py-11 relative z-10">
          <motion.div
              variants={globeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex justify-center items-center"
          >
            <IconCloudDemo />
          </motion.div>

          <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
                <SkillCard
                    key={index}
                    icon={category.icon}
                    title={category.title}
                    skills={category.skills}
                    color={category.color}
                    index={index}
                />
            ))}
          </motion.div>
        </section>

        <style jsx>{`
          .bg-grid-pattern {
            background-image: linear-gradient(
                to right,
                rgba(100, 100, 255, 0.1) 1px,
                transparent 1px
            ),
            linear-gradient(
                to bottom,
                rgba(100, 100, 255, 0.1) 1px,
                transparent 1px
            );
            background-size: 30px 30px;
          }
        `}</style>
      </main>
  )
}

export default SkillsSection