export interface Skill {
  nombre: string;
  icon: string;
}

export interface SkillCategory {
  categoria: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    categoria: "Lenguajes",
    skills: [
      { nombre: "JavaScript", icon: "javascript" },
      { nombre: "TypeScript", icon: "typescript" },
      { nombre: "C#", icon: "csharp" },
      { nombre: "Java", icon: "java" },
    ],
  },
  {
    categoria: "Stack MERN",
    skills: [
      { nombre: "MongoDB", icon: "mongo" },
      { nombre: "Express", icon: "express" },
      { nombre: "React", icon: "react" },
      { nombre: "Node.js", icon: "node" },
    ],
  },
  {
    categoria: "Desarrollo Web",
    skills: [
      { nombre: "HTML5", icon: "html" },
      { nombre: "CSS3", icon: "css" },
    ],
  },
  {
    categoria: "Bases de Datos",
    skills: [
      { nombre: "MongoDB", icon: "mongo" },
      { nombre: "SQL", icon: "sql" },
    ],
  },
  {
    categoria: "Frameworks",
    skills: [
      { nombre: "Astro", icon: "astro" },
      { nombre: ".NET", icon: "dotnet" },
      { nombre: "React", icon: "react" },
      { nombre: "Next.js", icon: "next" },
    ],
  },
  {
    categoria: "Librerías",
    skills: [
      { nombre: "Material UI", icon: "materialui" },
      { nombre: "Bootstrap", icon: "bootstrap" },
      { nombre: "Tailwind CSS", icon: "tailwind" },
      { nombre: "Sass", icon: "sass" },
    ],
  },
];
