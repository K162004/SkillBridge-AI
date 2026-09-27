import os
import time
from dotenv import load_dotenv
from google import genai

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

print("Gemini API key loaded:", bool(api_key))

client = genai.Client(api_key=api_key)


# Models available to your API key.
# If one is temporarily busy, the next model will be tried.
GEMINI_MODELS = [
    "gemini-flash-lite-latest",
    "gemini-3.5-flash-lite",
    "gemini-3.8-flash",
    "gemini-3.7-flash",
    "gemini-3.6-flash",
    "gemini-3.5-flash",
    "gemini-flash-latest",
    "gemini-2.5-flash",
]


def generate_career_response(message):

    prompt = f"""
You are SkillBridge AI, an AI Career Mentor.

Give practical, structured and beginner-friendly career guidance.

Answer the user's actual question directly.
Do not give a generic AI Engineer roadmap unless the user specifically asks for one.

User Question:
{message}

Format your answer with relevant sections when appropriate:
1. Career Guidance
2. Skills Required
3. Learning Roadmap
4. Projects to Build
5. Interview Tips

Only include sections that are relevant to the user's question.

Keep the response clear, professional and useful for a student or fresher.
"""

    last_error = None

    for model_name in GEMINI_MODELS:

        try:
            print(f"Trying Gemini model: {model_name}")

            response = client.models.generate_content(
                model=model_name,
                contents=prompt
            )

            if response.text:
                print(f"Gemini response received from: {model_name}")
                return response.text

        except Exception as e:

            last_error = e
            print(f"Gemini model failed: {model_name}")
            print(f"Error: {str(e)}")

            # Try the next available model
            time.sleep(1)

    print("All Gemini models failed.")
    print(f"Last Gemini error: {last_error}")

    return (
        "I'm temporarily unable to connect to the AI service. "
        "Please try your question again in a moment."
    )