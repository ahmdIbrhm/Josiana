package com.josianaBackend.josianaBackend.dto.user;

import lombok.Data;


@Data
public class CreateUserDTO {
    private String name;
    private String email;
    private String role;
    private String password;
    private String phoneNumber;
}
