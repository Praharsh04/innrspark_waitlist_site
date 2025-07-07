from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    email: EmailStr

class UserCreate(UserBase):
    password: str

class UserInDBBase(UserBase):
    id: int
    is_active: bool
    is_superuser: bool

    class Config:
        from_attributes = True # For SQLAlchemy 2.0, use from_attributes instead of orm_mode

class User(UserInDBBase):
    pass

class UserInDB(UserInDBBase):
    hashed_password: str