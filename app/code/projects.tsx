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
        image2: "/images/C1_3.jpg",
        info: "SociaLift is an app for gym enthusiasts to log, share, and compare their workout stats with their friends!",
        info2: "We have decided to build this project in React Native, as we only had a small team of 5 developers and 14 days to plan and execute the idea. Using React Native means we can develop on numerous platforms at once, hitting both mobile and web markets. We have also decided to use Firebase in order to gain familiarity with a new database service, and we believed Google's offering will lay a solid foundation for this project.",
        info3: "I personally gained confidence working in a group setting. We were independently been able to come up with an idea, delegate tasks and communicate effectively, in order to come together and develop a full stack application under strict time pressure.",
        info4: `If we had more time to work on this project, we would finish the functionality, and improve the styling, including animations.

Some of the functionality that we were unable to complete under the dedicated time limit include

    Dark mode toggle functionality
    Live group chat functionality
    ‘Fun facts’ status section that takes statistics and posts them in a readable manner
    Update database results for likes and comments on statuses
    Display graphs of workout data in groups
    Improve iOS performance
    Add Spotify integration to show what music is listened to
    Add special functionality for gyms, monetising the app

Improve the stylisation by

    Standardising width parameters
    Add loading animation to make the app feel smoother in operation
    Make it more user friendly for web users
    Make font sizes more consistent`,
        tags: ["React Native", "Firebase", "API"],
        git: "GITHUB URL HERE",
        host: "HOST URL HERE",
    },
    {
        id: "The_Emperor",
        title: "The Emperor",
        imageSrc: "/images/C2.jpg",
        info: "A Chrome extension for automatic betting on CSGOEmpire.com.",
        info2: "I built this project as I wanted to experiment with webpage manipulation as well as making an interactive UI as a chrome extension.",
        info3: `I have gained confidence in

    Analysing and disecting webpages
    Message Passing
    Content & Background scripting
    Chrome API`,
    info4: `In the future updates I would like to...

    Remove bloat code
    Make a side selector to choose which colour to bet on
    Add a counter of how many wins and how many losses
    Add functionality for making Side/Dice combo bets
    Make sure the button label is stored in Chrome Storage
    Add pattern functionality
    Stop bot after X amount of losses/wins/profit/loss etc.
    Make an icon/logo
    Update icons in pack
    Finish the styling
    Add dice chaser
    Keep a global variable of the amount bet to avoid rounding errors
    Publish to chrome store
    If dice selected, it gets rid of loss multiplier option
    Add win particle effect
    Add statistics window`,
        tags: ["Manifest", "Chrome Extension", "HTML", "CSS", "JavaScript"],
        date: ""
    },
    {
        id: "SeenIt",
        title: "SeenIt",
        imageSrc: "/images/C999.jpg",
        info: "Reddit inspired forum for sharing and discussing images.",
        info2: "We have decided to build this project in React Native, as we only had a small team of 5 developers and 14 days to plan and execute the idea. Using React Native means we can develop on numerous platforms at once, hitting both mobile and web markets. We have also decided to use Firebase in order to gain familiarity with a new database service, and we believed Google's offering will lay a solid foundation for this project.",
        info3: "I personally gained confidence working in a group setting. We were independently been able to come up with an idea, delegate tasks and communicate effectively, in order to come together and develop a full stack application under strict time pressure.",
        info4: `If we had more time to work on this project, we would finish the functionality, and improve the styling, including animations.

Some of the functionality that we were unable to complete under the dedicated time limit include

    Dark mode toggle functionality
    Live group chat functionality
    ‘Fun facts’ status section that takes statistics and posts them in a readable manner
    Update database results for likes and comments on statuses
    Display graphs of workout data in groups
    Improve iOS performance
    Add Spotify integration to show what music is listened to
    Add special functionality for gyms, monetising the app

Improve the stylisation by

    Standardising width parameters
    Add loading animation to make the app feel smoother in operation
    Make it more user friendly for web users
    Make font sizes more consistent`,
        tags: ["React", "Node.js", "HTML", "API"],
        date: ""
    },
    {
        id: "Meteor_Map",
        title: "Meteor Map",
        imageSrc: "/images/C3.jpg",
        info: "A web application showing the location of meteor landings across the world",
        info2: "Me and my partner decided to make the app this way in order to experiment with displaying information visually within React. In order to do this we used NASA's API information, and visualised it using Leaflet maps, while giving the user the option to refine their search within the React app.",
        info3: "I have gained confidence in REST API usage, and data visualisation, alongside some basic styling principles to make the app interactive.",
        info4: "If we had more time we'd like to replace the toggles with a slider, as it's more appropriate for the data being displayed.",
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
