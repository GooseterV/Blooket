import sys

sys.path.append("c:/users/goost/appdata/local/packages/pythonsoftwarefoundation.python.3.9_qbz5n2kfra8p0/localcache/local-packages/python39/site-packages")

import requests
import json
import time
import random
import os
import discord
from discord import Webhook, RequestsWebhookAdapter
import threading
import datetime
from datetime import datetime
from pytz import timezone

hooklink = os.getenv("WEBHOOK_URL")

# token = ""
botname = 'kick me'
y = True
v = '\\' 
x = v[-1]

i = random.randint(1, 9)
tz = timezone('US/Eastern')
currenttime = datetime.now(tz) 


def guessjoins1():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)

def guessjoins2():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)

def guessjoins3():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)

def guessjoins4():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)

def guessjoins5():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)

def guessjoins6():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)

def guessjoins7():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)

def guessjoins8():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)

def guessjoins9():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)

def guessjoins10():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
def guessjoins11():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)


def guessjoins12():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)


def guessjoins13():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)

def guessjoins14():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                elif "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)

def guessjoins15():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)

def guessjoins16():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                

def guessjoins17():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)

def guessjoins18():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)

def guessjoins19():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)

def guessjoins20():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)

def guessjoins21():
    while y == True:
        randomnum = random.randint(100000, 999999)
        resulted = requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(i)}"})
        requests.delete(f"https://api.blooket.com/api/firebase/client?id={randomnum}&name={botname+'-'+str(i)}")
        if resulted.text == '{"success":false,"msg":"no game"}' or resulted.text == "{'success': False, 'msg': 'late'}" or resulted.text == '{"success":false,"msg":"late"}':
            print(str(randomnum) + " - Failed: Not a valid game code.")
            
        else:
            if resulted.text != "Too many requests, please try again later.":
                print(resulted.text)
                data = json.loads(resulted.text)
                if "'c':{" in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"{str(len(data['host']['c']))} **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)
                    # print(f"Attempting to flood game {str(randomnum)} with bots.")
                    # webhook.send(f"Attempting to flood game {str(randomnum)} with bots.")
                    # for ie in range(50):
                        # requests.put("https://api.blooket.com/api/firebase/join", headers={"Referer":"https://www.blooket.com/"}, data={"id":f"{str(randomnum)}", "name":f"{botname+'-'+str(ie)}"})
                    # y = False
                if "'c':{" not in str(data):
                    webhook = Webhook.from_url(f"{str(hooklink)}", adapter=RequestsWebhookAdapter())
                    embed=discord.Embed(
                        title=f"Game **{str(randomnum)}**",
                        url=f"https://www.blooket.com/play?id={randomnum}",
                        description=f"~ **Players** \n\n**Game Id** > [{str(randomnum)}](https://www.blooket.com/play?id={str(randomnum)}) \n**Set Id** > [{str(data['host']['set'])}](https://www.blooket.com/set/{str(data['host']['set'])}) \n**Game Mode** > {str(data['host']['s']['t'])} \n**Host** > [{str(data['host']['ho'])}](https://www.blooket.com/stats?name={str(data['host']['ho'])}) \n **Type** > {str(data['host']['s']['m'])} \n **Stage** > {str(data['host']['stg'])}",
                        color=15277667,
                        timestamp=currenttime
                    )
                    embed.set_author(name="Game Code Found!", icon_url="https://cdn.discordapp.com/attachments/847606880369246220/850812808664449057/blooket_icon.png", url=f"https://www.blooket.com/play?id={str(randomnum)}")
                    webhook.send(embed=embed)