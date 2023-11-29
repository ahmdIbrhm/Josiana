package com.josianaBackend.josianaBackend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Value;

@Data
public class LoginReq {
    @JsonProperty(value = "email")
    private String email;

    @JsonProperty(value = "password")
    private String password;
}
