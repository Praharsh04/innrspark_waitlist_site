from sqlalchemy.engine import Engine
from app.db.base import Base
from app.models.user import User
from app.models.waitlist import WaitlistEntry
from app.models.question import QuestionEntry
from app.core.security import get_password_hash
from app.crud.user import create_user
from app.db.session import SessionLocal

def init_db(engine: Engine):
    """
    Initializes the database by creating all tables.
    This function should be called once on application startup.
    In a production environment, consider using Alembic for migrations.
    """
    print("Creating database tables...")
    Base.metadata.create_all(bind=engine)
    print("Database tables created.")

    # Optional: Create a default superuser if needed
    # db = SessionLocal()
    # if not create_user(db, email="admin@example.com", password=get_password_hash("adminpassword")):
    #     print("Default admin user already exists.")
    # db.close()