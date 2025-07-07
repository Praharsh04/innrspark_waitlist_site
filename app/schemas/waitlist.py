from pydantic import BaseModel, EmailStr

class WaitlistEntryBase(BaseModel):
    name: str
    email: EmailStr
    phone: str
    company: str | None = None
    profession: str | None = None

class WaitlistEntryCreate(WaitlistEntryBase):
    pass

class WaitlistEntry(WaitlistEntryBase):
    id: int

    class Config:
        from_attributes = True # For SQLAlchemy 2.0, use from_attributes instead of orm_mode