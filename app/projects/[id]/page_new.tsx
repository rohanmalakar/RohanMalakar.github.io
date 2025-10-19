import React from 'react';
import ProjectDetailClient from './ProjectDetailClient';

// Generate static params for all project IDs
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' }
  ];
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  return <ProjectDetailClient id={params.id} />;
}