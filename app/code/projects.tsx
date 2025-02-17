export interface Project {
    id: number;
    title: string;
    imageSrc: string;
    image2?: string;
    info: string;
    info2?: string;
    info3?: string;
    info4?: string;
    tags: string[];
    git?: string;
    host?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "SocialLift",
        imageSrc: "/images/C1.png",
        image2: "/images/C1.png",
        info: "A social media app built with React Native and Firebase.",
        info2: "Additional details and features of SocialLift go here.",
        info3: "A social media app built with React Native and Firebase.",
        info4: "Additional details and features of SocialLift go here.",
        tags: ["React Native", "Firebase", "API"],
        git: "GITHUB URL HERE",
        host: "HOST URL HERE",
    },
    {
        id: 2,
        title: "The Emperor",
        imageSrc: "/images/C1.png",
        info: "A Chrome extension for enhancing your browsing experience. This is ome text that will force the window to get even bigger when in a pretty narrow view",
        info2: "Additional details and features of SocialLift go here.",
        tags: ["Chrome Extension", "HTML", "CSS", "JavaScript"],
    },
    {
        id: 3,
        title: "Project 3",
        imageSrc: "/images/C1.png",
        info: "A project utilizing various APIs including NASA API.",
        info2: "Additional details and features of SocialLift go here.",
        tags: ["React", "Node.js", "Express", "MAP thingy API", "NASA API"],
    },
    {
        id: 4,
        title: "Project 4",
        imageSrc: "/images/C1.png",
        info: "A web application built with Python and Flask.",
        info2: "Additional details and features of SocialLift go here.",
        tags: ["Python", "Flask"],
    },
];