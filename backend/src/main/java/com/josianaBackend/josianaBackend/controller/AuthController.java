package com.josianaBackend.josianaBackend.controller;
import com.josianaBackend.josianaBackend.auth.JwtUtil;
import com.josianaBackend.josianaBackend.config.UserMapper;
import com.josianaBackend.josianaBackend.dto.user.CreateUserDTO;
import com.josianaBackend.josianaBackend.dto.user.GetLoggedInUserDTO;
import com.josianaBackend.josianaBackend.entity.User;
import com.josianaBackend.josianaBackend.model.ErrorRes;
import com.josianaBackend.josianaBackend.model.LoginReq;
import com.josianaBackend.josianaBackend.model.LoginRes;
import com.josianaBackend.josianaBackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    UserService userService;

    @Autowired
    UserMapper userMapper;

    @PostMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity login(@RequestBody LoginReq loginReq)  {
        try {
            Authentication authentication = authenticationManager.authenticate
                    (new UsernamePasswordAuthenticationToken(loginReq.getEmail(), loginReq.getPassword()));
            String email = authentication.getName();
            User user = userService.getUserByEmail(email);
            String token = jwtUtil.createToken(user);
            GetLoggedInUserDTO getLoggedInUserDTO = new GetLoggedInUserDTO(
                    user.getId(), user.getName(), user.getEmail(), user.getRole().toString(), user.getPhoneNumber(), token
            );
            return ResponseEntity.ok(getLoggedInUserDTO);

        }catch (BadCredentialsException e){
            ErrorRes errorResponse = new ErrorRes(HttpStatus.BAD_REQUEST,"Invalid username or password");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }catch (Exception e){
            ErrorRes errorResponse = new ErrorRes(HttpStatus.BAD_REQUEST, e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    @PostMapping(value = "/signup", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> signup(@RequestBody CreateUserDTO createUserDTO) {
        User createdUser =  userService.addUser(userMapper.mapToUser(createUserDTO));
        if(createdUser != null){
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        return new ResponseEntity<>( HttpStatus.BAD_REQUEST);
    }
}
