from pydantic import BaseModel, EmailStr

class QuestionEntryBase(BaseModel):
    email: EmailStr
    question: str

class QuestionEntryCreate(QuestionEntryBase):
    pass

class QuestionEntry(QuestionEntryBase):
    id: int

    class Config:
        from_attributes = True # For SQLAlchemy 2.0, use from_attributes instead of orm_mode