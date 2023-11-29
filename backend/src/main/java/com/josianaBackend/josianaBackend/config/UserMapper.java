package com.josianaBackend.josianaBackend.config;

import com.josianaBackend.josianaBackend.dto.construction.GetConstructionsWithNgos;
import com.josianaBackend.josianaBackend.dto.user.CreateUserDTO;
import com.josianaBackend.josianaBackend.dto.user.GetNgoDTO;
import com.josianaBackend.josianaBackend.entity.User;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper(componentModel = "spring")
@Component
public interface UserMapper {

    User mapToUser(CreateUserDTO createUserDTO);

    GetNgoDTO mapToGetNgoDTO(User user);

    List<GetNgoDTO> mapToGetNgoDTO(List<User> users);
}
