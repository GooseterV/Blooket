import requests
import json
import os
import re
import math
import sys
import time
import random
import base64

from requests.models import Response
class BlooketErrors:
	class InvalidName(Exception):
		def __init__(self, playerName, message="Invalid blooket player name!"):
			self.name= playerName
			self.message = message
			super().__init__(self.message)
		pass
	class FailedAuth(Exception):
		def __init__(self, message="Failed authorization!"):
			self.message = message
			super().__init__(self.message)
		pass
	class UnknownError(Exception):
		def __init__(self, message="Something went wrong!"):
			self.message = message
			super().__init__(self.message)
		pass

def getBlooks(playerName:str, token):
	r = requests.get(f"https://api.blooket.com/api/users?name={playerName}", headers={"authorization":token})
	
	try:
		rj = json.loads(r.text)["unlocks"]
		bj = {
			"playerName":playerName,
			"blooks":rj
		}
		return bj
	except Exception as e:
		if r.status_code == 404:
			raise BlooketErrors.InvalidName(playerName)
		elif r.status_code == 401:
			raise BlooketErrors.FailedAuth()
		elif r.status_code == 400:
			raise BlooketErrors.BadRequest()
		else:
			raise BlooketErrors.UnknownError()

def formatBlookString(playerName, token):
	with open("storage/blooksInfo.json", "r") as blookFile:
		blookData = json.loads(blookFile.read())
	blookString = f"\033[1m{playerName}'s Blooks\033[0m\n   "
	userBlooks = getBlooks(playerName, token)
	blookRarityColors = {
		"Uncommon":"\033[38;2;75;194;46m", #rgb(75, 194, 46)
		"Rare":"\033[38;2;10;20;250m", #rgb(10, 20, 250)
		"Epic":"\033[38;2;190;0;0m", #rgb(190, 0, 0)
		"Legendary":"\033[38;2;255;145;15m", #rgb(255, 145, 15)
		"Chroma":"\033[38;2;0;204;255m", #rgb(0, 204, 255)
		"Mystical":"\033[38;2;163;53;238m" #rgb(163, 53, 238)
	}
	for (blookName, blookAmount) in zip(userBlooks["blooks"].keys(), userBlooks["blooks"].values()):
		blookColor = blookRarityColors[blookData["Info"]["Blooks"][blookName]["Rarity"]]
		blookString += f"{blookColor}{blookName}: {blookAmount:.2f}\033[0m\n   "
	return blookString

def getInfo(playerName:str, token) -> dict:
	userInfo = requests.get(f"https://api.blooket.com/api/users?name={playerName}", headers={"authorization":token})
	try:
		infoJSON = json.loads(userInfo.text)
		return infoJSON
	except Exception as e:
		if userInfo.status_code == 404:
			raise BlooketErrors.InvalidName(playerName)
		elif userInfo.status_code == 401:
			raise BlooketErrors.FailedAuth()
		elif userInfo.status_code == 400:
			raise BlooketErrors.BadRequest()
		else:
			raise BlooketErrors.UnknownError()
def formatInfoString(playerName:str, token) -> str:
	userInfo = getInfo(playerName, token)
	infoKeys = []
	infoString = f"\033[1m{playerName}'s Information\033[0m\n   "
	for (infoKey, infoValue) in zip(userInfo.keys(), userInfo.values()):
		keyList = re.split('(?=[A-Z])', infoKey)
		infoKeys.append(keyList)
		subString = f""
		for statKey in keyList:
			subString += f"{statKey.capitalize()} "
		if "Unlocks" not in subString and "Classes" not in subString and "Folders" not in subString and "Homeworks" not in subString and "Games" not in subString and "Histories" not in subString and "History" not in subString and "Favorites" not in subString and "Usage" not in subString:
			infoString += f"{subString}: {infoValue}\n   "
	return infoString

def openBox(box:str, token:str) -> dict:
	name = json.loads(base64.b64decode(token.split(".")[1] + "=="))["name"]
	res = requests.put("https://api.blooket.com/api/users/unlockblook", data={"name" : name, "box": box}, headers={"authorization" : token})
	try: 
		j = res.json()
		return j
	except Exception as e:
		if res.status_code == 404:
			raise BlooketErrors.InvalidName()
		elif res.status_code == 401:
			raise BlooketErrors.FailedAuth()
		elif res.status_code == 400:
			raise BlooketErrors.BadRequest()
		else:
			raise BlooketErrors.UnknownError()
