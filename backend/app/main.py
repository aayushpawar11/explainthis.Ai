from fastapi import FastAPI
from app.routes import explain
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
#This is where Chroem calls the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(explain.router)
