package com.peacock.api.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;


public class CurrentlyPlayingDto implements IDto{
    @JsonProperty("device")
    private DeviceDto device;
    @JsonProperty("repeat_state")
    private String repeatState;
    @JsonProperty("shuffle_state")
    private String shuffleState;
    @JsonProperty("context")
    private ContextDto context;
    @JsonProperty("timestamp")
    private Long timestamp;
    @JsonProperty("progress_ms")
    private Integer progressMs;
    @JsonProperty("is_playing")
    private Boolean isPlaying;
    @JsonProperty("item")
    private ItemDto item;
    @JsonProperty("currently_playing_type")
    private String currentlyPlayingType;
    @JsonProperty("actions")
    private ActionsDto actions;

    public CurrentlyPlayingDto() {}

    public DeviceDto getDevice() {
        return device;
    }

    public void setDevice(DeviceDto device) {
        this.device = device;
    }

    public String getRepeatState() {
        return repeatState;
    }

    public void setRepeatState(String repeatState) {
        this.repeatState = repeatState;
    }

    public String getShuffleState() {
        return shuffleState;
    }

    public void setShuffleState(String shuffleState) {
        this.shuffleState = shuffleState;
    }

    public ContextDto getContext() {
        return context;
    }

    public void setContext(ContextDto context) {
        this.context = context;
    }

    public Long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Long timestamp) {
        this.timestamp = timestamp;
    }

    public Integer getProgressMs() {
        return progressMs;
    }

    public void setProgressMs(Integer progressMs) {
        this.progressMs = progressMs;
    }

    public Boolean getPlaying() {
        return isPlaying;
    }

    public void setPlaying(Boolean playing) {
        isPlaying = playing;
    }

    public ItemDto getItem() {
        return item;
    }

    public void setItem(ItemDto item) {
        this.item = item;
    }

    public String getCurrentlyPlayingType() {
        return currentlyPlayingType;
    }

    public void setCurrentlyPlayingType(String currentlyPlayingType) {
        this.currentlyPlayingType = currentlyPlayingType;
    }

    public ActionsDto getActions() {
        return actions;
    }

    public void setActions(ActionsDto actions) {
        this.actions = actions;
    }
}
