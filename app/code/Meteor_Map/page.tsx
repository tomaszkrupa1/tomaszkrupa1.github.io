import Link from 'next/link';
import React from 'react'
import { projects } from '../projects'

// Locate the Meteor Map project by its id or slug.
const MeteorMapPage: React.FC = () => {
    const project = projects.find((proj) => proj.id === 'Meteor_Map')

    if (!project) {
        return <div>Project "Meteor Map" not found.</div>
    }

    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <Link href="/code" className="text-black">
  ← Back
</Link>
            <h1>{project.title}</h1>
            <p>{project.info}</p>
            {project.info2 && (
                <div>
                    <h2>About the Project</h2>
                    <p>{project.info2}</p>
                </div>
            )}
            {/* Additional project content can be added here */}
        </div>
    )
}

export default MeteorMapPage