# Photoshop-Srcset-Batcher
Allows you to supply an image and specify formats to save to (JPEG, PNG, WebP). Then asks for image widths, scales and exports into directory.
![Before](https://user-images.githubusercontent.com/34044928/124370082-16610300-dc6b-11eb-9012-ad58033eb21d.PNG)


<br>

<h2>To Run:</h2>
Download imageSrcSetPS.js and save anywhere<br>
File > Scripts > Browse > Locate the imageSrcSetPS.js file<br>


<br>

If a document is not open, you will be prompted to select an image.<br>
You will then be asked which image types you want batch exported (PNG, JPEG, WebP)<br>
![PSPrompt](https://user-images.githubusercontent.com/34044928/124369682-71dcc200-dc66-11eb-9f8a-e901635b6b16.PNG)
<br>
<br>
You will then be asked for a width for the new image to be scaled to.<br>
![SizePrompt](https://user-images.githubusercontent.com/34044928/124369716-d5ff8600-dc66-11eb-9b69-31b185f4cfe6.PNG)


<br>
The script will run and save new images using the naming convention: documentName-widthInPx.format
<br>
<br>
E.g. if I run the script, open penguins.tiff, select png /webp and set the size to 600, it will produce:<br>
penguins-600.png<br>
penguins-600.webp

<br>
<br>

<h2>Notes on WebP</h2>
Unfortunately, as far as I am aware, there is no possibility to automate the webp Save As dialogue using JavaScript. (If I am wrong, someone please correct me!)
<br><br>
To get around this, you will need to select WebP on the save as dialogue box that appears<br>
Then select your settings as normal (this is still quicker than manually creating srcsets)<br>

![webpWorkaround](https://user-images.githubusercontent.com/34044928/124369951-8a021080-dc69-11eb-8b0b-559de842c306.jpg)



