from sqlalchemy.orm import Session
from app import models, schemas


def create_user(db: Session, user: schemas.UserCreate):

    db_user = models.User(
        full_name=user.full_name,
        email=user.email,
        password=user.password,
        college=user.college,
        branch=user.branch,
        graduation_year=user.graduation_year,
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user