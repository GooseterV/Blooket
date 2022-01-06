# **NOTICE**
#### Blooket has started to take action on accounts that spam the api too fast. 
#### If you are worried about anything happening to your account while using these, read this section and the FAQ.
#### As long as you are using them only as they're meant to be used you will not be suspended.
#### I have gotten confirmation that none of these will disable your account, so do not worry
#### [Blooket Terms of Service](https://www.blooket.com/terms)
</br>

 # Blooket Stuff - JS

# blookViewer.js
### See other people's blooks in the form of your own blook page
</br>

Click on  `js`
- `blooks`
- `blookViewer.js`
- copy button (two papers icon)
Go to blooket blooks page (./blooks)
- click on a non-common blook (uncommon + )
- open up devtools console (ctrl + shift + j)
- paste code into console



# blookInfoExtender.js
### Show extended info on all of the blooks
</br>

Click on  `js`
- `blooks`
- `blookInfoExtender.js`
- copy button (two papers icon)
Go to blooket blooks page (./blooks)
- click on a non-common blook (uncommon + )
- open up devtools console (ctrl + shift + j)
- paste code into console

# spoofer.js
### Show all of the blooks in your blook page along with custom ones as a special rarity
</br>

Click on  `js`
- `blooks`
- `spoofer.js`
- copy button (two papers icon)
Go to blooket blooks page (./blooks)
- click on a non-common blook (uncommon + )
- open up devtools console (ctrl + shift + j)
- paste code into console

# exportTDSave.js
### Export your tower defense saves data in a base64 encoded string for easy sharing.
</br>

Click on  `js`
- `export`
- `exportTDSave.js`
- copy button (two papers icon)
Go to blooket blooks page (./blooks)
- click on a non-common blook (uncommon + )
- open up devtools console (ctrl + shift + j)
- paste code into console

# exportTODSave.js
### Export your tower of doom saves data in a base64 encoded string for easy sharing.
</br>

Click on  `js`
- `export`
- `exportTODSave.js`
- copy button (two papers icon)
Go to blooket blooks page (./blooks)
- click on a non-common blook (uncommon + )
- open up devtools console (ctrl + shift + j)
- paste code into console

# exportCafeSave.js
### Export your cafe saves data in a base64 encoded string for easy sharing.
</br>

Click on  `js`
- `export`
- `exportCafeSave.js`
- copy button (two papers icon)
Go to blooket blooks page (./blooks)
- click on a non-common blook (uncommon + )
- open up devtools console (ctrl + shift + j)
- paste code into console

# importTDSave.js
### Import your tower defense saves data from the base64 string you exported.
### **WARNING** **THIS SETS ALL SAVES TO SPECIFIED SAVE, NOT JUST ONE**
</br>

Click on  `js`
- `import`
- `importTDSave.js`
- copy button (two papers icon)
Go to blooket blooks page (./blooks)
- click on a non-common blook (uncommon + )
- open up devtools console (ctrl + shift + j)
- paste code into console

# importTODSave.js
### Import your tower defense saves data from the base64 string you exported.
### **WARNING** **THIS SETS ALL SAVES TO SPECIFIED SAVE, NOT JUST ONE**
</br>

Click on  `js`
- `import`
- `importTODSave.js`
- copy button (two papers icon)
Go to blooket blooks page (./blooks)
- click on a non-common blook (uncommon + )
- open up devtools console (ctrl + shift + j)
- paste code into console

# importCafeSave.js
### Import your tower defense saves data from the base64 string you exported.
### **WARNING** **THIS SETS ALL SAVES TO SPECIFIED SAVE, NOT JUST ONE**
</br>

Click on  `js`
- `import`
- `importCafeSave.js`
- copy button (two papers icon)
Go to blooket blooks page (./blooks)
- click on a non-common blook (uncommon + )
- open up devtools console (ctrl + shift + j)
- paste code into console

