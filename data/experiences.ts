import { Experience } from "@/models/experience";

export const experiences: Experience[] = [
    {
        _id: 1,
        company: "The fuel media",
        role:"Fullstack Developer",
        period: "Mar 2023 - Sep 2024",
        location:"New Delhi",
        responsibility: "Contributed to TeamSync, and internal project management tool. Integrated features for team char, and project milestones that improves communication and task tracking.\nImplemented user roles and permission for secure data access and improved project management.",
        technologies:["nextjs", "mongodb", "git"]
    },
    {
        _id: 2,
        company: "TEDx JMI",
        role:"Software Developer",
        period: "sep 2023 - nov 2023",
        location:"New Delhi",
        responsibility: "Developed an efficient event pass booking system with an admin panel to streamline the management of event passes. The system allows for easy tracking and control of passes.\nBuilt a QR scanner feature to simplify entry verification at event points, ensuring smooth and quick access for attendees while maintaining security and accuracy in the check-in process.",
        technologies:["nextjs", "mongodb", "git"]
    },
    {
        _id: 3,
        company: "Siemens Limited",
        role:"Graduate Trainee Engineer",
        period: "jul 2024 - oct 2024",
        location:"gurugram",
        responsibility: "Gained exposure to various mobility systems, including rolling stock, locomotives, traction converters, auxiliary converters, and metro systems, through hands-on learning and detailed technical discussions.\nDeveloped an  understanding of how these components interact within complex mobility networks to ensure efficient operation and reliability.\nGained experience in project management within mobility and transportation infrastructure, focusing on coordinating tasks, timelines, and resources. This helped me better understand how to manage projects effectively and address challenges.",
        technologies:["powerelectronics", "projectmanagement"]
    }
]