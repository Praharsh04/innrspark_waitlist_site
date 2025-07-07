from sqlalchemy.orm import Session
from app.models.question import QuestionEntry as DBQuestionEntry
from app.schemas.question import QuestionEntryCreate

def create_question_entry(db: Session, entry: QuestionEntryCreate) -> DBQuestionEntry:
    """
    Creates a new question entry.
    """
    db_entry = DBQuestionEntry(**entry.dict())
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)
    return db_entry