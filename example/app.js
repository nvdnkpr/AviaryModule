// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var win = Titanium.UI.createWindow({
    title:'Tab 1',
    backgroundColor:'#fff'
});
win.open();


var aviary = require('com.ghkim.aviary_ios');

// imageEditor Finished
aviary.addEventListener('avEditorFinished', function(ev){
	var iv = Titanium.UI.createImageView({image:ev.image, width: 100, height:200});
	win.add(iv);
});

// imageEditor Cancel
aviary.addEventListener('avEditorCancel', function(ev){
	alert('cancel');
});

// imageResolution Finished
aviary.addEventListener('avResolutionFinished', function(ev){
	var iv = Titanium.UI.createImageView({image:ev.image, width: 100, height:200, top:0});
	win.add(iv);
})

var imageEditorBt1 = Ti.UI.createButton({
	width: 150,
	height: 30,
	title: 'editorType1',
	left: 10,
	bottom: 40,
})
imageEditorBt1.addEventListener('click',function(){
	var image = Titanium.UI.createImageView({image:'test.png'});
	var img = image.toImage();
	aviary.newImageEditor(img);
	aviary.displayEditor();
});
win.add(imageEditorBt1);

var imageEditorBt2 = Ti.UI.createButton({
	width: 150,
	height: 30,
	title: 'editorType2',
	right: 10,
	bottom: 40,
})

// kAFEnhance      /* Enhance */
// kAFEffects      /* Effects */
// kAFOrientation  /* Orientation */
// kAFCrop         /* Crop */
// kAFBrightness   /* Brightness */
// kAFContrast     /* Contrast */
// kAFSaturation   /* Saturation */
// kAFSharpness    /* Sharpness */
// kAFDraw         /* Draw */
// kAFText         /* Text */
// kAFRedeye       /* Redeye */
// kAFWhiten       /* Whiten */
// kAFBlemish      /* Blemish */
imageEditorBt2.addEventListener('click',function(){
	var image = Titanium.UI.createImageView({image:'test.png'});
	var img = image.toImage();
	var tools = ['kAFEnhance','kAFEffects','kAFOrientation'];

	aviary.newImageEditor(img,tools);
	aviary.displayEditor();
});
win.add(imageEditorBt2);

var resolutionEditorBt1 = Ti.UI.createButton({
	width: 150,
	height: 30,
	title: 'resolution1',
	left: 10,
	bottom: 5,
})
resolutionEditorBt1.addEventListener('click',function(){
	var image = Titanium.UI.createImageView({image:'test.png'});
	var img = image.toImage();
	aviary.newImageResolutionEditor(img);
	aviary.displayEditor();
});
win.add(resolutionEditorBt1);

var resolutionEditorBt2 = Ti.UI.createButton({
	width: 150,
	height: 30,
	title: 'resolution2',
	right: 10,
	bottom: 5,
})
resolutionEditorBt2.addEventListener('click',function(){
	var image = Titanium.UI.createImageView({image:'test.png'});
	var img = image.toImage();
	aviary.newImageResolutionEditor(img,{width:100, height:20});
	aviary.displayEditor();
});
win.add(resolutionEditorBt2);


var versionBt = Ti.UI.createButton({
	width: 150,
	height: 30,
	title: 'version',
	left: 10,
	bottom: 70,
})
versionBt.addEventListener('click',function(){
	var version = aviary.getAviarySDKVersion();
	alert(version);
});
win.add(versionBt);


var customBt = Ti.UI.createButton({
	width: 150,
	height: 30,
	title: 'custom',
	right: 10,
	bottom: 70,
})
customBt.addEventListener('click',function(){
	var image = Titanium.UI.createImageView({image:'test.png'});
	var img = image.toImage();
	aviary.newImageResolutionEditor(img,{width:100, height:20});
	aviary.setBackgroundColor(1,0,0,1);
	aviary.setAccentColor(1,1,0.3,1);
	aviary.setTopBarBackgroundColor(0,0.6,0,1);
	aviary.setTopBarTextColor(1,1,1,1);
	aviary.setTopBarLeftButtonTextColor(0,1,0,1);
	aviary.setTopBarLeftButtonBackgroundColor(1,0,1,1);
	aviary.setButtonIconColor(1,1,1,1);
	aviary.setButtonTextColor(1,0.4,1,1);
	aviary.setPageControlUnselectedColor(0,0,0,1);
	aviary.displayEditor();
});
win.add(customBt);


