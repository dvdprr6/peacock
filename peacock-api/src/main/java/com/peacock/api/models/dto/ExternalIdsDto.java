package com.peacock.api.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ExternalIdsDto implements IDto{
    @JsonProperty("isrc")
    private String isrc;
    @JsonProperty("ean")
    private String ean;
    @JsonProperty("upc")
    private String upc;

    public ExternalIdsDto() {}

    public String getIsrc() {
        return isrc;
    }

    public void setIsrc(String isrc) {
        this.isrc = isrc;
    }

    public String getEan() {
        return ean;
    }

    public void setEan(String ean) {
        this.ean = ean;
    }

    public String getUpc() {
        return upc;
    }

    public void setUpc(String upc) {
        this.upc = upc;
    }
}
