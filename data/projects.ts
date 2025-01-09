import { Project } from "@/models/project";


export const projects: Project[] = [
  {
    _id: 1,
    name: "Alatwal",
    niche: "Tour, Travel & Ticket Booking",
    description: "Alatwal is a web application developed for booking tickets, visas, and tour packages, catering to both UAE and international travel. It offers a user-friendly platform to explore and book a variety of travel services.\nThe application features an admin dashboard that simplifies managing bookings, payments, and user data. With Stripe integration, it ensures secure and hassle-free payments.",
    images: [
        { _id: 1, link: "https://picsum.photos/200" },
        { _id: 1, link: "https://picsum.photos/400" },
        { _id: 3, link: "https://picsum.photos/120" },
        { _id: 4, link: "https://picsum.photos/240" },
        { _id: 5, link: "https://picsum.photos/230" },
        { _id: 6, link: "https://picsum.photos/123" },
        { _id: 7, link: "https://picsum.photos/342" },
        { _id: 8, link: "https://picsum.photos/432" },
        { _id: 9, link: "https://picsum.photos/125" },
        { _id: 10, link: "https://picsum.photos/492" },
        { _id: 11, link: "https://picsum.photos/231" }
    ],
    live: "",
    github: "",
    technologies: ["nextjs", "vercel"]
  },
  {
    _id: 2,
    name: "3D Constraction LLC",
    niche: "Dynamic portfolio for constraction company",
    description: "3D Constraction LLC's dynamic portfolio website highlights completed and ongoing projects, showcasing their services. It includes an intuitive admin panel for easy project management.\nOptimized with strong SEO strategies, the site enhances visibility, boosts Google search performance, and strengthens the company's digital presence, making it easier for potential clients to find their services.",
    images: [
        { _id: 1, link: "https://picsum.photos/200" },
        { _id: 1, link: "https://picsum.photos/400" },
        { _id: 3, link: "https://picsum.photos/120" },
        { _id: 4, link: "https://picsum.photos/240" },
        { _id: 5, link: "https://picsum.photos/230" },
        { _id: 6, link: "https://picsum.photos/123" },
        { _id: 7, link: "https://picsum.photos/342" },
        { _id: 8, link: "https://picsum.photos/432" },
        { _id: 9, link: "https://picsum.photos/125" },
        { _id: 10, link: "https://picsum.photos/492" },
        { _id: 11, link: "https://picsum.photos/231" }
    ],
    live: "",
    github: "",
    technologies: ["nextjs", "vercel"]
  }
]