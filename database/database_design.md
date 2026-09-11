# SkillBridge AI Database Design

## Tables

1. Users
2. Resume
3. Skills
4. ATS_Score
5. Skill_Gap
6. Learning_Roadmap
7. Chat_History
8. Mock_Interview

---

## Table 1 : Users

| Column | Data Type | Description |
|----------|----------|-------------|
| user_id | SERIAL | Primary Key |
| full_name | VARCHAR(100) | Student Name |
| email | VARCHAR(100) | Email Address |
| password | VARCHAR(255) | Encrypted Password |
| college | VARCHAR(100) | College Name |
| branch | VARCHAR(50) | Branch |
| graduation_year | INT | Graduation Year |
| created_at | TIMESTAMP | Account Creation Time |


---

## Table 2: Resume

| Column | Data Type | Description |
|--------|-----------|-------------|
| resume_id | SERIAL | Primary Key |
| user_id | INT | Foreign Key (Users Table) |
| file_name | VARCHAR(255) | Uploaded Resume Name |
| file_path | TEXT | Resume Storage Path |
| upload_date | TIMESTAMP | Resume Upload Date |


---

## Table 3: Skills

| Column | Data Type | Description |
|--------|-----------|-------------|
| skill_id | SERIAL | Primary Key |
| resume_id | INT | Foreign Key (Resume Table) |
| skill_name | VARCHAR(100) | Extracted Skill |
| skill_level | VARCHAR(50) | Beginner / Intermediate / Advanced |
| confidence_score | DECIMAL(5,2) | AI Confidence Score |


## Table 4: ATS_Score

| Column | Data Type | Description |
|---------|-----------|-------------|
| ats_id | SERIAL | Primary Key |
| user_id | INT | Foreign Key (Users Table) |
| overall_score | INT | ATS Score (0-100) |
| missing_keywords | TEXT | Missing Resume Keywords |
| suggestions | TEXT | AI Suggestions |
| generated_at | TIMESTAMP | Analysis Date |


## Table 5: Skill_Gap

| Column | Data Type | Description |
|---------|-----------|-------------|
| gap_id | SERIAL | Primary Key |
| user_id | INT | Foreign Key (Users Table) |
| target_role | VARCHAR(100) | Selected Job Role |
| missing_skill | VARCHAR(100) | Missing Skill |
| priority | VARCHAR(20) | High / Medium / Low |


## Table 6: Learning_Roadmap

| Column | Data Type | Description |
|---------|-----------|-------------|
| roadmap_id | SERIAL | Primary Key |
| user_id | INT | Foreign Key (Users Table) |
| course_name | VARCHAR(255) | Recommended Course |
| platform | VARCHAR(100) | Coursera/Udemy/etc |
| duration | VARCHAR(50) | Course Duration |
| status | VARCHAR(30) | Not Started / In Progress / Completed |


## Table 7: Chat_History

| Column | Data Type | Description |
|---------|-----------|-------------|
| chat_id | SERIAL | Primary Key |
| user_id | INT | Foreign Key (Users Table) |
| question | TEXT | Student Question |
| answer | TEXT | AI Response |
| timestamp | TIMESTAMP | Chat Time |


## Table 8: Mock_Interview

| Column | Data Type | Description |
|---------|-----------|-------------|
| interview_id | SERIAL | Primary Key |
| user_id | INT | Foreign Key (Users Table) |
| question | TEXT | Interview Question |
| user_answer | TEXT | Student Answer |
| feedback | TEXT | AI Feedback |
| score | INT | Interview Score |
| interview_date | TIMESTAMP | Interview Date |