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
    bio: "Casts spells in TypeScript and summons perfect APIs with a flick of his wrist",
    image: "/suyash.jpg",
    skills: ["Typescript", "MongoDB", "Next.js", "Node.js"],
    superpower: "Code Whisperer",
    catchphrase: "It's not a bug, it's an undocumented feature."
  },
  {
    id: 2,
    name: "Devansh",
    role: "Frontend Developer",
    bio: "Database wizard who once optimized a query so well, the database sent a thank you note. Speaks fluent SQL in his sleep.",
    image: "/devansh.jpg",
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
    superpower: "Database Bender",
    catchphrase: "SELECT * FROM solutions WHERE problem = current_issue;"
  },
  {
    id: 3,
    name: "Aditya",
    role: "Competitive Programmer",
    bio: "Taught an AI to write poetry, solve complex math, and make the perfect cup of coffee. The machines spare him when they take over.",
    image: "/aditya.jpg",
    skills: ["C", "JAVA", "HTML", "CSS"],
    superpower: "Algorithm Alchemist",
    catchphrase: "My neural nets are deeper than your philosophy."
  },
  {
    id: 4,
    name: "Dhruv",
    role: "Frontend Developer",
    bio: "Infrastructure maestro who deploys to production on Fridays and lives to tell the tale. Kubernetes clusters follow him like pets.",
    image: "/dhruv.jpg",
    skills: ["HTML", "Tailwind", "Figma", "C"],
    superpower: "Cloud Commander",
    catchphrase: "Have you tried turning it off and on again?"
  }
]