package com.peacock.api.models.repository;

import com.peacock.api.models.entities.AuthTokenEntity;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@Repository
@Transactional(value = "hibernateTransactionManager")
public class AuthTokenRepository {

    @Autowired
    private SessionFactory sessionFactory;

    public List<AuthTokenEntity> getAll(){
        CriteriaBuilder criteriaBuilder = sessionFactory.getCurrentSession().getCriteriaBuilder();
        CriteriaQuery<AuthTokenEntity> query = criteriaBuilder.createQuery(AuthTokenEntity.class);

        Root<AuthTokenEntity> root = query.from(AuthTokenEntity.class);

        query.orderBy(criteriaBuilder.asc(root.get("id")));

        EntityManager entityManager = sessionFactory.createEntityManager();

        List<AuthTokenEntity> authTokenEntityList = new ArrayList<>();

        try{
            authTokenEntityList = entityManager.createQuery(query).getResultList();
        }catch(Exception e){
            e.printStackTrace();
        }finally {
            entityManager.clear();
            entityManager.close();
        }

        return authTokenEntityList;
    }

    public void insert(AuthTokenEntity authTokenEntity) {
        sessionFactory.getCurrentSession().persist(authTokenEntity);
    }
}
