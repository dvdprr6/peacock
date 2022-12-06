package com.peacock.api.models.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FollowersDto implements IDto{
    @JsonProperty("href")
    private String href;
    @JsonProperty("total")
    private Integer total;

    public FollowersDto() {}

    public String getHref() {
        return href;
    }

    public void setHref(String href) {
        this.href = href;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }
}
