from fastapi import FastAPI
from openai import OpenAI
from dotenv import load_dotenv
from sqlmodel import Field, SQLModel, create_engine, select, Session, delete
import os
from pydantic import BaseModel

load_dotenv()

app = FastAPI()

client = OpenAI()


# table todo
class ChatHistory(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    question: str
    answer: str


# engine links table to database
engine = create_engine(os.getenv("DATABASE_KEY"), echo=True)
#SQLModel.metadata.create_all(engine)


@app.get("/chathistory")
def chathistory():
    with Session(engine) as session:
        history = session.exec(select(ChatHistory)).all()
    return history

class ChatResponse(BaseModel):
    message : str

@app.post("/fastgpt")
def chat_with_gpt(response: ChatResponse):
    message = response.message
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": message},
        ],
    )
    answer = completion.choices[0].message.content
    with Session(engine) as session:
        session.add(ChatHistory(question=message, answer=answer))
        session.commit()
    
    return answer
