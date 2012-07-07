#Aviary iphone module for Titanium Mobile

 License
========
The MIT License (MIT)
Copyright © 2012 <KimGeunHyeong(dev.lasneo@gmail.com)>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Test Environment
========

Titanium Mobile SDK 2.1.0GA.
iOS SDK 4.3.3.
AviarySDK Version 2.4.0.

##Installation for Mac OS X
###Step 1
Download AviaryModule project.
Copy the downloadFolder/module/com.ghkim.aviary_ios-iphone-1.0.zip into your Titanium SDK directory: http://docs.appcelerator.com/titanium/2.0/#!/guide/Titanium_Modules

Update modules section of your tiapp.xml like below:

    <modules>
        <module platform="iphone" version="1.0">com.ghkim.aviary_ios</module>
    </modules>


###Step 2
Project clean.
Run Titanium project but does not work.
Open build project by xcode.
Add AviarySDKResources.bundle files from downloadFolder/module. (just drag and drop to xcode)
Run project by xcode.
And show image. It's end.!

###Step 3
[More Information](http://lasneo.tumblr.com/post/26715724515/aviarymodule-guide)

API
========

    var image = Titanium.UI.createImageView({image:'test.png'});
    var img = image.toImage();
    var tools = ['kAFEnhance','kAFEffects','kAFOrientation'];


    //Obtain aviary module
    var aviary = require("com.ghkim.aviary_ios");


    //Create imageEditor and argument is image to edit.
    aviary.newImageEditor(img);


    //Create imageEditor and second argument is tool setting.
    aviary.newImageEditor(img,tools);

    //Create resolutionEditor and argument is image to resolution
    aviary.newImageResolutionEditor(img);

    //Create resolutionEditor and second argument is resolution size.
    aviary.newImageResolutionEditor(img,{width:100, height:20});

    // Display editor. editor exist only one.
    aviary.displayEditor();

    // Get Aviarysdk Version. Now 2.4.0
    var version = aviary.getAviarySDKVersion();


    //Customize color. More Information is below AviaryDocumentation
    //IMPORTANT!! : imageEditor or resolutionEditor exist.
    aviary.setBackgroundColor(1,0,0,1);
    aviary.setAccentColor(1,1,0.3,1);
    aviary.setTopBarBackgroundColor(0,0.6,0,1);
    aviary.setTopBarTextColor(1,1,1,1);
    aviary.setTopBarLeftButtonTextColor(0,1,0,1);
    aviary.setTopBarLeftButtonBackgroundColor(1,0,1,1);
    aviary.setButtonIconColor(1,1,1,1);
    aviary.setButtonTextColor(1,0.4,1,1);
    aviary.setPageControlUnselectedColor(0,0,0,1);

[Aviarydocumentation](http://www.aviary.com/ios-documentation)

Author
========

KimGeunHyeong.
(dev.lasneo@gmail.com)
[tumblr](http://www.lasneo.tumblr.com/)