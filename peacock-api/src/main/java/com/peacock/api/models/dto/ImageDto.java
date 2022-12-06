package com.peacock.api.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ImageDto implements IDto{
    @JsonProperty("url")
    private String url;
    @JsonProperty("height")
    private String height;
    @JsonProperty("width")
    private String width;

    public ImageDto() {}

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getWidth() {
        return width;
    }

    public void setWidth(String width) {
        this.width = width;
    }
}
