package com.josianaBackend.josianaBackend.config;

import com.josianaBackend.josianaBackend.dto.construction.CreateConstructionDTO;
import com.josianaBackend.josianaBackend.dto.construction.EditConstructionDTO;
import com.josianaBackend.josianaBackend.dto.construction.GetConstructionDTO;
import com.josianaBackend.josianaBackend.dto.construction.GetConstructionsWithNgos;
import com.josianaBackend.josianaBackend.entity.Construction;
import org.mapstruct.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper(componentModel = "spring", uses = ProjectMapper.class)
@Component
public interface ConstructionMapper {

    @Mappings({
            @Mapping(source = "projectId", target = "project"),
    })
    Construction mapToConstruction(CreateConstructionDTO constructionDTO);

    GetConstructionDTO mapToGetConstructionDto(Construction construction);

    List<GetConstructionDTO> mapToGetConstructionDto(List<Construction> constructionList);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE, nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
    void updateConstructionFromDTO(EditConstructionDTO editConstructionDTO, @MappingTarget Construction construction);

    @Mappings(@Mapping(source = "id", target = "constructionId"))
    GetConstructionsWithNgos mapToGetConstructionsWithNgos(Construction construction);

    List<GetConstructionsWithNgos> mapToGetConstructionsWithNgos(List<Construction> constructionList);
}
