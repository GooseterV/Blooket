# Python Version
- Download and install the [latest stable python release](https://www.python.org/downloads/)
- Make sure you select the box to install pip and default packages.
- Open up your shell <br>
 `↪` Run command `$ python`  to verify python is installed correctly
- Verify pip is installed <br>
 `↪` Run command `python -m pip`  in your shell
- Create a new folder and copy `blooket.py` into it 
- Create a new python file named `main.py` and type in:
```py
import blooket
email = "email"
password = "password"
name = "Yourblooketname" # localStorage.washere
```
- to see someone's blooks and calculate the total value of their blooks you can use this code:
```py
import blooket
import json
name = "playername"
email = "email"
password="password"
print(blooket.formatBlookString(name, email, password))
blooks = blooket.getBlooks(name, email, password)
t = 0
for blook in blooks['blooks'].keys():
    rarity = json.loads(open("storage/blooksInfo.json", "r").read())["Info"]["Blooks"][blook]["Rarity"]
    blookPrice = json.loads(open("storage/blooksInfo.json", "r").read())["Info"]["Sell Prices"][rarity]
    t += blookPrice*blooks['blooks'][blook]

print(f"   Total value of {name}'s blooks: {t}\n")
```
For seeing other players stats you can do:
```py
import blooket
name = "playername"
email = "email"
password="password"
print(formatInfoString(name, email, password))
```
