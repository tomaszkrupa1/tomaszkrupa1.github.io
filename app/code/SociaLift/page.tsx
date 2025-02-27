import Link from 'next/link';
import React from 'react';
import { projects } from '../projects';

export default function SociaLiftPage() {
    const project = projects.find((proj) => proj.id === 'SociaLift');
    if (!project) {
        return <div>Project not found</div>;
    }

    return (
      <div
      className="animate-fadeIn container mx-auto p-8 max-container-800"
    
      >
      <Link href="/code">
        <h1 className="text-3xl font-bold mb-8 text-black cursor-pointer">
        Back
        </h1>
      </Link>
      <div className="space-y-6">
        <div key={project.id} className="flex flex-col gap-4">
        <div className="overflow-hidden rounded w-full">
          <img
          src={project.imageSrc}
          alt={project.title}
          className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">
          {project.title}
          </h2>
          <p className="text-gray-700">{project.info}</p>
          <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
            key={tag}
            className="border border-gray-500 rounded-full px-3 py-1 text-sm"
            >
            {tag}
            </span>
          ))}
          </div>
          <hr className="border-t mt-2 w-full" />
        </div>
        <div className="w-full">
          <img
          src={project.image2}
          alt={project.title}
          className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">
          The challenge
          </h2>
          <p className="text-gray-700">{project.info2}</p>
        </div>
        <div className="w-full flex flex-col gap-1">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">
          I gained confidence...
          </h2>
          <p className="text-gray-700">{project.info3}</p>
        </div>
        <div className="w-full flex flex-col gap-1">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black">
          If we had more time...
          </h2>
          <p className="text-gray-700">{project.info4}</p>
        </div>
        </div>
      </div>
      </div>
    ) };
