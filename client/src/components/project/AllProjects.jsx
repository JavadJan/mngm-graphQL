import React from 'react'
import { ProjectCard } from './ProjectCard'
import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../queries/projectQuery'

export const Projects = () => {
    const { loading, error, data } = useQuery(GET_PROJECTS)
    if (loading) return (
        <div className="spinner-border position-absolute top-50 start-50" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )

    if (error) {
        return (<p>something went wrong!</p>)
    }
    return (
        <div className='mt-4'>
            {data.projects.map((project) =>
                <ProjectCard project={project} />
            )}
        </div>
    )
}
