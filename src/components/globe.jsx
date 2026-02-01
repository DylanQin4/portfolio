import IconCloud from "./ui/icon-cloud";

const slugs = [
  // Frontend
  "react",
  "nextdotjs",
  "typescript",
  "javascript",
  "html5",
  "css3",
  "tailwindcss",
  "framermotion",
  "redux",
  "reactquery",
  "reacthookform",
  "zod",
  
  // Backend
  "java",
  "csharp",
  "php",
  "cplusplus",
  "python",
  "nodedotjs",
  "express",
  "prisma",
  "oracle",
  "postgresql",
  "mongodb",
  "firebase",
  
  // Mobile
  "reactnative",
  "dart",
  "flutter",
  "android",
  "androidstudio",
  
  // Cloud & DevOps
  "amazonaws",
  "googlecloud",
  "docker",
  "git",
  "linux",
  "nginx",
  "vercel",
  
  // Outils
  "visualstudiocode",
  "jetbrains",
  "vite",
  "testinglibrary",
  "cypress",
  "jira",
  "github",
  "gitlab",
  
  // Design
  "figma",
  "adobexd",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;