import requests
import threading
from threading import Thread
import time
from time import sleep
import os

hooklink = os.getenv("WEBHOOK")

botname = "kick me"

def bruteforce1():
    for i in range(100000, 200000):
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i)}", "name":f"kick me"})
        resulted2 = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i+100000)}", "name":f"kick me"})
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}' or resulted2.text == '{"success":false,"msg":"no game"}' or resulted2.text == "{'success': False, 'msg': 'late'}" or resulted2.text == '{"success":false,"msg":"late"}':
            print(str(i) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                requests.delete(f"https://api.blooket.com/api/firebase/client?id={i}&name={botname}")
                print(resulted.text)
                print(resulted2.text)
def bruteforce2():
    for i in range(200000, 300000):
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i)}", "name":f"kick me"})
        resulted2 = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i+100000)}", "name":f"kick me"})
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}' or resulted2.text == '{"success":false,"msg":"no game"}' or resulted2.text == "{'success': False, 'msg': 'late'}" or resulted2.text == '{"success":false,"msg":"late"}':
            print(str(i) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                requests.delete(f"https://api.blooket.com/api/firebase/client?id={i}&name={botname}")
                print(resulted.text)
                print(resulted2.text)
def bruteforce3():
    for i in range(300000, 400000):
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i)}", "name":f"kick me"})
        resulted2 = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i+100000)}", "name":f"kick me"})
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}' or resulted2.text == '{"success":false,"msg":"no game"}' or resulted2.text == "{'success': False, 'msg': 'late'}" or resulted2.text == '{"success":false,"msg":"late"}':
            print(str(i) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                requests.delete(f"https://api.blooket.com/api/firebase/client?id={i}&name={botname}")
                print(resulted.text)
                print(resulted2.text)
def bruteforce4():
    for i in range(400000, 500000):
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i)}", "name":f"kick me"})
        resulted2 = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i+100000)}", "name":f"kick me"})
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}' or resulted2.text == '{"success":false,"msg":"no game"}' or resulted2.text == "{'success': False, 'msg': 'late'}" or resulted2.text == '{"success":false,"msg":"late"}':
            print(str(i) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                requests.delete(f"https://api.blooket.com/api/firebase/client?id={i}&name={botname}")
                print(resulted.text)
                print(resulted2.text)
def bruteforce5():
    for i in range(500000, 600000):
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i)}", "name":f"kick me"})
        resulted2 = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i+100000)}", "name":f"kick me"})
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}' or resulted2.text == '{"success":false,"msg":"no game"}' or resulted2.text == "{'success': False, 'msg': 'late'}" or resulted2.text == '{"success":false,"msg":"late"}':
            print(str(i) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                requests.delete(f"https://api.blooket.com/api/firebase/client?id={i}&name={botname}")
                print(resulted.text)
                print(resulted2.text)
def bruteforce6():
    for i in range(600000, 700000):
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i)}", "name":f"kick me"})
        resulted2 = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i+100000)}", "name":f"kick me"})
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}' or resulted2.text == '{"success":false,"msg":"no game"}' or resulted2.text == "{'success': False, 'msg': 'late'}" or resulted2.text == '{"success":false,"msg":"late"}':
            print(str(i) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                requests.delete(f"https://api.blooket.com/api/firebase/client?id={i}&name={botname}")
                print(resulted.text)
                print(resulted2.text)
def bruteforce7():
    for i in range(700000, 800000):
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i)}", "name":f"kick me"})
        resulted2 = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i+100000)}", "name":f"kick me"})
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}' or resulted2.text == '{"success":false,"msg":"no game"}' or resulted2.text == "{'success': False, 'msg': 'late'}" or resulted2.text == '{"success":false,"msg":"late"}':
            print(str(i) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                requests.delete(f"https://api.blooket.com/api/firebase/client?id={i}&name={botname}")
                print(resulted.text)
                print(resulted2.text)
def bruteforce8():
    for i in range(800000, 900000):
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i)}", "name":f"kick me"})
        resulted2 = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i+100000)}", "name":f"kick me"})
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}' or resulted2.text == '{"success":false,"msg":"no game"}' or resulted2.text == "{'success': False, 'msg': 'late'}" or resulted2.text == '{"success":false,"msg":"late"}':
            print(str(i) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                requests.delete(f"https://api.blooket.com/api/firebase/client?id={i}&name={botname}")
                print(resulted.text)
                print(resulted2.text)
def bruteforce9():
    for i in range(900000, 999999):
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i)}", "name":f"kick me"})
        resulted2 = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(i+100000)}", "name":f"kick me"})
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}' or resulted2.text == '{"success":false,"msg":"no game"}' or resulted2.text == "{'success': False, 'msg': 'late'}" or resulted2.text == '{"success":false,"msg":"late"}':
            print(str(i) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                requests.delete(f"https://api.blooket.com/api/firebase/client?id={i}&name={botname}")
                print(resulted.text)
                print(resulted2.text)


if __name__=='__main__':
    a1 = Thread(target=bruteforce1)
    a2 = Thread(target=bruteforce2)
    a3 = Thread(target=bruteforce3)
    a4 = Thread(target=bruteforce4)
    a5 = Thread(target=bruteforce5)
    a6 = Thread(target=bruteforce6)
    a7 = Thread(target=bruteforce7)
    a8 = Thread(target=bruteforce8)
    a9 = Thread(target=bruteforce9)
    a1.start()
    a2.start()
    a3.start()
    a4.start()
    a5.start()
    a6.start()
    a7.start()
    a8.start()
    a9.start()

