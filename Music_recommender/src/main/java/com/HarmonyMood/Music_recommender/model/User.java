package com.HarmonyMood.Music_recommender.model;

public record User(
    Long id,
    String username,
    String email,
    String password
) {
    
}
