package com.josianaBackend.josianaBackend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class HomeController {
    @ResponseBody
    @RequestMapping(value = "",method = RequestMethod.GET)
    public String hello(){
        return "hello world";
    }

}
