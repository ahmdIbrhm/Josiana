package com.josianaBackend.josianaBackend.repository;

import com.josianaBackend.josianaBackend.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

    @Query("SELECT p FROM Project p WHERE p.id NOT IN (SELECT c.project.id FROM Construction c)")
    List<Project> findAvailableProjects();

}
