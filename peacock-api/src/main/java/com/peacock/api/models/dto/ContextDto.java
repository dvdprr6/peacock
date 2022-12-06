package com.peacock.api.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ContextDto implements IDto{
    @JsonProperty("type")
    private String type;
    @JsonProperty("href")
    private String href;
    @JsonProperty("external_urls")
    private ExternalUrlsDto externalUrls;
    @JsonProperty("url")
    private String url;

    public ContextDto() {}

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getHref() {
        return href;
    }

    public void setHref(String href) {
        this.href = href;
    }

    public ExternalUrlsDto getExternalUrls() {
        return externalUrls;
    }

    public void setExternalUrls(ExternalUrlsDto externalUrls) {
        this.externalUrls = externalUrls;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
