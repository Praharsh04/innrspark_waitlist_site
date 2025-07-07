from sqlalchemy import Column, Integer, String, Boolean
from app.db.base import Base, TimestampMixin

class User(Base, TimestampMixin):
    """
    SQLAlchemy model for users (for authentication).
    """
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    is_superuser = Column(Boolean, default=False)