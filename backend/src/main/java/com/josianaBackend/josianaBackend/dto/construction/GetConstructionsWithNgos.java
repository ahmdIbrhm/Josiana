package com.josianaBackend.josianaBackend.dto.construction;

import com.josianaBackend.josianaBackend.entity.Project;
import com.josianaBackend.josianaBackend.entity.User;
import lombok.Data;

@Data
public class GetConstructionsWithNgos {

    private int constructionId;
    private String decision;
    private User ngo;
    private Project project;
    private String architect;
    private String contractor;
    private String civilEngineer;
    private int numberOfSubcontractors;
    private int progress;
}
