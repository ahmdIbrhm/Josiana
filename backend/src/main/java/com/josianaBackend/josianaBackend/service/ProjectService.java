package com.josianaBackend.josianaBackend.service;


import com.josianaBackend.josianaBackend.entity.Project;
import com.josianaBackend.josianaBackend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    ProjectRepository projectRepository;

    public List<Project> getAllAvailableProjects() {
        return projectRepository.findAvailableProjects();
    }

    public Project getProject(long id) {
        return projectRepository.findById(id).orElse(null);
    }

    public Project createProject(Project project) {
        Project existingProject = getProject(project.getId());
        if (existingProject == null)
            return projectRepository.save(project);
        return null;
    }
}
