import { Project } from "@/models/project";


export const projects: Project[] = [
  {
    _id: 1,
    name: "Alatwal",
    niche: "Tour, Travel & Ticket Booking",
    description: "Alatwal is a web application developed for booking tickets, visas, and tour packages, catering to both UAE and international travel. It offers a user-friendly platform to explore and book a variety of travel services.\nThe application features an admin dashboard that simplifies managing bookings, payments, and user data. With Stripe integration, it ensures secure and hassle-free payments.",
    images: [
        { _id: 1, link: "/images/portfolio/projects/alatwal/homepage.jpg" },
        { _id: 2, link: "/images/portfolio/projects/alatwal/uaetours.jpg" },
        { _id: 3, link: "/images/portfolio/projects/alatwal/tourpage.jpg" },
        { _id: 4, link: "/images/portfolio/projects/alatwal/dashboard.jpg" },
        { _id: 5, link: "/images/portfolio/projects/alatwal/addtour.jpg" },
        { _id: 6, link: "/images/portfolio/projects/alatwal/setting.jpg" },
    ],
    live: "",
    github: "https://github.com/aulth/alatwal",
    technologies: ["nextjs", "vercel"]
  },
  {
    _id: 2,
    name: "3D Constraction LLC",
    niche: "Dynamic portfolio for constraction company",
    description: "3D Constraction LLC's dynamic portfolio website highlights completed and ongoing projects, showcasing their services. It includes an intuitive admin panel for easy project management.\nOptimized with strong SEO strategies, the site enhances visibility, boosts Google search performance, and strengthens the company's digital presence, making it easier for potential clients to find their services.",
    images: [
      { _id: 1, link: "/images/portfolio/projects/3dconstractionllc/homepage.jpg" },
      { _id: 2, link: "/images/portfolio/projects/3dconstractionllc/services.jpg" },
      { _id: 3, link: "/images/portfolio/projects/3dconstractionllc/3dumbrella.jpg" },
      { _id: 4, link: "/images/portfolio/projects/3dconstractionllc/ongoingprojects.jpg" },
      { _id: 5, link: "/images/portfolio/projects/3dconstractionllc/completedprojects.jpg" },
      { _id: 6, link: "/images/portfolio/projects/3dconstractionllc/admin.jpg" },
    ],
    live: "",
    github: "https://github.com/aulth/3dconstractionllc",
    technologies: ["nextjs", "vercel"]
  }
]