package com.josianaBackend.josianaBackend.controller;

import com.josianaBackend.josianaBackend.config.UserMapper;
import com.josianaBackend.josianaBackend.dto.user.CreateUserDTO;
import com.josianaBackend.josianaBackend.dto.user.GetNgoDTO;
import com.josianaBackend.josianaBackend.entity.User;
import com.josianaBackend.josianaBackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/users")
public class UserController {

    @Autowired
    UserMapper userMapper;

    @Autowired
    UserService userService;

    @GetMapping(value = "/ngo", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<GetNgoDTO> getAllNGOs() {
        return userMapper.mapToGetNgoDTO(userService.getAllNGOs());
    }

}
