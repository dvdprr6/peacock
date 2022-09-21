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

@Controller
@RequestMapping(value = "/authToken")
public class AuthTokenController extends RestUtils {

    @Autowired
    private AuthTokenService authTokenService;

    @JsonRequestMapping(value = "/initialize", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity initialize(@RequestBody AuthTokenDto authTokenDto){

        try{
            authTokenService.addAuthTokens(authTokenDto);
            return created();
        }catch(Exception e){
            return internalServerError();
        }
    }
}
