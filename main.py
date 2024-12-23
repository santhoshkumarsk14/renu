from flask import Flask, render_template, request, flash
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
app.secret_key = 'dev-key-renu-engineering'  # For flash messages

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')
        
        # In a real application, you would process the form data here
        # For now, just log it and return a success message
        logging.debug(f"Contact form submission: {name}, {email}, {subject}")
        flash('Thank you for your message. We will get back to you soon!', 'success')
        
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
