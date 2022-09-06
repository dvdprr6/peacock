package com.peacock.api.commons.mapper.common;

import com.peacock.api.models.dto.IDto;
import com.peacock.api.models.entities.IEntity;
import org.modelmapper.Converter;
import org.modelmapper.PropertyMap;

import java.sql.Timestamp;

public abstract class EntityToDtoMapper<ENTITY extends IEntity, DTO extends IDto> extends PropertyMap<ENTITY, DTO>{

    protected Converter<Timestamp, String> timestampStringConverter = context -> {
        Timestamp source = context.getSource();

        return source.toString();
    };
}
