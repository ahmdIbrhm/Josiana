package com.josianaBackend.josianaBackend.controller;

import com.josianaBackend.josianaBackend.config.ProjectMapper;
import com.josianaBackend.josianaBackend.entity.Project;
import com.josianaBackend.josianaBackend.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/projects")
public class ProjectController {

    @Autowired
    ProjectMapper projectMapper;

    @Autowired
    ProjectService projectService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Project> getAllFreeProjects()
    {
        return projectService.getAllAvailableProjects();
    }

    @PostMapping
    public ResponseEntity<Project> createProject(@RequestBody long id) {
        Project project =  projectService.createProject(projectMapper.mapToProject(Long.valueOf(id)));
        if(project != null)
            return new ResponseEntity<>(project, HttpStatus.CREATED);
        return new ResponseEntity<>(null, HttpStatus.CONFLICT);
    }
}
