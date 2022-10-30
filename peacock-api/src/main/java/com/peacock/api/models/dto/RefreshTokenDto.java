package com.peacock.api.models.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

public class RefreshTokenDto implements IDto{
    @JsonAlias("refresh_token")
    private String refreshToken;
    @JsonAlias("access_token")
    private String accessToken;

    public RefreshTokenDto() {}

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}
