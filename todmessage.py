import requests
import threading
from threading import Thread



def add_message():
    for I in range(100):
        name = input("What is your Blooket name?")
        msge = input("What message would you like to send?")
        token = input("What is your Blooket account token? (JWT blahblah)")
        msg = f"{name}: {msge}"
        request = requests.put("https://api.blooket.com/api/towers/message", data={"message":msg}, headers={"authorization":token})
        print(request.text)

def add_tokens():
    #amount = input("How many tokens?")
    name = input("What is your blooket name?")
    token = input("What is your Blooket account token? (JWT blahblah)")   
    request = requests.put("https://api.blooket.com/api/users/addtokens", data={"name":name, "addedTokens":amount}, headers={"authorization":token, "referer": "https://www.blooket.com"})
    print(request.text)
