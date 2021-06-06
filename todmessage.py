import requests
import threading
from threading import Thread


def add_tokens():
    amount = input("How many tokens?")
    token = input("What is your Blooket account token? (JWT blahblah)")   
    msg = f"{name}: {msge}"
    request = requests.put("https://api.blooket.com/api/users/addtokens", data={"addedTokens":amount}, headers={"authorization":token, "referer": "https://www.blooket.com"})
    print(request.text)

add_tokens()
