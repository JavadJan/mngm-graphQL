import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProjectCard = ({ project }) => {    

    return (
        <div className='col-md-2'>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">
                            {project.name}
                        </h5>
                        <a href={`/project/${project.id}`}>View</a>
                    </div>
                    <p className='small'>
                        Status: <strong>{project.status}</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}