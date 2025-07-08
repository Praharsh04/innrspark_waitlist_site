from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.security import SecurityHeaders

from app.api.v1.api import api_router
from app.core.config import settings

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# Set all CORS enabled origins
if settings.FRONTEND_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.FRONTEND_ORIGINS.split(",")],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

# Security Headers
app.add_middleware(SecurityHeaders())

app.include_router(api_router, prefix=settings.API_V1_STR)
