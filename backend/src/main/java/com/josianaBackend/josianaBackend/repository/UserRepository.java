package com.josianaBackend.josianaBackend.repository;

import com.josianaBackend.josianaBackend.entity.User;
import com.josianaBackend.josianaBackend.enum_values.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    public List<User> findByRole(UserRole role);

    public User findByEmail(String email);
}
