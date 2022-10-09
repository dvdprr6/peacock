package com.peacock.api.models.dto;

public class ScopeDto implements IDto{
    private Long id;
    private String name;

    public ScopeDto(){}

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
}
