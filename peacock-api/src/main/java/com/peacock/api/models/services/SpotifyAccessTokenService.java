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

    public SpotifyAccessTokenDto getAuthTokens(){

        SpotifyAccessTokenEntity spotifyAccessTokenEntity = spotifyAccessTokenRepository.get();

        if(spotifyAccessTokenEntity != null){
            SpotifyAccessTokenDto spotifyAccessTokenDto = ModelConverter.convertToDto(spotifyAccessTokenEntity, SpotifyAccessTokenDto.class);
            return spotifyAccessTokenDto;
        }else{
            return null;
        }
    }

    public void saveAuth(SpotifyAccessTokenDto spotifyAccessTokenDto){
        SpotifyAccessTokenEntity spotifyAccessTokenEntity = ModelConverter.convertToEntity(spotifyAccessTokenDto, SpotifyAccessTokenEntity.class);

        spotifyAccessTokenRepository.insert(spotifyAccessTokenEntity);
    }

    public void updateAuth(SpotifyAccessTokenDto spotifyAccessTokenDto){
        SpotifyAccessTokenEntity spotifyAccessTokenEntity = ModelConverter.convertToEntity(spotifyAccessTokenDto, SpotifyAccessTokenEntity.class);
        spotifyAccessTokenRepository.update(spotifyAccessTokenEntity);
    }

    public void deleteAuth(SpotifyAccessTokenDto spotifyAccessTokenDto){
        SpotifyAccessTokenEntity spotifyAccessTokenEntity = ModelConverter.convertToEntity(spotifyAccessTokenDto, SpotifyAccessTokenEntity.class);
        spotifyAccessTokenRepository.delete(spotifyAccessTokenEntity);
    }
}

