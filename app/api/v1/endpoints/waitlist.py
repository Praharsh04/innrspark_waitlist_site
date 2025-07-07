from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.waitlist import WaitlistEntryCreate, WaitlistEntry
from app.crud.waitlist import create_waitlist_entry, get_waitlist_entry_by_email
from app.core.auth import get_current_user # Example of a protected route

router = APIRouter()

@router.post("/waitlist", response_model=WaitlistEntry, status_code=status.HTTP_201_CREATED)
async def create_new_waitlist_entry(
    entry: WaitlistEntryCreate, db: Session = Depends(get_db)
):
    """
    Submit a new waitlist entry.
    """
    # Optional: Check if email already exists
    existing_entry = get_waitlist_entry_by_email(db, email=entry.email)
    if existing_entry:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already exists in the waitlist."
        )
    return create_waitlist_entry(db=db, entry=entry)

# Example of a protected route (requires authentication)
@router.get("/waitlist/me", response_model=WaitlistEntry)
async def read_waitlist_entry_of_current_user(
    current_user: WaitlistEntry = Depends(get_current_user), # This would need a different user model
    db: Session = Depends(get_db)
):
    """
    (Example) Get the waitlist entry for the current authenticated user.
    Note: This example assumes a user can be linked to a waitlist entry.
    You might need to adjust `get_current_user` or the logic here.
    """
    # For this example, we'll just return the user's email as a waitlist entry
    # In a real app, you'd fetch the actual waitlist entry associated with the user.
    waitlist_entry = get_waitlist_entry_by_email(db, email=current_user.email)
    if not waitlist_entry:
        raise HTTPException(status_code=404, detail="Waitlist entry not found for this user.")
    return waitlist_entry