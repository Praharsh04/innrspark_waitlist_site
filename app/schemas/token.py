from pydantic import BaseModel

class Token(BaseModel):
    """
    Pydantic schema for JWT token response.
    """
    access_token: str
    token_type: str = "bearer"

class TokenData(BaseModel):
    """
    Pydantic schema for data contained in JWT token.
    """
    email: str | None = None