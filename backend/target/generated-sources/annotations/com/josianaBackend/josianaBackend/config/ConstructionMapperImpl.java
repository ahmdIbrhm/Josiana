package com.josianaBackend.josianaBackend.config;

import com.josianaBackend.josianaBackend.dto.construction.CreateConstructionDTO;
import com.josianaBackend.josianaBackend.dto.construction.EditConstructionDTO;
import com.josianaBackend.josianaBackend.dto.construction.GetConstructionDTO;
import com.josianaBackend.josianaBackend.dto.construction.GetConstructionsWithNgos;
import com.josianaBackend.josianaBackend.entity.Construction;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-11-28T22:27:32+0100",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 20.0.1 (Homebrew)"
)
@Component
public class ConstructionMapperImpl implements ConstructionMapper {

    @Autowired
    private ProjectMapper projectMapper;

    @Override
    public Construction mapToConstruction(CreateConstructionDTO constructionDTO) {
        if ( constructionDTO == null ) {
            return null;
        }

        Construction construction = new Construction();

        construction.setProject( projectMapper.mapToProject( constructionDTO.getProjectId() ) );
        construction.setArchitect( constructionDTO.getArchitect() );
        construction.setContractor( constructionDTO.getContractor() );
        construction.setCivilEngineer( constructionDTO.getCivilEngineer() );
        construction.setNumberOfSubcontractors( constructionDTO.getNumberOfSubcontractors() );

        return construction;
    }

    @Override
    public GetConstructionDTO mapToGetConstructionDto(Construction construction) {
        if ( construction == null ) {
            return null;
        }

        GetConstructionDTO getConstructionDTO = new GetConstructionDTO();

        getConstructionDTO.setId( (int) construction.getId() );
        getConstructionDTO.setProject( construction.getProject() );
        getConstructionDTO.setArchitect( construction.getArchitect() );
        getConstructionDTO.setContractor( construction.getContractor() );
        getConstructionDTO.setCivilEngineer( construction.getCivilEngineer() );
        getConstructionDTO.setNumberOfSubcontractors( construction.getNumberOfSubcontractors() );
        getConstructionDTO.setProgress( construction.getProgress() );

        return getConstructionDTO;
    }

    @Override
    public List<GetConstructionDTO> mapToGetConstructionDto(List<Construction> constructionList) {
        if ( constructionList == null ) {
            return null;
        }

        List<GetConstructionDTO> list = new ArrayList<GetConstructionDTO>( constructionList.size() );
        for ( Construction construction : constructionList ) {
            list.add( mapToGetConstructionDto( construction ) );
        }

        return list;
    }

    @Override
    public void updateConstructionFromDTO(EditConstructionDTO editConstructionDTO, Construction construction) {
        if ( editConstructionDTO == null ) {
            return;
        }

        if ( editConstructionDTO.getArchitect() != null ) {
            construction.setArchitect( editConstructionDTO.getArchitect() );
        }
        if ( editConstructionDTO.getContractor() != null ) {
            construction.setContractor( editConstructionDTO.getContractor() );
        }
        if ( editConstructionDTO.getCivilEngineer() != null ) {
            construction.setCivilEngineer( editConstructionDTO.getCivilEngineer() );
        }
        construction.setNumberOfSubcontractors( editConstructionDTO.getNumberOfSubcontractors() );
        construction.setProgress( editConstructionDTO.getProgress() );
    }

    @Override
    public GetConstructionsWithNgos mapToGetConstructionsWithNgos(Construction construction) {
        if ( construction == null ) {
            return null;
        }

        GetConstructionsWithNgos getConstructionsWithNgos = new GetConstructionsWithNgos();

        getConstructionsWithNgos.setConstructionId( (int) construction.getId() );
        if ( construction.getDecision() != null ) {
            getConstructionsWithNgos.setDecision( construction.getDecision().name() );
        }
        getConstructionsWithNgos.setNgo( construction.getNgo() );
        getConstructionsWithNgos.setProject( construction.getProject() );
        getConstructionsWithNgos.setArchitect( construction.getArchitect() );
        getConstructionsWithNgos.setContractor( construction.getContractor() );
        getConstructionsWithNgos.setCivilEngineer( construction.getCivilEngineer() );
        getConstructionsWithNgos.setNumberOfSubcontractors( construction.getNumberOfSubcontractors() );
        getConstructionsWithNgos.setProgress( construction.getProgress() );

        return getConstructionsWithNgos;
    }

    @Override
    public List<GetConstructionsWithNgos> mapToGetConstructionsWithNgos(List<Construction> constructionList) {
        if ( constructionList == null ) {
            return null;
        }

        List<GetConstructionsWithNgos> list = new ArrayList<GetConstructionsWithNgos>( constructionList.size() );
        for ( Construction construction : constructionList ) {
            list.add( mapToGetConstructionsWithNgos( construction ) );
        }

        return list;
    }
}
