export interface Project {
    id: string;
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
        id: "SociaLift",
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
        id: "The_Emperor",
        title: "The Emperor",
        imageSrc: "/images/C2.jpg",
        info: "A Chrome extension for automatic betting on CSGOEmpire.com.",
        info2: "Additional details and features of SocialLift go here.",
        tags: ["Manifest", "Chrome Extension", "HTML", "CSS", "JavaScript"],
    },
    {
        id: "SeenIt",
        title: "SeenIt",
        imageSrc: "/images/C3.jpg",
        info: "A project utilizing various APIs including NASA API.",
        info2: "Additional details and features of SocialLift go here.",
        tags: ["React", "Node.js", "Express", "MAP thingy API", "NASA API"],
    },
    {
        id: "Meteor_Map",
        title: "Meteor Map",
        imageSrc: "/images/C3.jpg",
        info: "A web application built with Python and Flask.",
        info2: "Additional details and features of SocialLift go here.",
        tags: ["Python", "Flask"],
    },
    {
        id: "SeenIt_API",
        title: "SeenIt API",
        imageSrc: "/images/C5.jpg",
        info: "A web application built with Python and Flask.",
        info2: "Additional details and features of SocialLift go here.",
        tags: ["Python", "Flask"],
    },
];