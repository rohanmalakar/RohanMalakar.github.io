import React from 'react'

// This function is required for static export with dynamic routes
export async function generateStaticParams() {
  // Return an array of all possible project IDs based on your projects data
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ]
}

async function ProjectDetails({params}) {
  const {id}=await params;
    return (
      <>
         <div>ProjectDetails</div>
         <div>{id}</div>
      </>
    
  )
}

export default ProjectDetails