import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.api.v1.api import api_router
from app.db.init_db import init_db
from app.db.session import engine

# Initialize database tables
# This should ideally be handled by a proper migration tool like Alembic in production
# For simplicity, we create tables on startup here.
init_db(engine)

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    version="0.1.0",
)

# Set up CORS middleware
# Allows frontend to communicate with this backend
if settings.FRONTEND_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.FRONTEND_ORIGINS.split(',')],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

# Include API routers
app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/")
async def root():
    """
    Root endpoint for the API.
    """
    return {"message": "Welcome to the Innrspark Backend API!"}

if __name__ == "__main__":
    # Command to run the server: uvicorn main:app --reload --host 0.0.0.0 --port 8000
    uvicorn.run(app, host="0.0.0.0", port=8000)