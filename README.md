viary iphone module for Titanium Mobile

##Test Environment
Titanium Mobile SDK 2.1.0GA
iOS SDK 4.3.3

##Step 1
Download AviaryModule project.
Copy the downloadFolder/module/com.ghkim.aviary_ios-iphone-1.0.zip into your Titanium SDK directory: http://docs.appcelerator.com/titanium/2.0/#!/guide/Titanium_Modules

Update modules section of your tiapp.xml like below:
```
<modules>
  <module platform="iphone" version="1.0">com.ghkim.aviary_ios</module>
  </modules>
  ```

##Step 2
Project clean.
Run Titanium project but does not work.
Open build project by xcode.
Add AviarySDKResources.bundle files from downloadFolder/module. (just drag and drop to xcode)
Run project by xcode.
And show image. It's end.!

##Step 3
[More Information](http://lasneo.tumblr.com/post/26715724515/aviarymodule-guide)

##Link
[tumblr](http://www.lasneo.tumblr.com/)
