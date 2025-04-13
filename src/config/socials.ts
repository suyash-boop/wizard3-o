type SocialLinks = {
  github?: string;
  linkedin?: string;
  instagram?: string;
}

type TeamSocials = {
  [key: string]: SocialLinks;
}

const teamSocials: TeamSocials = {
  "Suyash": {
    github: "https://github.com/suyash-purwar",
    linkedin: "https://linkedin.com/in/suyash-purwar",
    instagram: "https://instagram.com/suyashpurwar"
  },
  "Devansh": {
    github: "https://github.com/devansh",
    linkedin: "https://linkedin.com/in/devansh",
    instagram: "https://instagram.com/devansh"
  },
  "Aditya": {
    github: "https://github.com/aditya",
    linkedin: "https://linkedin.com/in/aditya",
    instagram: "https://instagram.com/aditya"
  },
  "Dhruv": {
    github: "https://github.com/dhruv",
    linkedin: "https://linkedin.com/in/dhruv",
    instagram: "https://instagram.com/dhruv"
  }
} as const;

export default teamSocials;