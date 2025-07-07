from sqlalchemy.orm import Session
from app.models.user import User as DBUser
from app.schemas.user import UserCreate
from app.core.security import get_password_hash

def get_user(db: Session, user_id: int) -> DBUser | None:
    """
    Retrieves a user by ID.
    """
    return db.query(DBUser).filter(DBUser.id == user_id).first()

def get_user_by_email(db: Session, email: str) -> DBUser | None:
    """
    Retrieves a user by email.
    """
    return db.query(DBUser).filter(DBUser.email == email).first()

def create_user(db: Session, user: UserCreate) -> DBUser:
    """
    Creates a new user.
    """
    hashed_password = get_password_hash(user.password)
    db_user = DBUser(email=user.email, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user