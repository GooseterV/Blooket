import requests
import threading
from threading import Thread



def add_message():
    name = input("What is your Blooket name?")
    msge = input("What message would you like to send?")
    token = input("What is your Blooket account token? (JWT blahblah)")
    msg = f"{name}: {msge}"
    request = requests.put("https://api.blooket.com/api/towers/message", data={"message":msg}, headers={"authorization":token})
    print(request.text)

add_message()
