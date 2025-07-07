from sqlalchemy.orm import Session
from app.models.waitlist import WaitlistEntry as DBWaitlistEntry
from app.schemas.waitlist import WaitlistEntryCreate

def create_waitlist_entry(db: Session, entry: WaitlistEntryCreate) -> DBWaitlistEntry:
    """
    Creates a new waitlist entry.
    """
    db_entry = DBWaitlistEntry(**entry.dict())
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)
    return db_entry

def get_waitlist_entry_by_email(db: Session, email: str) -> DBWaitlistEntry | None:
    """
    Retrieves a waitlist entry by email.
    """
    return db.query(DBWaitlistEntry).filter(DBWaitlistEntry.email == email).first()