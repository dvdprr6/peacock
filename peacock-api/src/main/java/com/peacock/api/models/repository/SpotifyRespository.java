package com.peacock.api.models.repository;

import com.peacock.api.models.dto.AuthTokenDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

import java.net.URI;

@Repository
public class SpotifyRespository {
    private static String SPOTIFY_TOKEN = "https://accounts.spotify.com/api/token";

    @Autowired
    private RestTemplate restTemplate;

    public void postAuthToken(AuthTokenDto authTokenDto) throws Exception{

        String token = authTokenDto.getClientId() + ":" + authTokenDto.getClientSecret();

        RequestEntity<String> request = RequestEntity
                .post(new URI(SPOTIFY_TOKEN))
                .header("Authorization", "Basic " + token)
                .accept(MediaType.APPLICATION_FORM_URLENCODED)
                .body()
    }

}
