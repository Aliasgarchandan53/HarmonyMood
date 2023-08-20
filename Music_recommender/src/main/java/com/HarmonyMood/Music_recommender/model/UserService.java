package com.HarmonyMood.Music_recommender.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.HarmonyMood.Music_recommender.model.User;
import com.HarmonyMood.Music_recommender.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void registerUser(User newUser) {
        userRepository.save(newUser);
    }

    public String loginUser(User user) {
        User existingUser = userRepository.findByUsername(user.username());
        if (existingUser != null && existingUser.password().equals(user.password())) {
            return "sampleJwtToken"; // Replace with actual token
        }
        return null;
    }

    // Additional methods for updating user profile, etc.
}
