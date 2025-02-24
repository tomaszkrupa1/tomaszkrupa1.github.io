export interface Project {
    id: string;
    title: string;
    date: string;
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
        date: "2023",
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
        date: ""
    },
    {
        id: "SeenIt",
        title: "SeenIt",
        imageSrc: "/images/C999.jpg",
        info: "Reddit inspired forum for sharing and discussing images.",
        info2: "Additional details and features of SocialLift go here.",
        tags: ["React", "Node.js", "HTML", "API"],
        date: ""
    },
    {
        id: "Meteor_Map",
        title: "Meteor Map",
        imageSrc: "/images/C3.jpg",
        info: "A web application showing the location of meteor landings across the world",
        info2: "Additional details and features of SocialLift go here.",
        tags: ["React", "Node.js", "Express", "Leaflet", "NASA API"],
        date: ""
    },
    {
        id: "SeenIt_API",
        title: "SeenIt API",
        imageSrc: "/images/C5.jpg",
        info: "A web application built with Python and Flask.",
        info2: "Additional details and features of SocialLift go here.",
        tags: ["Jest", "PSQL","Express"],
        date: ""
    }
    
];
