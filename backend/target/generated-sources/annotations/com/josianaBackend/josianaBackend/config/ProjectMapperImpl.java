package com.josianaBackend.josianaBackend.config;

import com.josianaBackend.josianaBackend.entity.Project;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-11-28T22:27:32+0100",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 20.0.1 (Homebrew)"
)
@Component
public class ProjectMapperImpl implements ProjectMapper {

    @Override
    public Project mapToProject(Long id) {
        if ( id == null ) {
            return null;
        }

        Project project = new Project();

        project.setId( id );

        return project;
    }
}
