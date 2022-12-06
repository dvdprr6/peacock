package com.peacock.api.models.controllers;

import com.peacock.api.models.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "player")
public class PlayerController extends RestUtils{
    @Autowired
    private PlayerService playerService;

    @JsonRequestMapping(value = "/current", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity getCurrentPlayingTrack(){
        playerService.getCurrentlyPlayingTrack();
        return null;
    }

}
