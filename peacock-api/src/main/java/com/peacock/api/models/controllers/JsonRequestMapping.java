package com.peacock.api.models.controllers;

import com.peacock.api.utils.Constants;
import org.springframework.core.annotation.AliasFor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * REFERENCE: https://stackoverflow.com/questions/35123835/spring-requestmapping-for-controllers-that-produce-and-consume-json
 * @author David Parr
 *
 */
@Target({ ElementType.METHOD, ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)
@RequestMapping(consumes = Constants.JSON_ENCODING, produces = Constants.JSON_ENCODING)
public @interface JsonRequestMapping {
    @AliasFor(annotation = RequestMapping.class, attribute = "value")
    String[] value() default {};

    @AliasFor(annotation = RequestMapping.class, attribute = "method")
    RequestMethod[] method() default {};

    @AliasFor(annotation = RequestMapping.class, attribute = "params")
    String[] params() default {};

    @AliasFor(annotation = RequestMapping.class, attribute = "headers")
    String[] headers() default {};

    @AliasFor(annotation = RequestMapping.class, attribute = "consumes")
    String[] consumes() default {};

    @AliasFor(annotation = RequestMapping.class, attribute = "produces")
    String[] produces() default {};
}
