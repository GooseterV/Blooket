# Python Version
- Download and install the [latest stable python release](https://www.python.org/downloads/)
- Make sure you select the box to install pip and default packages.
- Open up your shell <br>
 `↪` Run command `$ python`  to verify python is installed correctly
- Verify pip is installed <br>
 `↪` Run command `python -m pip`  in your shell
- Create a new folder and copy `blooket.py` into it <br>
 `↪` You can also copy blooket.py into your python `site-packages` folder
- Create a new python file named `main.py` and type in:
```py
import blooket
blooket.login("username/email", "password") # replace username with your username and password with your pass
```
- to see someone's blooks and calculate the total value of their blooks you can use this code:
```py
import blooket
import json
name = "playername"
blooket.login("username/email", "password")
print(blooket.formatBlookString(name))
blooks = blooket.getBlooks(name)
t = 0
for blook in blooks['blooks'].keys():
    rarity = blooksInfo["Info"]["Blooks"][blook]["Rarity"]
    blookPrice = blooksInfo["Info"]["Sell Prices"][rarity]
    t += blookPrice*blooks['blooks'][blook]

print(f"   Total value of {name}'s blooks: {t}\n")
```
For seeing other players stats you can do:
```py
import blooket
name = "playername"
blooket.login("username/email", "password")
print(formatInfoString(name))
```
