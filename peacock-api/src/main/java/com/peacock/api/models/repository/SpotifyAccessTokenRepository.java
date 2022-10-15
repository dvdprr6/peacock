package com.peacock.api.models.repository;

import com.peacock.api.models.entities.SpotifyAccessTokenEntity;
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
public class SpotifyAccessTokenRepository {

    @Autowired
    private SessionFactory sessionFactory;

    public List<SpotifyAccessTokenEntity> getAll(){
        CriteriaBuilder criteriaBuilder = sessionFactory.getCurrentSession().getCriteriaBuilder();
        CriteriaQuery<SpotifyAccessTokenEntity> query = criteriaBuilder.createQuery(SpotifyAccessTokenEntity.class);

        Root<SpotifyAccessTokenEntity> root = query.from(SpotifyAccessTokenEntity.class);

        query.orderBy(criteriaBuilder.asc(root.get("id")));

        EntityManager entityManager = sessionFactory.createEntityManager();

        List<SpotifyAccessTokenEntity> spotifyAccessTokenEntityList = new ArrayList<>();

        try{
            spotifyAccessTokenEntityList = entityManager.createQuery(query).getResultList();
        }catch(Exception e){
            e.printStackTrace();
        }finally {
            entityManager.clear();
            entityManager.close();
        }

        return spotifyAccessTokenEntityList;
    }

    public void insert(SpotifyAccessTokenEntity spotifyAccessTokenEntity) {
        sessionFactory.getCurrentSession().persist(spotifyAccessTokenEntity);
    }

    public void update(SpotifyAccessTokenEntity spotifyAccessTokenEntity){
        sessionFactory.getCurrentSession().update(spotifyAccessTokenEntity);
    }

    public void delete(SpotifyAccessTokenEntity spotifyAccessTokenEntity){
        sessionFactory.getCurrentSession().delete(spotifyAccessTokenEntity);
    }
}
