import Link from 'next/link';
import { projects } from '../projects';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams(): Promise<PageProps['params'][]> {
  const projectsParams: PageProps['params'][] = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" }
  ];
  return projectsParams;
}

export default function ProjectPage({ params: { id } }: PageProps) {
  const project = projects[Number(id)];

  if (!project) {
    return (
      <div>
        <header>
          <Link href="/code">
            Back to Projects
          </Link>
        </header>
        <main>
          <p>Project not found.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <header>
        <Link href="/code">
          Back to Projects
        </Link>
      </header>
      <main>
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="mb-4">{project.info}</p>
        <div>
          <h2 className="text-2xl font-semibold">Project Details</h2>
          <p>{project.info}</p>
        </div>
      </main>
    </div>
  );
}