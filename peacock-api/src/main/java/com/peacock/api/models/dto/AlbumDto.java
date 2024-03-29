package com.peacock.api.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class AlbumDto implements IDto{
    @JsonProperty("albumType")
    private String albumType;
    @JsonProperty("total_tracks")
    private Integer totalTracks;
    @JsonProperty("available_markets")
    private List<String> availableMarkets;
    @JsonProperty("external_urls")
    private ExternalUrlsDto externalUrls;
    @JsonProperty("href")
    private String href;
    @JsonProperty("id")
    private String id;
    @JsonProperty("images")
    private List<ImageDto> images;
    @JsonProperty("name")
    private String name;
    @JsonProperty("release_date")
    private String releaseDate;
    @JsonProperty("release_date_precision")
    private String releaseDatePrecision;
    @JsonProperty("restrictions")
    private RestrictionDto restrictions;
    @JsonProperty("type")
    private String type;
    @JsonProperty("uri")
    private String uri;
    @JsonProperty("album_group")
    private String albumGroup;
    @JsonProperty("artists")
    private List<AlbumArtistDto> artists;

    public AlbumDto() {}

    public String getAlbumType() {
        return albumType;
    }

    public void setAlbumType(String albumType) {
        this.albumType = albumType;
    }

    public Integer getTotalTracks() {
        return totalTracks;
    }

    public void setTotalTracks(Integer totalTracks) {
        this.totalTracks = totalTracks;
    }

    public List<String> getAvailableMarkets() {
        return availableMarkets;
    }

    public void setAvailableMarkets(List<String> availableMarkets) {
        this.availableMarkets = availableMarkets;
    }

    public ExternalUrlsDto getExternalUrls() {
        return externalUrls;
    }

    public void setExternalUrls(ExternalUrlsDto externalUrls) {
        this.externalUrls = externalUrls;
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

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getReleaseDatePrecision() {
        return releaseDatePrecision;
    }

    public void setReleaseDatePrecision(String releaseDatePrecision) {
        this.releaseDatePrecision = releaseDatePrecision;
    }

    public RestrictionDto getRestrictions() {
        return restrictions;
    }

    public void setRestrictions(RestrictionDto restrictions) {
        this.restrictions = restrictions;
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

    public String getAlbumGroup() {
        return albumGroup;
    }

    public void setAlbumGroup(String albumGroup) {
        this.albumGroup = albumGroup;
    }

    public List<AlbumArtistDto> getArtists() {
        return artists;
    }

    public void setArtists(List<AlbumArtistDto> artists) {
        this.artists = artists;
    }
}
