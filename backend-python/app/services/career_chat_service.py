import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

print("Gemini API key loaded:", bool(os.getenv("GEMINI_API_KEY")))

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-3.5-flash")


def generate_career_response(message):
    prompt = f"""
You are SkillBridge AI, an AI Career Mentor.

Give practical, structured and beginner-friendly career guidance.

User Question:
{message}

Format your answer with:
1. Career Guidance
2. Skills Required
3. Learning Roadmap
4. Projects to Build
5. Interview Tips

Keep the response clear and professional.
"""

    try:
        response = model.generate_content(prompt)
        return response.text

    except Exception as e:

        # Gemini quota exceeded
        if "429" in str(e):
            return """
🤖 Gemini API is temporarily busy.

Here is your AI Engineer Roadmap:

📅 Month 1
• Python
• SQL
• Git

📅 Month 2
• Statistics
• NumPy
• Pandas
• Data Visualization

📅 Month 3
• Machine Learning
• Scikit-learn
• Model Evaluation

📅 Month 4
• Deep Learning
• TensorFlow or PyTorch

📅 Month 5
• FastAPI
• Docker
• REST APIs

📅 Month 6
• Generative AI
• LangChain
• RAG
• Build 3 end-to-end AI projects

💡 Tip:
Maintain a strong GitHub portfolio and practice coding interviews regularly.
"""

        return f"❌ Error communicating with Gemini API: {e}"