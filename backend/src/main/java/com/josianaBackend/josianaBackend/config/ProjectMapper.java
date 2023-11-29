package com.josianaBackend.josianaBackend.config;

import com.josianaBackend.josianaBackend.entity.Project;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
@Component
public interface ProjectMapper {

    Project mapToProject(Long id);
}
