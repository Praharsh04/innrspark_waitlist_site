from sqlalchemy import Column, Integer, String, Text
from app.db.base import Base, TimestampMixin

class QuestionEntry(Base, TimestampMixin):
    """
    SQLAlchemy model for question entries.
    """
    __tablename__ = "question_entries"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, index=True, nullable=False) # Email from waitlist
    question = Column(Text, nullable=False)