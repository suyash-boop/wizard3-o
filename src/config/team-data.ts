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
    bio: "Can debug code with his eyes closed and writes functions so elegant they make other developers weep with joy.",
    image: "/suyash.jpg",
    skills: ["React", "TypeScript", "Next.js", "Node.js"],
    superpower: "Code Whisperer",
    catchphrase: "It's not a bug, it's an undocumented feature."
  },
  {
    id: 2,
    name: "Sam",
    role: "Backend Engineer",
    bio: "Database wizard who once optimized a query so well, the database sent a thank you note. Speaks fluent SQL in his sleep.",
    image: "/devansh.jpg",
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
    superpower: "Database Bender",
    catchphrase: "SELECT * FROM solutions WHERE problem = current_issue;"
  },
  {
    id: 3,
    name: "Jordan",
    role: "AI/ML Specialist",
    bio: "Taught an AI to write poetry, solve complex math, and make the perfect cup of coffee. The machines spare him when they take over.",
    image: "/aditya.jpg",
    skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    superpower: "Neural Network Whisperer",
    catchphrase: "My neural nets are deeper than your philosophy."
  },
  {
    id: 4,
    name: "Taylor",
    role: "DevOps Engineer",
    bio: "Infrastructure maestro who deploys to production on Fridays and lives to tell the tale. Kubernetes clusters follow him like pets.",
    image: "/dhruv.jpg",
    skills: ["Kubernetes", "AWS", "CI/CD", "Terraform"],
    superpower: "Cloud Commander",
    catchphrase: "Have you tried turning it off and on again?"
  }
]