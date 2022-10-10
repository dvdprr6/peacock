package com.peacock.api.models.services;

import com.peacock.api.commons.mapper.utils.ModelConverter;
import com.peacock.api.models.dto.SpotifyAccessTokenDto;
import com.peacock.api.models.entities.SpotifyAccessTokenEntity;
import com.peacock.api.models.repository.SpotifyAccessTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SpotifyAccessTokenService {

    @Autowired
    private SpotifyAccessTokenRepository spotifyAccessTokenRepository;

    public List<SpotifyAccessTokenDto> getAuthTokens(){
        List<SpotifyAccessTokenEntity> spotifyAccessTokenEntityList = spotifyAccessTokenRepository.getAll();

        List<SpotifyAccessTokenDto> spotifyAccessTokenDtoList = spotifyAccessTokenEntityList.stream()
                .map(entity -> ModelConverter.convertToDto(entity, SpotifyAccessTokenDto.class))
                .collect(Collectors.toList());

        return spotifyAccessTokenDtoList;
    }

    public void saveAuth(SpotifyAccessTokenDto spotifyAccessTokenDto){
        SpotifyAccessTokenEntity spotifyAccessTokenEntity = ModelConverter.convertToEntity(spotifyAccessTokenDto, SpotifyAccessTokenEntity.class);

        spotifyAccessTokenRepository.insert(spotifyAccessTokenEntity);
    }

    public void updateAuth(SpotifyAccessTokenDto spotifyAccessTokenDto){
        SpotifyAccessTokenEntity spotifyAccessTokenEntity = ModelConverter.convertToEntity(spotifyAccessTokenDto, SpotifyAccessTokenEntity.class);
        spotifyAccessTokenRepository.update(spotifyAccessTokenEntity);
    }
}
