import Link from 'next/link';
import React from 'react';
import { projects } from '../projects';

// SociaLiftPage component with enhanced styling.
const SociaLiftPage: React.FC = () => {
    const project = projects.find((proj) => proj.id === 'SociaLift');

    if (!project) {
        return (
            <div style={{ padding: '2rem', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.9rem' }}>
                Project "SociaLift" not found.
            </div>
        );
    }

    return (
        <div
            style={{
                fontFamily: 'Poppins, sans-serif',
                padding: '2rem',
                maxWidth: '900px',
                margin: '0 auto',
                lineHeight: '1.6',
                color: '#333',
                fontSize: '0.9rem'
            }}
        >
            <Link
                href="/code"
                style={{
                    textDecoration: 'none',
                    color: '#333',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    display: 'inline-block',
                    fontSize: '0.9rem'
                }}
            >
                &larr; Back
            </Link>

            {/* Top image */}
            {project.imageSrc && (
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <img
                        src={project.imageSrc}
                        alt={project.title}
                        style={{ maxWidth: '100%', borderRadius: '8px' }}
                    />
                </div>
            )}

            {/* Title and subtitle */}
            <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                {project.title}
            </h1>
            {project.info && (
                <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 600 }}>
                    {project.info}
                </h2>
            )}
            {project.tags && (
                <div style={{ marginBottom: '3rem' }}>
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className='border border-gray-500 rounded-full px-3 py-1 text-sm mr-2 mb-2'
                            
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            {/* Main project info */}
            {project.info2 && (
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                        Why I built this project this way?
                    </h3>
                    <p style={{ fontSize: '1rem', fontWeight: 600 }}>{project.info2}</p>
                </div>
            )}

            {/* Secondary image */}
            {project.image2 && (
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <img
                        src={project.image2}
                        alt={`${project.title} details`}
                        style={{ maxWidth: '100%', borderRadius: '8px' }}
                    />
                </div>
            )}

            {/* More information */}
            {project.info3 && (
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                        I gained confidence...
                    </h3>
                    <p style={{ fontSize: '1rem', fontWeight: 600 }}>{project.info3}</p>
                </div>
            )}

            {/* Additional information */}
            {project.info4 && (
                <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                        If we had more time...
                    </h3>
                    <p style={{ fontSize: '1rem', fontWeight: 600 }}>{project.info4}</p>
                </div>
            )}
        </div>
    );
};

export default SociaLiftPage;