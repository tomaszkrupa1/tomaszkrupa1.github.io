export default function CodePage() {
    const projects = [
        {
            id: 1,
            title: "SocialLift",
            imageSrc: "/images/C1.png",
            tags: ["React Native", "Firebase", "API"],
        },
        {
            id: 2,
            title: "The Emperor",
            imageSrc: "/images/C1.png",
            tags: ["Chrome Extension", "HTML", "CSS", "JavaScript"],
        },
        {
            id: 3,
            title: "Project 3",
            imageSrc: "/images/C1.png",
            tags: ["React", "Node.js", "Express", "MAP thingy API", "NASA API"],
        },
        {
            id: 4,
            title: "Project 4",
            imageSrc: "/images/C1.png",
            tags: ["Python", "Flask"],
        },
    ];

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8 text-black">Coding Projects</h1>
            <div className="space-y-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch"
                    >
                        <div className="overflow-hidden rounded">
                            <a href={`/project/${project.id}`}>
                                <img
                                    src={project.imageSrc}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </a>
                        </div>
                        <div className="flex flex-col justify-end">
                            <h2 className="text-xl font-semibold text-black">{project.title}</h2>
                            <div className="flex flex-wrap mt-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="border border-gray-500 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <hr className="mt-2 border-t" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}