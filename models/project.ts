export interface Slide{
    _id: number,
    link: string
}

export interface Project{
    _id: number,
    name: string,
    niche: string,
    description: string,
    images: Array<Slide>,
    live: string,
    github: string,
    technologies: Array<string>
}