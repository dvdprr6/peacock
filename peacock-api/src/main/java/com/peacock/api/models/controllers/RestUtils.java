package com.peacock.api.models.controllers;

import com.peacock.api.commons.dto.PayloadCollectionDto;
import com.peacock.api.commons.dto.PayloadSingleDto;
import com.peacock.api.models.dto.IDto;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

public abstract class RestUtils {

    protected <DTO extends IDto> ResponseEntity<DTO> created(){
        return new ResponseEntity<DTO>(HttpStatus.CREATED);
    }

    protected <DTO extends IDto> ResponseEntity<DTO> created(DTO dto){
        return new ResponseEntity<DTO>(dto, HttpStatus.CREATED);
    }

    /**
     * @Deprecated
     * @param dto
     * @param <DTO>
     * @return
     */
    protected <DTO extends IDto> ResponseEntity<List<DTO>> created(List<DTO> dto){
        return new ResponseEntity<List<DTO>>(dto, HttpStatus.CREATED);
    }

    protected <DTO extends IDto> ResponseEntity<PayloadCollectionDto<DTO>> created(PayloadCollectionDto<DTO> payloadDto){
        return new ResponseEntity<PayloadCollectionDto<DTO>>(payloadDto, HttpStatus.CREATED);
    }

    protected <DTO extends IDto> ResponseEntity<PayloadSingleDto<DTO>> created(PayloadSingleDto<DTO> payloadDto){
        return new ResponseEntity(payloadDto, HttpStatus.CREATED);
    }

    /**
     * @param <DTO>
     * @return
     */
    protected <DTO extends IDto> ResponseEntity<DTO> ok(){
        return new ResponseEntity<DTO>(HttpStatus.OK);
    }

    /**
     * @param <DTO>
     * @param dto
     * @return
     */
    protected <DTO extends IDto> ResponseEntity<DTO> ok(DTO dto){
        return new ResponseEntity<DTO>(dto, HttpStatus.OK);
    }

    protected ResponseEntity ok(HttpHeaders httpHeaders){
        return new ResponseEntity(httpHeaders, HttpStatus.OK);
    }

    /**
     * @param <DTO>
     * @param dtos
     * @return
     */
    protected <DTO extends IDto> ResponseEntity<List<DTO>> ok(List<DTO> dtos){
        return new ResponseEntity<List<DTO>>(dtos, HttpStatus.OK);
    }

    protected <DTO extends IDto> ResponseEntity<PayloadCollectionDto<DTO>> ok(PayloadCollectionDto<DTO> payloadDto){
        return new ResponseEntity<PayloadCollectionDto<DTO>>(payloadDto, HttpStatus.OK);
    }

    protected <DTO extends IDto> ResponseEntity<DTO> noContent(){
        return new ResponseEntity<DTO>(HttpStatus.NO_CONTENT);
    }

    protected <DTO extends IDto> ResponseEntity internalServerError(){
        return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    protected <DTO extends IDto> ResponseEntity<PayloadCollectionDto<DTO>> internalServerError(PayloadCollectionDto<DTO> payloadDto){
        return new ResponseEntity<PayloadCollectionDto<DTO>>(payloadDto, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    protected <DTO extends IDto> ResponseEntity<DTO> notAcceptable(){
        return new ResponseEntity<DTO>(HttpStatus.NOT_ACCEPTABLE);
    }

    protected <DTO extends IDto> ResponseEntity<List<DTO>> conflict(List<DTO> dtos){
        return new ResponseEntity<List<DTO>>(dtos, HttpStatus.CONFLICT);
    }

    protected <DTO extends IDto> ResponseEntity<PayloadCollectionDto<DTO>> conflict(PayloadCollectionDto<DTO> payloadDto){
        return new ResponseEntity<PayloadCollectionDto<DTO>>(payloadDto, HttpStatus.CONFLICT);
    }
}
