package com.peacock.api.models.services;

import com.peacock.api.models.dto.SpotifyAccessTokenDto;
import com.peacock.api.models.entities.SpotifyAccessTokenEntity;
import com.peacock.api.models.repository.SpotifyAccessTokenRepository;
import com.peacock.api.models.repository.SpotifyApiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlayerService {
    @Autowired
    private SpotifyAccessTokenRepository spotifyAccessTokenRepository;

    @Autowired
    private SpotifyApiRepository spotifyApiRepository;

//    public void getCurrentlyPlayingTrack(){
//        SpotifyAccessTokenEntity spotifyAccessTokenEntity = spotifyAccessTokenRepository.getAll().
//    }

}
