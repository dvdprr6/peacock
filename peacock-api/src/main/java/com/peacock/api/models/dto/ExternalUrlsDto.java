package com.peacock.api.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ExternalUrlsDto implements IDto{
    @JsonProperty("spotify")
    private String spotify;

    public ExternalUrlsDto(){}

    public String getSpotify() {
        return spotify;
    }

    public void setSpotify(String spotify) {
        this.spotify = spotify;
    }
}