## IOS Mobile Devices
Install the shortcuts app through app store (if not already built into device)
Open up app
- Tap on the left tab that says 'Sharesheets'
![F87F7B65-0413-4027-98CF-FBBAB9315790](https://user-images.githubusercontent.com/82774618/143507853-bf8b4ebd-e848-47de-b6a5-2c85deb4a974.jpeg)

- Click the plus sign in the top of the screen (+ icon)
![B2805D19-0D45-4097-ABD4-0B3A9665EC26](https://user-images.githubusercontent.com/82774618/143507877-2ce7531f-3e73-48ac-9fa5-385aab7118eb.jpeg)

- Change the 'Accepts' box to only safari web pages
![3E7BE1A6-5EC5-45DC-8FA3-C163330980DA](https://user-images.githubusercontent.com/82774618/143507962-1fd8ae2b-81dd-4dd6-8936-09c3aa1361f9.jpeg)

- Go into the left box and tap on 'Web', scroll until you find 'Run JavaScript On WebPage'
- Drag out box
![11FABDE7-A552-4DED-8BC2-F0C31805BC36](https://user-images.githubusercontent.com/82774618/143508048-a5b887ff-9c15-47d8-bd50-2a5fb14a078a.jpeg)

- Replace contents with below
```js
// clipboard variable here
window.setTimeout(alert, 1, 'Javascript Input Executed.');
completion("Done.");
```
![D38FCE82-5660-42E6-90DC-2E152ADDB7ED](https://user-images.githubusercontent.com/82774618/145502962-9b43a684-1552-48f5-bf16-2cb75b001c04.jpeg)

- Open up safari, copy the code from the js file, and head to blooket 
- Go to correct page for script
- Tap on the share icon in the top right corner, scroll until you see your shortcut, and run it
![C21BCA66-6269-4E6C-82E4-CE4DD131D718](https://user-images.githubusercontent.com/82774618/143508281-9d6aa128-85c5-4b18-8536-31130bff9c37.jpeg)

### Note! This will work with all scripts and other javascript, so don't delete the shortcut when you're done.

## Android/Samsung Devices
- Refer to Bookmarklets section.

## Bookmarklets 
- Go to any page and create a new bookmark with the favorite icon (star)
- Replace bookmark url with `javascript:`
- Paste fetch script from above 
### When you finish it should look something like:
*`javascript:(obfuscatedcodeblahblahblah)`*
<br>
To run it, head to blooket and click the bookmark

## python section
- install python
- create a new folder and copy `py/blooket.py` into it (only the file)
- copy `storage/blooksInfo.json` into it (the file and folder)
- create a new python file and type in:
```py
import blooket
token = "JWT yourtoken" # localStorage.token
name = "Yourblooketname" # localStorage.washere
```
- to see someone's blooks and calculate the total value of their blooks you can use this code:
```py
import blooket
import json
name = "playername"
token = "localStorage.token (your token)"
print(blooket.formatBlookString(name, token))
blooks = blooket.getBlooks(name, token)
t = 0
for blook in blooks['blooks'].keys():
    rarity = json.loads(open("storage/blooksInfo.json", "r").read())["Info"]["Blooks"][blook]["Rarity"]
    blookPrice = json.loads(open("storage/blooksInfo.json", "r").read())["Info"]["Sell Prices"][rarity]
    t += blookPrice*blooks['blooks'][blook]

print(f"   Total value of {name}'s blooks: {t}\n")
```



## Issues & Bugs
- Check for any mistakes you may have made 
- If you are certain it is a problem with the code, go to the [**`Issues`**](https://github.com/GooseterV/Blooket/issues/new) tab of the repo and create a new issue

## Faq

Q. Will you make in game exploits?
</br>
A. No, because that would be breaking Blooket ToS.
</br>
</br>
Q. Will my account be suspended for using these?
</br>
A. No, as long as you are not spamming the API or breaking ToS you will not be suspended.
</br>
</br>
Q. Can I use this on android/ios and how do I?
</br>
A. For IOS please view the IOS/Apple section of this file, for Android/Samsung/Google OS please view the bookmarklet section.
</br>
</br>
Q. Is this ever going to get taken down?
</br>
A. Until I am required to by Blooket ToS this repo will stay public.
</br>
</br>
Q. Can the python be run on any os?
</br>
A. The Python section has only been tested on Windows, Repl.it and IOS Pythonista3. It should work on Linux and other systems but it has not been tested.
</br>
</br>
Q. When I use any of the Blook scripts, it always gets messed up and displays some info twice. How do i fix this?
</br>
A. Before running the script on the Blooks page, make sure you click on a non-common blook. This happens because the common blooks do not start with a sell price, messing things up.
</br>
</br>
**If your question is not listed here anywhere, please feel free to ask in the Issues/Bugs tab**


