package com.peacock.api.commons.mapper.utils;

import org.hibernate.Hibernate;
import org.modelmapper.spi.ValueReader;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * REFERENCE: https://stackoverflow.com/questions/54629732/how-to-convert-entity-with-lazy-properties-into-dto-using-java-model-mapper
 * This custom reader allows us to ignore the Lazy and Eager fetch types from Hibernate
 * @author David Parr
 *
 */
public class CustomValueReader implements ValueReader<Object> {
    @Override
    public Object get(Object source, String memberName) {
        try {
            Field field = source.getClass().getDeclaredField(memberName);
            field.setAccessible(true);
            return field.get(source);
        }
        catch(Exception e) {
            return null;
        }
    }

    @Override
    public Member<Object> getMember(Object source, String memberName) {
        final Object value = get(source, memberName);
        Class<?> memberType = value != null ? value.getClass() : Object.class;
        return new Member<Object>(memberType) {
            @Override
            public Object getOrigin() {
                return null;
            }

            @Override
            public Object get(Object source, String memberName) {
                return CustomValueReader.this.get(source, memberName);
            }
        };
    }

    @Override
    public Collection<String> memberNames(Object source) {
        List<String> properties = new ArrayList<>();
        for (Field field : source.getClass().getDeclaredFields()) {
            field.setAccessible(true);//needed for accessing field using reflection
            boolean valid = true;
            Object fieldValue = null;
             try{
                 fieldValue = field.get(source);
             }
             catch(Exception e) {
                 valid = false;
             }
            boolean isInited = valid && Hibernate.isInitialized(fieldValue);
             if (isInited){
                 properties.add(field.getName());
             }
        }
        return properties;
    }

    @Override
    public String toString() {
        return "Costum";
    }
}
