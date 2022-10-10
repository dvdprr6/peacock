package com.peacock.api.models.dto;

import java.util.List;

public class SpotifyAccessTokenDto implements IDto {
    private Long id;
    private String name;
    private String clientId;
    private String clientSecret;
    private String refreshToken;
    private String accessToken;
    private String status;
    private List<ScopeDto> scopes;
    public SpotifyAccessTokenDto(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    public String getClientSecret() {
        return clientSecret;
    }

    public void setClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
    }

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
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<ScopeDto> getScopes() {
        return scopes;
    }

    public void setScopes(List<ScopeDto> scopes) {
        this.scopes = scopes;
    }
}
