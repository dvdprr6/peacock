package com.peacock.api.commons.mapper.common;

import com.peacock.api.models.dto.IDto;
import com.peacock.api.models.entities.IEntity;
import org.modelmapper.PropertyMap;

public abstract class DtoToEntityMapper<DTO extends IDto, ENTITY extends IEntity> extends PropertyMap<DTO, ENTITY>{}
