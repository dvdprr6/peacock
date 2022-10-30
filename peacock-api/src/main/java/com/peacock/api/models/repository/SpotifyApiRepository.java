package com.peacock.api.models.repository;

import com.peacock.api.models.dto.RefreshTokenDto;
import com.peacock.api.models.dto.SpotifyAccessTokenDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;

@Repository
public class SpotifyApiRepository {

    @Autowired
    private RestTemplate restTemplate;

    public SpotifyAccessTokenDto getRefreshToken(SpotifyAccessTokenDto spotifyAccessTokenDto) throws Exception{
        String url = "https://accounts.spotify.com/api/token";
        String refreshToken = spotifyAccessTokenDto.getRefreshToken();

        Map<String, String> urlParams = new HashMap<>();
        urlParams.put("grant_type", "refresh_token");
        urlParams.put("refresh_token", refreshToken);

        HttpHeaders headers = new HttpHeaders();
        headers.setBasicAuth("");
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        RequestEntity<String> request = RequestEntity
                .post(new URI(url))
                .headers(headers)
                .body(urlParams.toString());

        ResponseEntity response = restTemplate.exchange(request, RefreshTokenDto.class);

        RefreshTokenDto refreshTokenDto = (RefreshTokenDto) response.getBody();

        spotifyAccessTokenDto.setRefreshToken(refreshTokenDto.getRefreshToken());
        spotifyAccessTokenDto.setAccessToken(refreshTokenDto.getAccessToken());

        return spotifyAccessTokenDto;
    }

    public void getCurrentlyPlayingTrack(SpotifyAccessTokenDto spotifyAccessTokenDto) throws Exception{
        String url = "https://api.spotify.com/v1/me/player/currently-playing";
        String accessToken = spotifyAccessTokenDto.getAccessToken();
    }

}
