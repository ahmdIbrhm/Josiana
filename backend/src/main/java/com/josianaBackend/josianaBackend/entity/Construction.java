package com.josianaBackend.josianaBackend.entity;

import com.josianaBackend.josianaBackend.enum_values.ConstructionDecision;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "constructions")
public class Construction {
    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE)
    @Column(nullable=false, updatable=false)
    private long id;

    @Enumerated(EnumType.STRING)
    private ConstructionDecision decision = ConstructionDecision.PENDING;

    @JoinColumn(name = "ngo_id")
    @ManyToOne
    private User ngo;

    @JoinColumn(name = "project_id")
    @ManyToOne
    private Project project;

    private String architect;

    private String contractor;

    @Column(name = "civil_engineer")
    private String civilEngineer;

    @Column(name = "number_of_subcontractors")
    private int numberOfSubcontractors;

    private int progress = 0;

}
