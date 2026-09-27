package com.skillbridge.backend_java.dto;

// Response returned after successful registration or login.
public class AuthResponse {

    private String token;
    private Integer id;
    private String name;
    private String email;
    private String message;

    public AuthResponse() {
    }

    public AuthResponse(String token, Integer id, String name, String email) {
        this.token = token;
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Used for error responses -> { "message": "..." }
    public AuthResponse(String message) {
        this.message = message;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}