package com.josianaBackend.josianaBackend.dto.construction;

import lombok.Data;

@Data
public class EditConstructionDTO {
    private String architect;

    private String contractor;

    private String civilEngineer;

    private int numberOfSubcontractors;

    private int progress;
}
