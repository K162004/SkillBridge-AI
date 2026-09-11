from pydantic import BaseModel


class UserCreate(BaseModel):
    full_name: str
    email: str
    password: str
    college: str
    branch: str
    graduation_year: int


class UserResponse(UserCreate):
    user_id: int

    class Config:
        from_attributes = True