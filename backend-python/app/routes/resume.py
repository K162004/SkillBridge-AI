from fastapi import APIRouter, UploadFile, File
import os
import shutil

from app.services.resume_service import (
    extract_text,
    extract_skills,
    calculate_ats_score,
    generate_learning_roadmap,
    generate_resume_feedback,
    recommend_careers,
    recommend_jobs,
    recommend_courses,
    generate_interview_questions
)

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)

UPLOAD_FOLDER = "app/uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract text
    text = extract_text(file_path)

    # Extract skills
    skills = extract_skills(text)

    # Calculate ATS score
    ats_score, missing_skills = calculate_ats_score(skills)

    # Generate learning roadmap
    roadmap = generate_learning_roadmap(missing_skills)

    # Generate AI feedback
    feedback = generate_resume_feedback(
        ats_score,
        missing_skills
    )

    career_recommendations = recommend_careers(skills)

    job_recommendations = recommend_jobs(skills)

    course_recommendations = recommend_courses(missing_skills)

    interview_questions = generate_interview_questions(skills)

    return {
        "message": "Resume uploaded successfully",
        "filename": file.filename,
        "skills": skills,
        "ats_score": ats_score,
        "missing_skills": missing_skills,
        "learning_roadmap": roadmap,
        "feedback": feedback,
        "career_recommendations": career_recommendations,

        "job_recommendations": job_recommendations,

        "course_recommendations": course_recommendations,

        "interview_questions": interview_questions,
        
        "skill_gap_analysis": {
            "technical": max(40, 100 - len(missing_skills) * 8),
            "soft_skills": 75,
            "ats_readiness": ats_score,
            "job_readiness": max(50, ats_score - 10),
            "overall": round(
                (
                    max(40, 100 - len(missing_skills) * 8)
                    + 75
                    + ats_score
                    + max(50, ats_score - 10)
                ) / 4
            ),
        },
    }