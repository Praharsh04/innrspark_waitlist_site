from sqlalchemy import Column, Integer, String
from app.db.base import Base, TimestampMixin

class WaitlistEntry(Base, TimestampMixin):
    """
    SQLAlchemy model for waitlist entries.
    """
    __tablename__ = "waitlist_entries"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    phone = Column(String, nullable=False)
    company = Column(String, nullable=True)
    profession = Column(String, nullable=True)