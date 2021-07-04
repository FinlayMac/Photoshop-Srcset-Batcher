//gets the current user prefs to reset later
var usersOriginalUnits = app.preferences.rulerUnits;
//required for the correct resize sizes
app.preferences.rulerUnits = Units.PIXELS;

//if no document open, ask for one
if (app.documents.length == 0) {

    //asks the user to select an image
    var loadedImage = openDialog();
    //takes the select image and makes it the active document
    app.open(loadedImage[0]);
}

var originalImage = app.activeDocument;
//gets the images folder for saving
var folder = originalImage.path;

//finds where the file extension starts
var lastDot = originalImage.name.lastIndexOf(".");
var filename = originalImage.name.substring(0, lastDot);

var png = confirm("Do you want PNGS?");
var jpeg = confirm("Do you want JPEGs?");
var webp = confirm("Do you want WebPs?\nYou will need to select WEBP in the Save As dialogue manually");

//determines next size of image
var widthInPx = parseInt(prompt("How wide should the image be in px?\nAspect ratio will be preserved", 500));

do {
    if (widthInPx) {
        //calls the document the name + width
        var documentName = filename + "-" + widthInPx;

        //opens a new image to protect the original (prevents resizing mistakes)
        originalImage.duplicate(documentName, true);

        //resizes image uniformly to given size
        app.activeDocument.resizeImage(widthInPx);

        //saves the image in the appropriate formats
        if (png)
            savePNG(documentName, folder);

        if (jpeg)
            saveJpeg(documentName, folder, 12);

        if (webp)
            saveWebP(documentName);

        //closes the final document
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)

        //gets the next size ready
        widthInPx = parseInt(prompt("How wide should the image be in px?\nAspect ratio will be preserved\nPress Cancel to stop", 500));

    } else {
        alert("Not Valid number");
    }
}

//if the prompt ever returns something not a number, it stops the loop
while (isNaN(widthInPx) == false)

//closes the original document
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)

//restores users original setting
app.preferences.rulerUnits = usersOriginalUnits;
alert("Finished");



/*saving functions*/
function savePNG(documentName, folder) {
    var file = new File(folder + '/' + documentName + '.png');
    var opts = new PNGSaveOptions();
    app.activeDocument.saveAs(file, opts, true);
}

function saveJpeg(documentName, folder, quality) {

    var file = new File(folder + '/' + documentName + '.jpeg');
    var opts = new JPEGSaveOptions();
    opts.quality = quality;
    opts.embedColorProfile = true;
    app.activeDocument.saveAs(file, opts, true);
}

function saveWebP(documentName) {

    //as far as I'm aware, no save options for webp
    //https://www.adobe.com/content/dam/acom/en/devnet/photoshop/pdfs/photoshop-javascript-ref-2020.pdf
    //see page 95

    //this is to auto name the file on the save as dialogue
    app.activeDocument.duplicate(documentName, true);
    executeAction(charIDToTypeID("save"), undefined, DialogModes.ALL);
    //closes the dupe
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)
}
