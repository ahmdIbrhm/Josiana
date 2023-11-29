package com.josianaBackend.josianaBackend.model;

import com.josianaBackend.josianaBackend.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class LoginRes {

    private String token;
}
