package com.peacock.api.models.controllers;

import com.peacock.api.models.dto.SpotifyAccessTokenDto;
import com.peacock.api.models.services.SpotifyAccessTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping(value = "/authToken")
public class SpotifyAccessTokenController extends RestUtils {

    @Autowired
    private SpotifyAccessTokenService spotifyAccessTokenService;

    @JsonRequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<List<SpotifyAccessTokenDto>> getAllAuthTokens(){
        List<SpotifyAccessTokenDto> spotifyAccessTokenDtoList = spotifyAccessTokenService.getAuthTokens();

        return ok(spotifyAccessTokenDtoList);
    }

    @JsonRequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<List<SpotifyAccessTokenDto>> saveAuth(@RequestBody SpotifyAccessTokenDto spotifyAccessTokenDto){
        spotifyAccessTokenService.saveAuth(spotifyAccessTokenDto);
        List<SpotifyAccessTokenDto> spotifyAccessTokenDtoList = spotifyAccessTokenService.getAuthTokens();

        return created(spotifyAccessTokenDtoList);
    }

    @JsonRequestMapping(method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity<List<SpotifyAccessTokenDto>> updateAuth(@RequestBody SpotifyAccessTokenDto spotifyAccessTokenDto){
        spotifyAccessTokenService.updateAuth(spotifyAccessTokenDto);
        List<SpotifyAccessTokenDto> spotifyAccessTokenDtoList = spotifyAccessTokenService.getAuthTokens();

        return ok(spotifyAccessTokenDtoList);
    }

    @JsonRequestMapping(method = RequestMethod.DELETE)
    @ResponseBody
    public ResponseEntity<List<SpotifyAccessTokenDto>> deleteAuth(@RequestBody SpotifyAccessTokenDto spotifyAccessTokenDto){
        spotifyAccessTokenService.deleteAuth(spotifyAccessTokenDto);
        List<SpotifyAccessTokenDto> spotifyAccessTokenDtoList = spotifyAccessTokenService.getAuthTokens();

        return ok(spotifyAccessTokenDtoList);
    }
}
