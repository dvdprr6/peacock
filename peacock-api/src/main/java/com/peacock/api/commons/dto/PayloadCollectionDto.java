package com.peacock.api.commons.dto;

import com.peacock.api.models.dto.IDto;

import java.util.ArrayList;
import java.util.List;

public class PayloadCollectionDto<DTO extends IDto> {
    private List<DTO> dto = new ArrayList<>();
    private PayloadStatus status = PayloadStatus.NONE;
    private String message = "";

    public PayloadCollectionDto() {}

    public List<DTO> getDto() {
        return dto;
    }

    public void setDto(List<DTO> dto) {
        this.dto = dto;
    }

    public String getStatus() {
        return status.name();
    }

    public void setStatus(PayloadStatus status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
