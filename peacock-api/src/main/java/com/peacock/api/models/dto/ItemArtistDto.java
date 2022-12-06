package com.peacock.api.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class ItemArtistDto implements IDto{
    @JsonProperty("external_urls")
    private ExternalUrlsDto externalUrlsDto;
    @JsonProperty("followers")
    private FollowersDto followers;
    @JsonProperty("genres")
    private List<String> genres;
    @JsonProperty("href")
    private String href;
    @JsonProperty("id")
    private String id;
    @JsonProperty("images")
    private List<ImageDto> images;
    @JsonProperty("name")
    private String name;
    @JsonProperty("popularity")
    private Integer popularity;
    @JsonProperty("type")
    private String type;
    @JsonProperty("uri")
    private String uri;

    public ItemArtistDto (){}

    public ExternalUrlsDto getExternalUrlsDto() {
        return externalUrlsDto;
    }

    public void setExternalUrlsDto(ExternalUrlsDto externalUrlsDto) {
        this.externalUrlsDto = externalUrlsDto;
    }

    public FollowersDto getFollowers() {
        return followers;
    }

    public void setFollowers(FollowersDto followers) {
        this.followers = followers;
    }

    public List<String> getGenres() {
        return genres;
    }

    public void setGenres(List<String> genres) {
        this.genres = genres;
    }

    public String getHref() {
        return href;
    }

    public void setHref(String href) {
        this.href = href;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<ImageDto> getImages() {
        return images;
    }

    public void setImages(List<ImageDto> images) {
        this.images = images;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPopularity() {
        return popularity;
    }

    public void setPopularity(Integer popularity) {
        this.popularity = popularity;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }
}
