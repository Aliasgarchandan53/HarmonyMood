package com.HarmonyMood.Music_recommender.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.HarmonyMood.Music_recommender.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

    // You can add more custom query methods if needed
}
