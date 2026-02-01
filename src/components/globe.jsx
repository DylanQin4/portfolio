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
  "reactquery",
  "reacthookform",
  "zod",
  "angular",
  "materialdesign",

  // Backend
  "java",
  "csharp",
  "php",
  "python",
  "prisma",
  "oracle",
  "postgresql",
  "firebase",
  "springboot",
  "dotnet",
  "microsoftsqlserver",
  "rest",

  // Mobile
  "reactnative",
  "android",
  "expo",

  // Cloud & DevOps
  "docker",
  "git",
  "linux",
  "nginx",
  "vercel",
  "azuredevops",

  // Outils
  "visualstudiocode",
  "jetbrains",
  "vite",
  "testinglibrary",
  "jira",
  "github",
  "gitlab",
  "visualstudio",
  "postman",

  // Design
  "figma",
  "adobexd",
  "responsivedesign",
  "prototyping",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;