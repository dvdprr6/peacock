package com.peacock.api.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsDto implements IDto{
    @JsonProperty("interrupting_playback")
    private Boolean interruptingPlayback;
    @JsonProperty("pausing")
    private Boolean pausing;
    @JsonProperty("resuming")
    private Boolean resuming;
    @JsonProperty("seeking")
    private Boolean seeking;
    @JsonProperty("skipping_next")
    private Boolean skippingNext;
    @JsonProperty("skipping_prev")
    private Boolean skippingPrev;
    @JsonProperty("toggling_repeat_context")
    private Boolean togglingRepeatContext;
    @JsonProperty("toggling_shuffle")
    private Boolean togglingShuffle;
    @JsonProperty("toggling_repeat_track")
    private Boolean togglingRepeatTrack;
    @JsonProperty("transferring_playback")
    private Boolean transferringPlayback;

    public ActionsDto() {}

    public Boolean getInterruptingPlayback() {
        return interruptingPlayback;
    }

    public void setInterruptingPlayback(Boolean interruptingPlayback) {
        this.interruptingPlayback = interruptingPlayback;
    }

    public Boolean getPausing() {
        return pausing;
    }

    public void setPausing(Boolean pausing) {
        this.pausing = pausing;
    }

    public Boolean getResuming() {
        return resuming;
    }

    public void setResuming(Boolean resuming) {
        this.resuming = resuming;
    }

    public Boolean getSeeking() {
        return seeking;
    }

    public void setSeeking(Boolean seeking) {
        this.seeking = seeking;
    }

    public Boolean getSkippingNext() {
        return skippingNext;
    }

    public void setSkippingNext(Boolean skippingNext) {
        this.skippingNext = skippingNext;
    }

    public Boolean getSkippingPrev() {
        return skippingPrev;
    }

    public void setSkippingPrev(Boolean skippingPrev) {
        this.skippingPrev = skippingPrev;
    }

    public Boolean getTogglingRepeatContext() {
        return togglingRepeatContext;
    }

    public void setTogglingRepeatContext(Boolean togglingRepeatContext) {
        this.togglingRepeatContext = togglingRepeatContext;
    }

    public Boolean getTogglingShuffle() {
        return togglingShuffle;
    }

    public void setTogglingShuffle(Boolean togglingShuffle) {
        this.togglingShuffle = togglingShuffle;
    }

    public Boolean getTogglingRepeatTrack() {
        return togglingRepeatTrack;
    }

    public void setTogglingRepeatTrack(Boolean togglingRepeatTrack) {
        this.togglingRepeatTrack = togglingRepeatTrack;
    }

    public Boolean getTransferringPlayback() {
        return transferringPlayback;
    }

    public void setTransferringPlayback(Boolean transferringPlayback) {
        this.transferringPlayback = transferringPlayback;
    }
}
