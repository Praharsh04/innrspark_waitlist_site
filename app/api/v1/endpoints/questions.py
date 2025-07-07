from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.question import QuestionEntryCreate, QuestionEntry
from app.crud.question import create_question_entry
from app.crud.waitlist import get_waitlist_entry_by_email # To check if email exists in waitlist

router = APIRouter()

@router.post("/questions", response_model=QuestionEntry, status_code=status.HTTP_201_CREATED)
async def create_new_question_entry(
    entry: QuestionEntryCreate, db: Session = Depends(get_db)
):
    """
    Submit a new question entry.
    Requires the email to be present in the waitlist.
    """
    # Check if the email exists in the waitlist
    waitlist_user = get_waitlist_entry_by_email(db, email=entry.email)
    if not waitlist_user:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Please join the waitlist first to submit a question."
        )
    return create_question_entry(db=db, entry=entry)