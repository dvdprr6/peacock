package com.peacock.api.commons.mapper.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.peacock.api.models.dto.IDto;
import com.peacock.api.models.entities.IEntity;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.convention.MatchingStrategies;
import org.modelmapper.spi.ValueReader;

import java.io.IOException;

public class ModelConverter {

    public static <ENTITY extends IEntity> ENTITY convertToEntity(IDto dto, Class<ENTITY> entity) {
        ModelMapper modelMapper = new ModelMapper();
        return (ENTITY) modelMapper.map(dto, entity);
    }

    public static <ENTITY extends IEntity, DTO extends IDto> ENTITY convertToEntity(PropertyMap<DTO, ENTITY> mapper, IDto dto, Class<ENTITY> entity) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.addMappings(mapper);
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        return (ENTITY) modelMapper.map(dto, entity);
    }

    public static <DTO extends IDto> DTO convertToDto(IEntity entity, Class<DTO> dto) {
        ValueReader<Object> customValueReader = new CustomValueReader();
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().addValueReader(customValueReader);
        return (DTO) modelMapper.map(entity, dto);
    }

    public static <DTO extends IDto, ENTITY extends IEntity> DTO convertToDto(PropertyMap<ENTITY, DTO> mapper, IEntity entity, Class<DTO> dto) {
        ValueReader<Object> customValueReader = new CustomValueReader();
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.addMappings(mapper);
        modelMapper.getConfiguration().addValueReader(customValueReader);
        return (DTO) modelMapper.map(entity, dto);
    }

    public static <POJO> POJO copyPojo(POJO pojo, Class<POJO> clazz) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();

        String json = objectMapper.writeValueAsString(pojo);

        POJO copy = objectMapper.readValue(json, clazz);

        return copy;
    }

    public static <POJO> POJO convertJsonToPojo(String json, Class<POJO> clazz){
        POJO pojo = null;

        try {
            pojo = new ObjectMapper().readValue(json, clazz);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return pojo;
    }
}
