## E-commerce Website for visually impaired

First install any dependencies:
```
npm install
```

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


Sprint 2 Notes:
- Trained a new rasa model that recognizes message intents about things like asking about accessibility tools, help with website navigatation, add/remove from cart, etc.
- Rasa model gives basic text responses to each of these intents
- Integrated a webchat widget on the /register page (the blue icon in the bottom right) - Will be able to communicate with bot as long as rasa server is running
- Also created a /chatbot endpoint that has the same chatbot session (covers full webpage)
