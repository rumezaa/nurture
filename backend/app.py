from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update this with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Hugging Face API setup
API_URL = "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill"
api_key = os.getenv('HUGGINGFACE_API_KEY')
print(f"API Key: {api_key}")  # Debugging line
headers = {"Authorization": f"Bearer {api_key}"}

class Message(BaseModel):
    content: str
    is_user: bool

class MessageCreate(BaseModel):
    content: str

messages: List[Message] = []

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    if response.status_code != 200:
        print(f"Error: {response.status_code}")
        print(response.json())
        raise Exception("API request failed")
    return response.json()

@app.post("/messages")
async def create_message(message: MessageCreate):
    # Add user message
    user_message = Message(content=message.content, is_user=True)
    messages.append(user_message)

    # Generate AI response
    try:
        output = query({
            "inputs": message.content,
            "parameters": {"max_length": 100}
        })
        print(f"API Output: {output}")  # Debugging line
        ai_content = output[0]['generated_text']
    except Exception as e:
        print(f"Error generating AI response: {str(e)}")
        raise HTTPException(status_code=500, detail="Error generating AI response")

    # Add AI message
    ai_message = Message(content=ai_content, is_user=False)
    messages.append(ai_message)

    return ai_message

@app.get("/messages")
async def read_messages():
    return messages

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
