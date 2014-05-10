//http://marblemice.blogspot.com/2012/10/simple-convex-hull-generation-in.html
function convex_hull(args){return this;}
convex_hull.prototype.convex_hull = function convex_hull(pnts){
    var out = [];
    var startIdx = findLeftMostLowestPoint(pnts); 
    var hull = startIdx;
    var npts = pnts.length;
    var endpt = 0; 
    
    do { 
		out.push(pnts[hull]); 
		endpt = 0; 
		for (var j = 1; j < npts; ++j) {
		    if (hull == endpt || isToLeft(pnts[hull], pnts[endpt], pnts[j]))
			endpt = j; 
		}
		hull = endpt; 
    } while (endpt != startIdx); 

    out.push(pnts[endpt]); // close the poly
    return out;
};

function findLeftMostLowestPoint(pnts){
  var idx = 0;
  var npts = pnts.length;
  for (var i = 1; i < npts; ++i) {
    var a = pnts[i];
    var b = pnts[idx];
    if(a.longitude < b.longitude || (a.longitude == b.longitude && a.latitude < b.latitude))
      idx = i;
  }
  return idx;
}

function isToLeft(a, b, c){  
    var u1 = b.longitude - a.longitude; 
    var v1 = b.latitude - a.latitude; 
    var u2 = c.longitude - a.longitude; 
    var v2 = c.latitude - a.latitude; 
    return u1 * v2 - v1 * u2 < 0; 
}

module.exports = convex_hull;