package com.peacock.api.models.controllers;

import com.peacock.api.commons.dto.PayloadCollectionDto;
import com.peacock.api.models.dto.AuthTokenDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/authentication")
public class AuthenticationController extends RestUtils {

    @JsonRequestMapping(value = "/initialize", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<PayloadCollectionDto<AuthTokenDto>> initialize(@RequestBody AuthTokenDto authTokenDto){
        return null;
    }
}
