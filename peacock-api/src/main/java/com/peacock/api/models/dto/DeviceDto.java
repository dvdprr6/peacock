package com.peacock.api.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceDto implements IDto{
    @JsonProperty("id")
    private String id;
    @JsonProperty("is_active")
    private Boolean isActive;
    @JsonProperty("is_private_session")
    private Boolean isPrivateSession;
    @JsonProperty("is_restricted")
    private Boolean isRestricted;
    @JsonProperty("name")
    private String name;
    @JsonProperty("type")
    private String type;
    @JsonProperty("volume_percent")
    private Integer volumePercent;

    public DeviceDto(){}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }

    public Boolean getPrivateSession() {
        return isPrivateSession;
    }

    public void setPrivateSession(Boolean privateSession) {
        isPrivateSession = privateSession;
    }

    public Boolean getRestricted() {
        return isRestricted;
    }

    public void setRestricted(Boolean restricted) {
        isRestricted = restricted;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getVolumePercent() {
        return volumePercent;
    }

    public void setVolumePercent(Integer volumePercent) {
        this.volumePercent = volumePercent;
    }
}
