package com.josianaBackend.josianaBackend.auth;

import com.josianaBackend.josianaBackend.entity.User;
import com.josianaBackend.josianaBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.StreamUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class JwtAuthorizationFilter extends OncePerRequestFilter{

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private UserRepository userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        verifyToken(request);
        filterChain.doFilter(request, response);
    }

    private void verifyToken(HttpServletRequest request) {
        String accessToken = jwtUtil.resolveToken(request);
        if (accessToken != null && !accessToken.equalsIgnoreCase("undefined")) {
            Claims claims = jwtUtil.resolveClaims(request);

            if(claims != null & jwtUtil.validateClaims(claims)){
                String email = claims.getSubject();
                User user = userRepository.findByEmail(email);
                Authentication authentication =
                        new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword(), new ArrayList<>());
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }
    }


//        }catch (Exception e){
//            errorDetails.put("message", "Authentication Error");
//            errorDetails.put("details",e.getMessage());
//            response.setStatus(HttpStatus.FORBIDDEN.value());
//            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
//
//            mapper.writeValue(response.getWriter(), errorDetails);
//
//        }
//        filterChain.doFilter(request, response);
//    }


    private String getRequestBody(HttpServletRequest request) throws IOException {
        // Read the request body
        try (BufferedReader reader = request.getReader()) {
            return reader.lines().collect(Collectors.joining(System.lineSeparator()));
        }
    }
}
