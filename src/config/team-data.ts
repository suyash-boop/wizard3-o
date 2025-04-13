export type TeamMember = {
  id: number
  name: string
  role: string
  bio: string
  image?: string
  skills: string[]
  superpower?: string
  catchphrase?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Suyash",
    role: "Lead Developer",
    bio: "Casts spells in TypeScript and summons perfect APIs with a flick of his wrist. Mastered bit of every stack",
    image: "/suyash.jpg",
    skills: ["Typescript", "Next.js", "Node.js"],
    superpower: "Code Whisperer",
    catchphrase: "It's not a bug, it's an undocumented feature."
  },
  {
    id: 2,
    name: "Devansh",
    role: "Frontend Developer",
    bio: "Animates ideas into life with React and wrangles CSS like it’s poetry. Thinks in components and speaks in smooth transitions.",
    image: "/devansh.jpg",
    skills: ["Python", "Django", "PostgreSQL"],
    superpower: "Component Major",
    catchphrase: "Website without visitors is like a ship lost in the horizon"
  },
  {
    id: 3,
    name: "Aditya",
    role: "Competitive Programmer",
    bio: "Algorithm artisan who treats LeetCode like a daily workout. Thinks in edge cases, breathes dynamic programming",
    image: "/aditya.jpg",
    skills: ["C", "JAVA", "HTML", "CSS"],
    superpower: "Algorithm Alchemist",
    catchphrase: "Talk is cheap. Show me the code."
  },
  {
    id: 4,
    name: "Dhruv",
    role: "Frontend Developer",
    bio: "Visual alchemist turning divs into delight. Lives for buttery micro-interactions, breathes flexbox, and speaks fluent animation.",
    image: "/dhruv.jpg",
    skills: ["HTML", "Tailwind", "Figma", "C"],
    superpower: "UI Architect",
    catchphrase: "Great web design without functionality is like a sports car with no engine."
  }
]