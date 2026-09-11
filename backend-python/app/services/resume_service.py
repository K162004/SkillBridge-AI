import pdfplumber

# List of skills to search
SKILLS = [
    "Python",
    "Java",
    "C++",
    "SQL",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "Django",
    "Flask",
    "FastAPI",
    "Git",
    "GitHub",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "LLM",
    "RAG",
    "Prompt Engineering",
    "Power BI",
    "Tableau"
]


def extract_text(pdf_path):
    text = ""

    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()

            if page_text:
                text += page_text + "\n"

    return text


def extract_skills(text):
    found = []

    for skill in SKILLS:
        if skill.lower() in text.lower():
            found.append(skill)

    return found


def calculate_ats_score(found_skills):
    required_skills = [
        "Python",
        "SQL",
        "Git",
        "AWS",
        "Docker",
        "FastAPI",
        "Machine Learning",
        "LLM"
    ]

    matched = 0
    missing = []

    for skill in required_skills:
        if skill in found_skills:
            matched += 1
        else:
            missing.append(skill)

    score = int((matched / len(required_skills)) * 100)

    return score, missing


def generate_learning_roadmap(missing_skills):
    roadmap = {}

    for i, skill in enumerate(missing_skills):
        roadmap[f"Week {i+1}"] = [
            f"Learn {skill} basics",
            f"Practice {skill} with hands-on examples",
            f"Build one mini project using {skill}"
        ]

    return roadmap


def generate_resume_feedback(ats_score, missing_skills):
    feedback = []

    if ats_score >= 90:
        feedback.append("Excellent resume. You are highly competitive.")
    elif ats_score >= 80:
        feedback.append("Strong resume. A few improvements can increase interview chances.")
    elif ats_score >= 70:
        feedback.append("Good resume but several important skills are missing.")
    else:
        feedback.append("Resume needs significant improvement.")

    if missing_skills:
        feedback.append("Focus on learning: " + ", ".join(missing_skills))

    feedback.append("Keep your projects updated on GitHub.")
    feedback.append("Add measurable achievements to every project.")

    return feedback

def recommend_careers(skills):
    skills = [skill.lower() for skill in skills]

    careers = []

    if "python" in skills:
        careers.append({
            "career": "Python Developer",
            "match": 95
        })

    if "machine learning" in skills or "llm" in skills:
        careers.append({
            "career": "AI / ML Engineer",
            "match": 94
        })

    if "django" in skills or "flask" in skills:
        careers.append({
            "career": "Backend Developer",
            "match": 92
        })

    if "sql" in skills:
        careers.append({
            "career": "Data Analyst",
            "match": 90
        })

    if "react" in skills or "javascript" in skills:
        careers.append({
            "career": "Full Stack Developer",
            "match": 88
        })

    if len(careers) == 0:
        careers.append({
            "career": "Software Engineer",
            "match": 70
        })

    careers.sort(key=lambda x: x["match"], reverse=True)

    return careers


def recommend_jobs(skills):

    return [
        {
            "title": "Python Developer",
            "company": "TCS",
            "location": "Pune",
            "salary": "₹6-10 LPA",
            "match": 95
        },
        {
            "title": "AI / ML Engineer",
            "company": "Amazon",
            "location": "Bangalore",
            "salary": "₹12-20 LPA",
            "match": 94
        },
        {
            "title": "Backend Developer",
            "company": "Infosys",
            "location": "Hyderabad",
            "salary": "₹8-14 LPA",
            "match": 92
        },
        {
            "title": "Data Analyst",
            "company": "Accenture",
            "location": "Mumbai",
            "salary": "₹6-12 LPA",
            "match": 90
        },
        {
            "title": "Full Stack Developer",
            "company": "Capgemini",
            "location": "Pune",
            "salary": "₹7-13 LPA",
            "match": 88
        }
    ]


def recommend_courses(missing_skills):

    course_database = {
        "Docker": {
            "course": "Docker for Beginners",
            "platform": "Udemy",
            "duration": "8 Hours",
            "level": "Beginner"
        },
        "FastAPI": {
            "course": "FastAPI Crash Course",
            "platform": "Coursera",
            "duration": "6 Hours",
            "level": "Intermediate"
        },
        "AWS": {
            "course": "AWS Cloud Practitioner",
            "platform": "AWS Skill Builder",
            "duration": "10 Hours",
            "level": "Beginner"
        },
        "Machine Learning": {
            "course": "Machine Learning Specialization",
            "platform": "Coursera",
            "duration": "40 Hours",
            "level": "Intermediate"
        },
        "React": {
            "course": "React Complete Guide",
            "platform": "Udemy",
            "duration": "30 Hours",
            "level": "Intermediate"
        }
    }

    courses = []

    for skill in missing_skills:
        if skill in course_database:
            courses.append({
                "skill": skill,
                **course_database[skill]
            })

    return courses


def generate_interview_questions(skills):

    questions = []

    skills = [skill.lower() for skill in skills]

    if "python" in skills:
        questions.extend([
            "Explain Python decorators.",
            "Difference between List and Tuple?",
            "What are generators in Python?"
        ])

    if "sql" in skills:
        questions.extend([
            "Explain SQL Joins.",
            "Difference between WHERE and HAVING?",
            "What is Normalization?"
        ])

    if "react" in skills:
        questions.extend([
            "What is Virtual DOM?",
            "Difference between Props and State?",
            "Explain React Hooks."
        ])

    if "machine learning" in skills:
        questions.extend([
            "What is Overfitting?",
            "Difference between Supervised and Unsupervised Learning?",
            "Explain Bias vs Variance."
        ])

    if len(questions) == 0:
        questions = [
            "Tell me about yourself.",
            "Why should we hire you?",
            "What are your strengths?"
        ]

    return questions[:10]