package com.skillbridge.backend_java.model;

import jakarta.persistence.*;

@ Entity 

    @Table(name = "users")
    public class User {

        @Id
        @Column(name = "user_id")
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer userId;

        @Column(name = "full_name")
        private String name;

        @Column(name = "email")
        private String email;

        @Column(name = "password")
        private String password;

        @Column(name = "college")
        private String college;

        @Column(name = "branch")
        private String branch;

        @Column(name = "graduation_year")
        private Integer graduationYear;

        @Column(name = "created_at")
        private java.time.LocalDateTime createdAt;

        public User() {
        }

        public User(String name, String email, String password) {
            this.name = name;
            this.email = email;
            this.password = password;
            this.createdAt = java.time.LocalDateTime.now();
        }

        public Integer getUserId() {
            return userId;
        }

        public void setUserId(Integer userId) {
            this.userId = userId;
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

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public String getCollege() {
            return college;
        }

        public void setCollege(String college) {
            this.college = college;
        }

        public String getBranch() {
            return branch;
        }

        public void setBranch(String branch) {
            this.branch = branch;
        }

        public Integer getGraduationYear() {
            return graduationYear;
        }

        public void setGraduationYear(Integer graduationYear) {
            this.graduationYear = graduationYear;
        }

        public java.time.LocalDateTime getCreatedAt() {
            return createdAt;
        }

        public void setCreatedAt(java.time.LocalDateTime createdAt) {
            this.createdAt = createdAt;
        }
    }