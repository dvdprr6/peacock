package com.peacock.api.models.controllers;

import com.peacock.api.models.dto.AuthTokenDto;
import com.peacock.api.models.services.AuthTokenService;
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
public class AuthTokenController extends RestUtils {

    @Autowired
    private AuthTokenService authTokenService;

    @JsonRequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<List<AuthTokenDto>> getAllAuthTokens(){
        List<AuthTokenDto> authTokenDtoList = authTokenService.getAuthTokens();

        return ok(authTokenDtoList);
    }

    @JsonRequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<List<AuthTokenDto>> saveAuth(@RequestBody AuthTokenDto authTokenDto){
        authTokenService.saveAuth(authTokenDto);
        List<AuthTokenDto> authTokenDtoList = authTokenService.getAuthTokens();

        return created(authTokenDtoList);
    }

    @JsonRequestMapping(method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity<List<AuthTokenDto>> updateAuth(@RequestBody AuthTokenDto authTokenDto){
        authTokenService.updateAuth(authTokenDto);
        List<AuthTokenDto> authTokenDtoList = authTokenService.getAuthTokens();

        return ok(authTokenDtoList);
    }
}
