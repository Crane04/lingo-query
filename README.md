# lingo-query

# Dictionary API and Website

Welcome to the Dictionary API and Website project! This project provides a powerful Dictionary API that allows users to search for meanings, phonetics, synonyms, antonyms, hypernyms, and parts of speech of words. It also features a Translator. In addition, a simple website using Django has been created to demonstrate the functionality of the API.

## Features

- **Dictionary API:**
  - Search for word meanings
  - Get word phonetics
  - Find synonyms and antonyms
  - Explore word hypernyms (word hierarchy)
  - Retrieve parts of speech

  
- **Translator:**
  - Translate text between languages


- **Website:**
  - Interact with the Dictionary API through a user-friendly web interface
    
    - <a href="https://crane04.github.io/lingo-query/Test%20-%20Dictionary/dictionary">Here</a> is a Dictionary Application that I created using this API. Get the source code <a href = "https://github.com/Crane04/lingo-query/tree/main/Test%20-%20Dictionary">here</a><br>
    
    - <a href = "https://crane04.github.io/lingo-query/Test%20-%20Translator/translator">Here</a> is a Translator Application that I created using this API. Get the source code <a href = "https://github.com/Crane04/lingo-query/tree/main/Test%20-%20Translator">here</a>
      
## Installation

To run this project locally, you will need to have Python and Django installed. You can install Django and other required packages using the following commands after doing the following:


```bash
git clone https://github.com/your-username/dictionary-api.git
cd lingo-query
```
- **Set Up Virtual Environment (Optional but Recommended):**
  - If you prefer to work in a virtual environment, create and activate it:
```bash
python -m venv venv       # Create virtual environment
source venv/bin/activate  # Activate on macOS and Linux
workon venv     # Activate on Windows
```
- **Install Dependencies:**
  - Install the required packages for the project:

```bash
pip install -r requirements.txt
```

  - Then install nltk wordnet
```bash
    import nltk
    nltk.download('wordnet')
```
    
- **Start the Development Server:**
  - Run the Django development server to launch the website:

```bash
python manage.py runserver
```

- **Access the Website:**
  - Open your web browser and go to http://127.0.0.1:8000 to access the website.

- **Explore API and Translator:**
  - Use the website to explore the Dictionary API and Translator functionalities.
      - /dictionary?word={word} - Dictionary
      - /translator?from={from_lang}&to={to_lang}&text={sentence}
 
## Contributing
- **We welcome contributions to this project! To contribute:**

Fork the repository.
1. Create a new branch: git checkout -b feature-new-feature
2. Make your changes and commit them: git commit -m "Add new feature"
3. Push to the branch: git push origin feature-new-feature
4. Create a pull request with a detailed description of your changes.

## Contact
  - **If you have any questions or feedback, feel free to reach out at encrane04@gmail.com**
