package com.josianaBackend.josianaBackend.dto.user;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GetLoggedInUserDTO {
    private Long id;
    private String name;
    private String email;
    private String role;
    private String phoneNumber;
    private String token;
}
