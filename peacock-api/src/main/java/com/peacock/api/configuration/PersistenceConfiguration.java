package com.peacock.api.configuration;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.Properties;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = { "com.peacock.api.models.services", "com.peacock.api.models.repository" }, transactionManagerRef = "hibernateTransactionManager")
@PropertySource("classpath:persistence.properties")
@ComponentScan(basePackages = { "com.peacock.api.models.services", "com.peacock.api.models.repository" })
public class PersistenceConfiguration {
    private static final String POSTGRES_JDBC_DRIVER = "postgres.jdbc.driver";
    private static final String POSTGRES_JDBC_URL = "postgres.jdbc.url";
    private static final String POSTGRES_JDBC_USER = "postgres.jdbc.user";
    private static final String POSTGRES_JDBC_PASSWORD = "postgres.jdbc.password";
    private static final String HIBERNATE_DIALECT = "hibernate.dialect";
    private static final String HIBERNATE_CONNECTION_POOL_SIZE = "hibernate.connection.pool_size";
    private static final String HIBERNATE_C3P0_ACQUIRE_INCREMENT = "hibernate.c3p0.acquire_increment";
    private static final String HIBERNATE_C3P0_IDLE_TEST_PERIOD = "hibernate.c3p0.idle_test_period";
    private static final String HIBERNATE_C3P0_MAX_SIZE = "hibernate.c3p0.max_size";
    private static final String HIBERNATE_C3P0_MAX_STATEMENTS = "hibernate.c3p0.max_statements";
    private static final String HIBERNATE_C3P0_MIN_SIZE = "hibernate.c3p0.min_size";
    private static final String HIBERNATE_C3P0_TIMEOUT = "hibernate.c3p0.timeout";
    private static final String HIBERNATE_SHOW_SQL = "hibernate.show_sql";
    private static final String HIBERNATE_HBM2DDL_AUTO = "hibernate.hbm2ddl.auto";
    @Autowired
    private Environment environment;

    @Bean
    public LocalSessionFactoryBean sessionFactory() {
        final LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
        sessionFactory.setDataSource(restDataSource());
        sessionFactory.setPackagesToScan(new String[] { "com.peacock.api.models.entities" });
        sessionFactory.setHibernateProperties(hibernateProperties());

        return sessionFactory;
    }

    @Bean
    public DataSource restDataSource() {
        final BasicDataSource datasource = new BasicDataSource();
        datasource.setDriverClassName(environment.getProperty(POSTGRES_JDBC_DRIVER));
        datasource.setUrl(environment.getProperty(POSTGRES_JDBC_URL));
        datasource.setUsername(environment.getProperty(POSTGRES_JDBC_USER));
        datasource.setPassword(environment.getProperty(POSTGRES_JDBC_PASSWORD));

        return datasource;
    }

    @Bean
    public PlatformTransactionManager hibernateTransactionManager() {
        final HibernateTransactionManager transactionManager = new HibernateTransactionManager();
        transactionManager.setSessionFactory(sessionFactory().getObject());

        return transactionManager;
    }

    private Properties hibernateProperties() {
        Properties properties = new Properties();
        properties.setProperty(HIBERNATE_DIALECT, environment.getProperty(HIBERNATE_DIALECT));
        properties.setProperty(HIBERNATE_CONNECTION_POOL_SIZE, environment.getProperty(HIBERNATE_CONNECTION_POOL_SIZE));
        properties.setProperty(HIBERNATE_C3P0_ACQUIRE_INCREMENT, environment.getProperty(HIBERNATE_C3P0_ACQUIRE_INCREMENT));
        properties.setProperty(HIBERNATE_C3P0_IDLE_TEST_PERIOD, environment.getProperty(HIBERNATE_C3P0_IDLE_TEST_PERIOD));
        properties.setProperty(HIBERNATE_C3P0_MAX_SIZE, environment.getProperty(HIBERNATE_C3P0_MAX_SIZE));
        properties.setProperty(HIBERNATE_C3P0_MAX_STATEMENTS, environment.getProperty(HIBERNATE_C3P0_MAX_STATEMENTS));
        properties.setProperty(HIBERNATE_C3P0_MIN_SIZE, environment.getProperty(HIBERNATE_C3P0_MIN_SIZE));
        properties.setProperty(HIBERNATE_C3P0_TIMEOUT, environment.getProperty(HIBERNATE_C3P0_TIMEOUT));
        properties.setProperty(HIBERNATE_SHOW_SQL, environment.getProperty(HIBERNATE_SHOW_SQL));
        properties.setProperty(HIBERNATE_HBM2DDL_AUTO, environment.getProperty(HIBERNATE_HBM2DDL_AUTO));

        return properties;
    }
}
