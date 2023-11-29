package com.josianaBackend.josianaBackend.repository;


import com.josianaBackend.josianaBackend.entity.Construction;
import com.josianaBackend.josianaBackend.entity.User;
import com.josianaBackend.josianaBackend.enum_values.ConstructionDecision;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConstructionRepository extends JpaRepository<Construction, Long> {

    public List<Construction> findByNgoAndDecision(User Ngo, ConstructionDecision constructionDecision);

    @Query("SELECT r FROM Construction r JOIN FETCH r.ngo")
    public List<Construction> findConstructionsWithNgos();
}
