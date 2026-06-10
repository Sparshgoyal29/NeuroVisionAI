import google.generativeai as genai

genai.configure(
    api_key= getenv("GOOGLE_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-1.5-flash"
)

def ask_gemini(question):

    prompt = f"""
    You are NeuroVision AI.

    You are a professional healthcare assistant.

    Answer questions about:
    - Brain Tumors
    - MRI Scans
    - Symptoms
    - Healthcare

    Always provide clear and professional answers.

    Question:
    {question}
    """

    response = model.generate_content(
        prompt
    )

    return response.text