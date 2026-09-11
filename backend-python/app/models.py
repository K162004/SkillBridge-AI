from sqlalchemy import Column, Integer, String
from app.database import Base


class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String)
    email = Column(String)
    password = Column(String)
    college = Column(String)
    branch = Column(String)
    graduation_year = Column(Integer)