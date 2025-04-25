import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

const projects = [
  // {
  //   title: "Olova! A Lightweight JavaScript Library",
  //   description:
  //     "A lightweight JavaScript library for creating beautiful, responsive UI components.",
  //   src: "rock.jpg",
  //   link: "https://i.postimg.cc/DwgWTfP0/Annotation-2025-03-19-113338.png",
  //   color: "#5196fd",
  //   githubLink: "https://github.com/olovajs/olova",
  //   liveLink: "https://olova.js.org/",
  // },
  // {
  //   title: "A sleek portfolio built with React and Tailwind CSS ",
  //   description:
  //     "A sleek portfolio built with React and Tailwind CSS to showcase your skills, projects, and experience in a modern design.",
  //   src: "tree.jpg",
  //   link: "https://i.postimg.cc/J75CKyrs/Annotation-2025-04-01-203959.png",
  //   color: "#8f89ff",
  //   githubLink: "https://github.com/seraprogrammer/portfolio",
  //   liveLink: "https://codervai.vercel.app",
  // },
  // {
  //   title: "🚀 CodeWhisperer",
  //   description:
  //     "🚀 CodeWhisperer A powerful online code editor built with React and Tailwind CSS. Featuring real-time code execution, syntax highlighting, multi-language support, and a sleek UI. Start coding instantly! 💻✨",
  //   src: "water.jpg",
  //   link: "https://i.postimg.cc/J4jPVFY0/Annotation-2025-04-01-204723.png",
  //   color: "#fff",
  //   githubLink: "https://github.com/seraprogrammer/codewhisperer",
  //   liveLink: "https://codewhisperer.vercel.app/",
  // },
  // {
  //   title: "CodeKori 🔥",
  //   description:
  //     "CodeKori is a powerful online code editor built with React and Tailwind CSS. Featuring real-time code execution, syntax highlighting, multi-language support, and a sleek UI. Start coding instantly! 💻✨",
  //   src: "house.jpg",
  //   link: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
  //   color: "#ed649e",
  //   githubLink: "https://github.com/seraprogrammer/CodeKori",
  //   liveLink: "https://codekori.js.org",
  // },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
      <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      <motion.div 
        className="text-center p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-24 h-24 bg-blue-500/10 rounded-full mx-auto mb-8 flex items-center justify-center"
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-blue-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <path d="M12 5a14.5 14.5 0 0 0-8.5 3A6 6 0 0 0 8 15a4.5 4.5 0 0 0 4 0 6 6 0 0 0 4.5-7" />
            <path d="M20.9 12.8A14.5 14.5 0 0 0 12 5" />
          </motion.svg>
        </motion.div>
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Bientôt disponible
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-400 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          La section projets est en cours de développement. De nouveaux projets passionnants seront bientôt présentés ici.
        </motion.p>
        
        <motion.div 
          className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full text-gray-300 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          En construction
        </motion.div>
      </motion.div>
        {/* <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section> */}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
