package com.peacock.api.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RestrictionDto implements IDto{
    @JsonProperty("reason")
    private String reason;

    public RestrictionDto() {}

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }
}
