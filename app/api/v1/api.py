from fastapi import APIRouter

from app.api.v1.endpoints import auth, waitlist, questions

api_router = APIRouter()
api_router.include_router(auth.router, tags=["auth"])
api_router.include_router(waitlist.router, tags=["waitlist"])
api_router.include_router(questions.router, tags=["questions"])