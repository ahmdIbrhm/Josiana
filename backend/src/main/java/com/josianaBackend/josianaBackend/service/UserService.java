package com.josianaBackend.josianaBackend.service;

import com.josianaBackend.josianaBackend.entity.User;
import com.josianaBackend.josianaBackend.enum_values.UserRole;
import com.josianaBackend.josianaBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User addUser (User user) {
        return userRepository.save(user);
    }

    public User getUser (long id) {
        return userRepository.findById(id).orElseThrow();
    }

    public User getUserByEmail (String email) {
        return userRepository.findByEmail(email);
    }

    public List<User> getAllNGOs() {
        return  userRepository.findByRole(UserRole.NGO);
    }
}
