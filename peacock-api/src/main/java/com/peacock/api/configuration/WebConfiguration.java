package com.peacock.api.configuration;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = { "com.peacock.api.models.controllers" })
@Import(value = { PersistenceConfiguration.class })
public class WebConfiguration extends WebMvcConfigurationSupport {

}
