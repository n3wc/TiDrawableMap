var useConvexHull = true;
$.btnClear.enabled = false;

function startDraw(){
	$.btnDraw.enabled = false;
	$.DrawableMap.startDraw({useConvexHull:useConvexHull,lineWidth:4,lineColor:"#0000ff",throttleTimer:75});
	$.lblRoute.text='';
}
function clearRoute(){
	$.DrawableMap.clearRoute();
	$.btnClear.enabled=false;
	$.lblRoute.text='';
}
function ConvexHull(){
	useConvexHull=!useConvexHull;
}
$.DrawableMap.addEventListener('drawEnd',function(e){
	$.btnDraw.enabled = true;
	$.btnClear.enabled=true;
	$.lblRoute.text=useConvexHull?JSON.stringify($.DrawableMap.hullPoints):JSON.stringify($.DrawableMap.allPoints);
});
$.index.addEventListener('open', function() {
    $.DrawableMap.setSizes();
    $.DrawableMap.TiDrawableMapView.setRegion({latitude:36.9167, longitude:-76.2,latitudeDelta:2.0, longitudeDelta:2.0});
});
$.index.open();
