package com.josianaBackend.josianaBackend.config;

import com.josianaBackend.josianaBackend.dto.user.CreateUserDTO;
import com.josianaBackend.josianaBackend.dto.user.GetNgoDTO;
import com.josianaBackend.josianaBackend.entity.User;
import com.josianaBackend.josianaBackend.enum_values.UserRole;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-12-01T19:28:57+0100",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 20.0.1 (Homebrew)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User mapToUser(CreateUserDTO createUserDTO) {
        if ( createUserDTO == null ) {
            return null;
        }

        User user = new User();

        user.setName( createUserDTO.getName() );
        user.setEmail( createUserDTO.getEmail() );
        user.setPassword( createUserDTO.getPassword() );
        if ( createUserDTO.getRole() != null ) {
            user.setRole( Enum.valueOf( UserRole.class, createUserDTO.getRole() ) );
        }
        user.setPhoneNumber( createUserDTO.getPhoneNumber() );

        return user;
    }

    @Override
    public GetNgoDTO mapToGetNgoDTO(User user) {
        if ( user == null ) {
            return null;
        }

        GetNgoDTO getNgoDTO = new GetNgoDTO();

        getNgoDTO.setName( user.getName() );
        getNgoDTO.setEmail( user.getEmail() );
        getNgoDTO.setPhoneNumber( user.getPhoneNumber() );

        return getNgoDTO;
    }

    @Override
    public List<GetNgoDTO> mapToGetNgoDTO(List<User> users) {
        if ( users == null ) {
            return null;
        }

        List<GetNgoDTO> list = new ArrayList<GetNgoDTO>( users.size() );
        for ( User user : users ) {
            list.add( mapToGetNgoDTO( user ) );
        }

        return list;
    }
}
