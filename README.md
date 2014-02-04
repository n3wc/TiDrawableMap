# TiDrawableMap

Alloy Widget for drawing on the map using touch! works on both iOS & Android

![demo](http://i.imgur.com/JDWFQAd.gif)

## Install

[download](https://github.com/n3wc/TiDrawableMap/releases/latest)

## Features
* enable drawing on the map with touch
* ability to use convex hull to get best fit for drawn points
* drawStart & drawEnd events
* configure throttle & line width/colors 

## Usage

Create global reference for map in alloy.js `Alloy.Globals.Map = require('ti.map');`
```
**_.throttle is not playing with android so the function was copied over into alloy.js to monkey patch it
```
Create an instance of the widget
```
xml
<Require type="widget" src="com.n3wc.TiDrawableMap" id="DrawableMap"/>
```

Add open listener to xml file to calculate size of map
```javascript
$.index.addEventListener('open', function() {
    $.DrawableMap.setSizes();
    //set region (this is a full instance of the ti.map module so you can do everything with it that you normally would)
    $.DrawableMap.TiDrawableMapView.setRegion({latitude:36.9167, longitude:-76.2,latitudeDelta:2.0, longitudeDelta:2.0});
});
```

To start drawing
```
function startDraw(){
	$.DrawableMap.startDraw({useConvexHull:true,lineWidth:4,lineColor:"#0000ff",throttleTimer:75});
	/*optional parameters:
		useConvexHull : bool
		lineWidth : int
		lineColor : string
		throttleTimer : int
	*/
}
```
events
```
$.DrawableMap.addEventListener('drawStart',function(e){
});

$.DrawableMap.addEventListener('drawEnd',function(e){
	//object contains 2 arrays of points
	//[{latitude: x,longitude: y}]
	//$.DrawableMap.allPoints contains all points drawn on map
	//if you use convex hull then hullPoints array is populated with processed array
	//$.DrawableMap.hullPoints
});

```

## More
* [Documentation](https://github.com/n3wc/TiDrawableMap/wiki)
* [Changelog](https://github.com/n3wc/TiDrawableMap/wiki/Changelog)

## License

<pre>
Copyright 2014 Jesse Newcomer

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
</pre>
