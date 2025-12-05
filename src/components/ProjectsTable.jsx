import React from 'react';
import { projects } from '../data';

const ProjectsTable = () => {
    return (
        <div className="projects-container">
            <h3>Projects Overview</h3>
            <table className="projects-table">
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Status</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <td className="project-name">{project.name}</td>
                            <td>
                                <span className={`status-badge ${project.status.toLowerCase()}`}>
                                    {project.status}
                                </span>
                            </td>
                            <td className="project-notes">{project.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectsTable;
