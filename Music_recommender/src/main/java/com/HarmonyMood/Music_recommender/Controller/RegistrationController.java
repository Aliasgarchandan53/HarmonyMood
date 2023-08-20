package com.HarmonyMood.Music_recommender.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.HarmonyMood.Music_recommender.model.User;
import com.HarmonyMood.Music_recommender.model.UserService;

@RestController
@RequestMapping("/api")
public class RegistrationController {

    private final UserService userService;

    @Autowired
    public RegistrationController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User newUser) {
        userService.registerUser(newUser);
        return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
    }
}