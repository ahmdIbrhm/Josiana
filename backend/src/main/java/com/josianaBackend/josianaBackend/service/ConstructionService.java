package com.josianaBackend.josianaBackend.service;

import com.josianaBackend.josianaBackend.config.ConstructionMapper;
import com.josianaBackend.josianaBackend.dto.construction.EditConstructionDTO;
import com.josianaBackend.josianaBackend.entity.Construction;
import com.josianaBackend.josianaBackend.entity.User;
import com.josianaBackend.josianaBackend.enum_values.ConstructionDecision;
import com.josianaBackend.josianaBackend.repository.ConstructionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConstructionService {

    @Autowired
    private ConstructionRepository constructionRepository;

    @Autowired
    UserService userService;

    @Autowired
    ConstructionMapper constructionMapper;

    @Autowired
    ProjectService projectService;
    public Construction createConstruction (Construction construction) {
        return constructionRepository.save(construction);
    }

    public Construction getConstruction (long id) {
        return constructionRepository.findById(id).orElseThrow();
    }

    public void editConstructionDecision(Construction construction, boolean accepted) {
        if(accepted)
            construction.setDecision(ConstructionDecision.ACCEPTED);
        else
            construction.setDecision(ConstructionDecision.DECLINED);
        constructionRepository.save(construction);
    }

    public List<Construction> getConstructionsByNgo(User user) {
        return constructionRepository.findByNgoAndDecision(user, ConstructionDecision.ACCEPTED);
    }

    public Construction editConstruction(Construction construction, EditConstructionDTO editConstructionDTO) {
        constructionMapper.updateConstructionFromDTO(editConstructionDTO, construction);
        return constructionRepository.save(construction);
    }

    public List<Construction> getConstructionsWithNgos() {
        return constructionRepository.findConstructionsWithNgos();
    }
}