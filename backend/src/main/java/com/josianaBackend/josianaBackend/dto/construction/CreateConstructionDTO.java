package com.josianaBackend.josianaBackend.dto.construction;

import lombok.Data;

@Data
public class CreateConstructionDTO {
    private long ngoId;

    private long projectId;

    private String architect;

    private String contractor;

    private String civilEngineer;

    private int numberOfSubcontractors;
}
