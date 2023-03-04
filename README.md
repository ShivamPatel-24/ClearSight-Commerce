## E-commerce Website for visually impaired
###### Installing Rasa
Python 3.7 - 3.10 is needed
It is recommended to first set up a virtual environment: https://rasa.com/docs/rasa/installation/environment-set-up

Follow steps here to install rasa locally: https://rasa.com/docs/rasa/installation/installing-rasa-open-source

###### Run Server
Run this command to run the rasa server on port 5005.
```
rasa run -m models --enable-api --cors "*"
```

When server is running, you can launch the website (with node) and interact with the chatbot on the /register page (as a widget in the bottom right) or on the /chatbot endpoint.
