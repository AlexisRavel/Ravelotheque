# Ravelothèque
A personal project using Django and React for a digital library.
Runs on Ubuntu Server 23.04.

### Tech and language
- Python 3.11.4
- Django 4.2.5

## !! FOR THE SECRET KEY 
### What is it
Basicaly, it's **important**. If you **expose** it, for example on your GitHub, you will be faced with **cyber attacks** on your site. The secret key is used to for **encryption** of your project. See *For more informations* section if you want to know more.

### How to use it
Run the *secretKeyGen* script with python. In prompt you should have the key.
Create a file named *.env* and add your secret key:
 

    SECRET_KEY = 'your_secret_key'

Create a *.gitignore* file and add *.env*
You will need the package dotenv:

    pip install python-dotenv

  
### For more informations
https://www.makeuseof.com/django-secret-key-generate-new/



