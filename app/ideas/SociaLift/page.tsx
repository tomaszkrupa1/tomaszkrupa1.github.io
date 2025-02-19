import Link from 'next/link';
import React from 'react'
import { ideas } from '../ideas'

// Locate the SociaLift project by its id or slug.
const SociaLiftPage: React.FC = () => {
    const project = ideas.find((idea) => idea.id === 'SociaLift')

    if (!project) {
        return <div>Project "SociaLift" not found.</div>
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

export default SociaLiftPage