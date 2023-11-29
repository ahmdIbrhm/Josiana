package com.josianaBackend.josianaBackend.controller;

import com.josianaBackend.josianaBackend.config.ConstructionMapper;
import com.josianaBackend.josianaBackend.dto.construction.CreateConstructionDTO;
import com.josianaBackend.josianaBackend.dto.construction.EditConstructionDTO;
import com.josianaBackend.josianaBackend.dto.construction.GetConstructionDTO;
import com.josianaBackend.josianaBackend.dto.construction.GetConstructionsWithNgos;
import com.josianaBackend.josianaBackend.entity.Construction;
import com.josianaBackend.josianaBackend.entity.User;
import com.josianaBackend.josianaBackend.service.ConstructionService;
import com.josianaBackend.josianaBackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/constructions")
public class ConstructionController {

    @Autowired
    private ConstructionMapper constructionMapper;
    @Autowired
    private ConstructionService constructionService;

    @Autowired
    private UserService userService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> createConstruction(@RequestBody CreateConstructionDTO createConstructionDTO) {
        User ngo = userService.getUser(createConstructionDTO.getNgoId());
        Construction construction = constructionMapper.mapToConstruction(createConstructionDTO);
        construction.setNgo(ngo);
        Construction savedConstruction = constructionService.createConstruction(construction);
        if (savedConstruction != null)
            return new ResponseEntity<>(true, HttpStatus.CREATED);
        return new ResponseEntity<>(false, HttpStatus.ALREADY_REPORTED);
    }

    @PutMapping(value = "/{constructionId}/decision")
    public ResponseEntity<Boolean> acceptConstruction(@PathVariable int constructionId, @RequestParam(name = "accepted") boolean accepted) {
        Construction construction = constructionService.getConstruction(Long.valueOf(constructionId));
        constructionService.editConstructionDecision(construction, accepted);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @GetMapping(value = "/ngo/{ngoId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<GetConstructionDTO> getConstructionsByNgo(@PathVariable int ngoId) {
        User user = userService.getUser(ngoId);
        List<Construction> constructionList = constructionService.getConstructionsByNgo(user);
        return constructionMapper.mapToGetConstructionDto(constructionList);
    }

    @PutMapping(value = "/{constructionId}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> editConstruction(@PathVariable int constructionId, @RequestBody EditConstructionDTO editConstructionDTO) {
        Construction construction = constructionService.getConstruction(constructionId);
        Construction editedConstruction = constructionService.editConstruction(construction, editConstructionDTO);
        if (editedConstruction != null)
            return new ResponseEntity<>(true, HttpStatus.OK);
        else
            return new ResponseEntity<>(false, HttpStatus.CONFLICT);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<GetConstructionsWithNgos> getConstructionsWithNgos() {
        return constructionMapper.mapToGetConstructionsWithNgos(constructionService.getConstructionsWithNgos());
    }

    @GetMapping(value ="/{constructionId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public GetConstructionDTO getConstructionById(@PathVariable int constructionId) {
        Construction construction = constructionService.getConstruction(Long.valueOf(constructionId));
        return constructionMapper.mapToGetConstructionDto(construction);
    }
}
