package com.peacock.api.models.services;

import com.peacock.api.commons.mapper.utils.ModelConverter;
import com.peacock.api.models.dto.AuthTokenDto;
import com.peacock.api.models.entities.AuthTokenEntity;
import com.peacock.api.models.repository.AuthTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthTokenService {

    @Autowired
    private AuthTokenRepository authTokenRepository;

    public List<AuthTokenDto> getAllAuthTokens(){
        List<AuthTokenEntity> authTokenEntityList = authTokenRepository.getAll();

        List<AuthTokenDto> authTokenDtoList = authTokenEntityList.stream()
                .map(entity -> ModelConverter.convertToDto(entity, AuthTokenDto.class))
                .collect(Collectors.toList());

        return authTokenDtoList;
    }

    public void addAuthTokens(AuthTokenDto authTokenDto){
        AuthTokenEntity authTokenEntity = ModelConverter.convertToEntity(authTokenDto, AuthTokenEntity.class);

        authTokenRepository.insert(authTokenEntity);
    }
}

