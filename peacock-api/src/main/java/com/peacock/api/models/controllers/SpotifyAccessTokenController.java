package com.peacock.api.models.controllers;

import com.peacock.api.models.dto.EmptyJsonBodyDto;
import com.peacock.api.models.dto.SpotifyAccessTokenDto;
import com.peacock.api.models.services.SpotifyAccessTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
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
    public ResponseEntity getAllAuthTokens(){
        SpotifyAccessTokenDto spotifyAccessTokenDto = spotifyAccessTokenService.getAuthTokens();
        if(spotifyAccessTokenDto != null){
            return ok(spotifyAccessTokenDto);
        }else{
            EmptyJsonBodyDto emptyJsonBodyDto = new EmptyJsonBodyDto();
            return ok(emptyJsonBodyDto);
        }
    }

    @JsonRequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<SpotifyAccessTokenDto> saveAuth(@RequestBody SpotifyAccessTokenDto spotifyAccessTokenDto){
        spotifyAccessTokenService.saveAuth(spotifyAccessTokenDto);

        SpotifyAccessTokenDto spotifyAccessAuthTokenDto = spotifyAccessTokenService.getAuthTokens();

        return created(spotifyAccessAuthTokenDto);
    }

    @JsonRequestMapping(method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity<SpotifyAccessTokenDto> updateAuth(@RequestBody SpotifyAccessTokenDto spotifyAccessTokenDto){
        spotifyAccessTokenService.updateAuth(spotifyAccessTokenDto);
        SpotifyAccessTokenDto spotifyAccessAuthTokenDto = spotifyAccessTokenService.getAuthTokens();

        return ok(spotifyAccessAuthTokenDto);
    }

    @JsonRequestMapping(method = RequestMethod.DELETE)
    @ResponseBody
    public ResponseEntity<SpotifyAccessTokenDto> deleteAuth(@RequestBody SpotifyAccessTokenDto spotifyAccessTokenDto){
        spotifyAccessTokenService.deleteAuth(spotifyAccessTokenDto);
        SpotifyAccessTokenDto spotifyAccessAuthTokenDto = spotifyAccessTokenService.getAuthTokens();

        return ok(spotifyAccessAuthTokenDto);
    }
}
