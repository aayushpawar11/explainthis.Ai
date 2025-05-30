from fastapi import APIRouter, Request
from pydantic import BaseModel

router = APIRouter()
class ExplainRequest(BaseModel):
    text: str

@router.post("/explain")
async def explain_text(request: ExplainRequest):
    input_text = request.text

    #replace with pytorch model later
    return {
        "highlighted": input_text,
        "explanation": f"This is a placeholder explanation for: '{input_text}'"
    }
