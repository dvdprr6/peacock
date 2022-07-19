package com.peacock.api.commons.dto;

import com.peacock.api.models.dto.IDto;

public class PayloadSingleDto<DTO extends IDto> {
    private DTO dto;
    private PayloadStatus status = PayloadStatus.NONE;
    private String message = "";

    public PayloadSingleDto(){}

    public DTO getDto() {
        return dto;
    }

    public void setDto(DTO dto) {
        this.dto = dto;
    }

    public PayloadStatus getStatus() {
        return status;
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
