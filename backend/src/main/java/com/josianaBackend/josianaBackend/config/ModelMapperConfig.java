package com.josianaBackend.josianaBackend.config;

import com.josianaBackend.josianaBackend.dto.user.CreateUserDTO;
import com.josianaBackend.josianaBackend.entity.User;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {
    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return modelMapper;
    }

//    public void defineConstructionMapper(ModelMapper modelMapper) {
//        TypeMap<User, CreateUserDTO> propertyMapper = modelMapper.createTypeMap(User.class, CreateUserDTO.class);
//        propertyMapper.addMapping(mapper -> mapper.map(User))
//    }
}
