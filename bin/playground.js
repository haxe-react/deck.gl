(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
var JsxStaticInit_$_$ = function() { };
JsxStaticInit_$_$.__name__ = true;
Math.__name__ = true;
var Playground = function() { };
Playground.__name__ = true;
Playground.main = function() {
};
var geojson_Feature = {};
geojson_Feature._new = function(geometry,properties,id) {
	var this1 = { type : "Feature", geometry : geometry, properties : properties};
	if(id != null) {
		this1.id = id;
	}
	return this1;
};
geojson_Feature.get = function(this1) {
	return geojson_GeometryCollection.get(this1.geometry);
};
var geojson_FeatureCollection = {};
geojson_FeatureCollection._new = function(features) {
	var this1 = { type : "FeatureCollection", features : features};
	return this1;
};
geojson_FeatureCollection.iterator = function(this1) {
	return new haxe_iterators_ArrayIterator(this1.features);
};
var geojson_GeometryCollection = {};
geojson_GeometryCollection.get = function(geometry) {
	switch(geometry.type) {
	case "LineString":
		return geojson_GeometryKind.LineString(geometry);
	case "MultiLineString":
		return geojson_GeometryKind.MultiLineString(geometry);
	case "MultiPoint":
		return geojson_GeometryKind.MultiPoint(geometry);
	case "MultiPolygon":
		return geojson_GeometryKind.MultiPolygon(geometry);
	case "Point":
		return geojson_GeometryKind.Point(geometry);
	case "Polygon":
		return geojson_GeometryKind.Polygon(geometry);
	}
};
geojson_GeometryCollection._new = function(geometries) {
	var this1 = { type : "GeometryCollection", geometries : geometries};
	return this1;
};
geojson_GeometryCollection.iterator = function(this1) {
	return new haxe_iterators_ArrayIterator(this1.geometries);
};
geojson_GeometryCollection.get_geometries = function(this1) {
	return this1.geometries;
};
geojson_GeometryCollection.set_geometries = function(this1,v) {
	return this1.geometries = v;
};
geojson_GeometryCollection.get_type = function(this1) {
	return this1.type;
};
var geojson_GeometryKind = $hxEnums["geojson.GeometryKind"] = { __ename__:true,__constructs__:null
	,Point: ($_=function(geometry) { return {_hx_index:0,geometry:geometry,__enum__:"geojson.GeometryKind",toString:$estr}; },$_._hx_name="Point",$_.__params__ = ["geometry"],$_)
	,LineString: ($_=function(geometry) { return {_hx_index:1,geometry:geometry,__enum__:"geojson.GeometryKind",toString:$estr}; },$_._hx_name="LineString",$_.__params__ = ["geometry"],$_)
	,Polygon: ($_=function(geometry) { return {_hx_index:2,geometry:geometry,__enum__:"geojson.GeometryKind",toString:$estr}; },$_._hx_name="Polygon",$_.__params__ = ["geometry"],$_)
	,MultiPoint: ($_=function(geometry) { return {_hx_index:3,geometry:geometry,__enum__:"geojson.GeometryKind",toString:$estr}; },$_._hx_name="MultiPoint",$_.__params__ = ["geometry"],$_)
	,MultiLineString: ($_=function(geometry) { return {_hx_index:4,geometry:geometry,__enum__:"geojson.GeometryKind",toString:$estr}; },$_._hx_name="MultiLineString",$_.__params__ = ["geometry"],$_)
	,MultiPolygon: ($_=function(geometry) { return {_hx_index:5,geometry:geometry,__enum__:"geojson.GeometryKind",toString:$estr}; },$_._hx_name="MultiPolygon",$_.__params__ = ["geometry"],$_)
};
geojson_GeometryKind.__constructs__ = [geojson_GeometryKind.Point,geojson_GeometryKind.LineString,geojson_GeometryKind.Polygon,geojson_GeometryKind.MultiPoint,geojson_GeometryKind.MultiLineString,geojson_GeometryKind.MultiPolygon];
var geojson_LineString = {};
geojson_LineString._new = function(line) {
	var this1 = { type : "LineString", coordinates : line};
	return this1;
};
geojson_LineString.toLine = function(this1) {
	return this1.coordinates;
};
geojson_LineString.fromLine = function(v) {
	var this1 = { type : "LineString", coordinates : v};
	return this1;
};
geojson_LineString.get_length = function(this1) {
	var total = 0.;
	var _g = 0;
	var _g1 = this1.coordinates.length - 1;
	while(_g < _g1) {
		var i = _g++;
		total += geojson_util_Coordinates.distanceTo(this1.coordinates[i],this1.coordinates[i + 1],1);
	}
	return total;
};
geojson_LineString.get_points = function(this1) {
	return this1.coordinates;
};
geojson_LineString.set_points = function(this1,v) {
	return this1.coordinates = v;
};
geojson_LineString.get_type = function(this1) {
	return this1.type;
};
geojson_LineString.toGeoJson = function(this1) {
	return this1;
};
geojson_LineString.is = function(v) {
	if(v.type != "LineString") {
		return false;
	}
	if(!((v.coordinates) instanceof Array)) {
		return false;
	}
	var _g = 0;
	var _g1 = v.coordinates;
	while(_g < _g1.length) {
		var v = _g1[_g];
		++_g;
		if(!geojson_util_Coordinates.is(v)) {
			return false;
		}
	}
	return true;
};
var geojson_MultiLineString = {};
geojson_MultiLineString._new = function(lines) {
	var this1 = { type : "MultiLineString", coordinates : lines};
	return this1;
};
geojson_MultiLineString.fromLineStrings = function(lines) {
	var _g = [];
	var _g1 = 0;
	while(_g1 < lines.length) {
		var line = lines[_g1];
		++_g1;
		_g.push(line.coordinates);
	}
	var this1 = { type : "MultiLineString", coordinates : _g};
	return this1;
};
geojson_MultiLineString.get_lines = function(this1) {
	return this1.coordinates;
};
geojson_MultiLineString.set_lines = function(this1,v) {
	return this1.coordinates = v;
};
geojson_MultiLineString.get_type = function(this1) {
	return this1.type;
};
geojson_MultiLineString.toGeoJson = function(this1) {
	return this1;
};
geojson_MultiLineString.is = function(v) {
	if(v.type != "MultiLineString") {
		return false;
	}
	if(!((v.coordinates) instanceof Array)) {
		return false;
	}
	var _g = 0;
	var _g1 = v.coordinates;
	while(_g < _g1.length) {
		var v = _g1[_g];
		++_g;
		if(!geojson_util_Line.is(v)) {
			return false;
		}
	}
	return true;
};
var geojson_MultiPoint = {};
geojson_MultiPoint._new = function(points) {
	var this1 = { type : "MultiPoint", coordinates : points};
	return this1;
};
geojson_MultiPoint.fromPoints = function(points) {
	var _g = [];
	var _g1 = 0;
	while(_g1 < points.length) {
		var point = points[_g1];
		++_g1;
		_g.push(point.coordinates);
	}
	var this1 = { type : "MultiPoint", coordinates : _g};
	return this1;
};
geojson_MultiPoint.get_points = function(this1) {
	return this1.coordinates;
};
geojson_MultiPoint.set_points = function(this1,v) {
	return this1.coordinates = v;
};
geojson_MultiPoint.get_type = function(this1) {
	return this1.type;
};
geojson_MultiPoint.toGeoJson = function(this1) {
	return this1;
};
geojson_MultiPoint.is = function(v) {
	if(v.type != "MultiPoint") {
		return false;
	}
	if(!((v.coordinates) instanceof Array)) {
		return false;
	}
	var _g = 0;
	var _g1 = v.coordinates;
	while(_g < _g1.length) {
		var v = _g1[_g];
		++_g;
		if(!geojson_util_Coordinates.is(v)) {
			return false;
		}
	}
	return true;
};
var geojson_MultiPolygon = {};
geojson_MultiPolygon._new = function(polygons) {
	var this1 = { type : "MultiPolygon", coordinates : polygons};
	return this1;
};
geojson_MultiPolygon.fromPolygons = function(polygons) {
	var _g = [];
	var _g1 = 0;
	while(_g1 < polygons.length) {
		var polygon = polygons[_g1];
		++_g1;
		_g.push(polygon.coordinates);
	}
	var this1 = { type : "MultiPolygon", coordinates : _g};
	return this1;
};
geojson_MultiPolygon.toPolygons = function(this1) {
	var _g = [];
	var _g1 = 0;
	var _g2 = this1.coordinates;
	while(_g1 < _g2.length) {
		var lines = _g2[_g1];
		++_g1;
		var this1 = { type : "Polygon", coordinates : lines};
		_g.push(this1);
	}
	return _g;
};
geojson_MultiPolygon.get_polygons = function(this1) {
	return this1.coordinates;
};
geojson_MultiPolygon.set_polygons = function(this1,v) {
	return this1.coordinates = v;
};
geojson_MultiPolygon.get_type = function(this1) {
	return this1.type;
};
geojson_MultiPolygon.toGeoJson = function(this1) {
	return this1;
};
geojson_MultiPolygon.concat = function(this1,others) {
	var this2 = this1.coordinates;
	var _g = [];
	var _g1 = 0;
	while(_g1 < others.length) {
		var polygon = others[_g1];
		++_g1;
		_g.push(polygon.coordinates);
	}
	var this1 = { type : "MultiPolygon", coordinates : this2.concat(_g)};
	return this1;
};
geojson_MultiPolygon.containsPoint = function(this1,point) {
	var _g = 0;
	var _g1 = geojson_MultiPolygon.toPolygons(this1);
	while(_g < _g1.length) {
		var polygon = _g1[_g];
		++_g;
		if(geojson_Polygon.containsPoint(polygon,point)) {
			return true;
		}
	}
	return false;
};
geojson_MultiPolygon.is = function(v) {
	if(v.type == "MultiPolygon") {
		return geojson_util_Liness.is(v.coordinates);
	} else {
		return false;
	}
};
var geojson_Point = {};
geojson_Point._new = function(latitude,longitude) {
	var this1 = [longitude,latitude];
	var this2 = { type : "Point", coordinates : this1};
	return this2;
};
geojson_Point.toCoordinates = function(this1) {
	return this1.coordinates;
};
geojson_Point.fromCoordinates = function(v) {
	return { type : "Point", coordinates : v};
};
geojson_Point.createFromCoordinates = function(v) {
	return { type : "Point", coordinates : v};
};
geojson_Point.get_latitude = function(this1) {
	return this1.coordinates[1];
};
geojson_Point.get_longitude = function(this1) {
	return this1.coordinates[0];
};
geojson_Point.set_latitude = function(this1,v) {
	return this1.coordinates[1] = v;
};
geojson_Point.set_longitude = function(this1,v) {
	return this1.coordinates[0] = v;
};
geojson_Point.get_type = function(this1) {
	return this1.type;
};
geojson_Point.toGeoJson = function(this1) {
	return this1;
};
geojson_Point.eq = function(this1,other) {
	if(this1.coordinates[1] == other.coordinates[1]) {
		return this1.coordinates[0] == other.coordinates[0];
	} else {
		return false;
	}
};
geojson_Point.distanceTo = function(this1,that,radius) {
	return geojson_util_Coordinates.distanceTo(this1.coordinates,that.coordinates,radius);
};
geojson_Point.destination = function(this1,distance,bearing) {
	var this2 = this1.coordinates;
	var lat1 = this2[1] * 0.0174532925199444439;
	var long1 = this2[0] * 0.0174532925199444439;
	var bearing1 = bearing * 0.0174532925199444439;
	var lat2 = Math.asin(Math.sin(lat1) * Math.cos(distance) + Math.cos(lat1) * Math.sin(distance) * Math.cos(bearing1));
	var long2 = long1 + Math.atan2(Math.sin(bearing1) * Math.sin(distance) * Math.cos(lat1),Math.cos(distance) - Math.sin(lat1) * Math.sin(lat2));
	var this1 = [long2 * 57.2957795130785499,lat2 * 57.2957795130785499];
	return { type : "Point", coordinates : this1};
};
geojson_Point.initialBearingTo = function(this1,that) {
	return geojson_util_Coordinates.initialBearingTo(this1.coordinates,that.coordinates);
};
geojson_Point.interpolate = function(points) {
	var _g = [];
	var _g1 = 0;
	while(_g1 < points.length) {
		var point = points[_g1];
		++_g1;
		_g.push({ coordinates : point.point.coordinates, weight : point.weight});
	}
	return { type : "Point", coordinates : geojson_util_Coordinates.interpolate(_g)};
};
geojson_Point.average = function(points) {
	var _g = [];
	var _g1 = 0;
	while(_g1 < points.length) {
		var point = points[_g1];
		++_g1;
		_g.push({ coordinates : point.coordinates, weight : 1});
	}
	return { type : "Point", coordinates : geojson_util_Coordinates.interpolate(_g)};
};
geojson_Point.is = function(v) {
	if(v.type == "Point") {
		return geojson_util_Coordinates.is(v.coordinates);
	} else {
		return false;
	}
};
var geojson_Polygon = {};
geojson_Polygon._new = function(lines) {
	var this1 = { type : "Polygon", coordinates : lines};
	return this1;
};
geojson_Polygon.regular = function(center,sides,radius,bearingOffset) {
	if(bearingOffset == null) {
		bearingOffset = 0;
	}
	var lat = center[1] * 0.0174532925199444439;
	var long = center[0] * 0.0174532925199444439;
	var sinLat = Math.sin(lat);
	var cosLat = Math.cos(lat);
	var sinRadius = Math.sin(radius);
	var cosRadius = Math.cos(radius);
	bearingOffset *= 0.0174532925199444439;
	var _g = [];
	var _g1 = 0;
	var _g2 = sides;
	while(_g1 < _g2) {
		var n = _g1++;
		var bearing = 6.28318530718 / sides * n + bearingOffset;
		var this1 = [(long + Math.atan2(Math.sin(bearing) * sinRadius * cosLat,cosRadius - sinLat * sinLat)) * 57.2957795130785499,Math.asin(sinLat * cosRadius + cosLat * sinRadius * Math.cos(bearing)) * 57.2957795130785499];
		_g.push(this1);
	}
	var points = _g;
	points.push(points[0]);
	var this1 = { type : "Polygon", coordinates : [points]};
	return this1;
};
geojson_Polygon.containsPoint = function(this1,point) {
	var _contains = function(point,line) {
		var n = line.length - 1;
		var result = false;
		var lat1 = line[0][1];
		var long1 = line[0][0];
		var longints = -Infinity;
		var _g = 0;
		var _g1 = n + 1;
		while(_g < _g1) {
			var i = _g++;
			var current = line[i % n];
			var lat2 = current[1];
			var long2 = current[0];
			if(point[1] > Math.min(lat1,lat2)) {
				if(point[1] <= Math.max(lat1,lat2)) {
					if(point[0] <= Math.max(long1,long2)) {
						if(lat1 != lat2) {
							longints = (point[1] - lat1) * (long2 - long1) / (lat2 - lat1) + long1;
						}
						if(long1 == long2 || point[0] <= longints) {
							result = !result;
						}
					}
				}
			}
			lat1 = lat2;
			long1 = long2;
		}
		return result;
	};
	if(!_contains(point,this1.coordinates[0])) {
		return false;
	}
	var _g = 1;
	var _g1 = this1.coordinates.length;
	while(_g < _g1) {
		var i = _g++;
		if(_contains(point,this1.coordinates[i])) {
			return false;
		}
	}
	return true;
};
geojson_Polygon.get_lines = function(this1) {
	return this1.coordinates;
};
geojson_Polygon.set_lines = function(this1,v) {
	return this1.coordinates = v;
};
geojson_Polygon.get_type = function(this1) {
	return this1.type;
};
geojson_Polygon.toGeoJson = function(this1) {
	return this1;
};
geojson_Polygon.is = function(v) {
	if(v.type != "Polygon") {
		return false;
	}
	if(!((v.coordinates) instanceof Array)) {
		return false;
	}
	var _g = 0;
	var _g1 = v.coordinates;
	while(_g < _g1.length) {
		var v = _g1[_g];
		++_g;
		if(!geojson_util_Line.is(v)) {
			return false;
		}
	}
	return true;
};
var geojson_util_Constants = function() { };
geojson_util_Constants.__name__ = true;
var geojson_util_Coordinates = {};
geojson_util_Coordinates._new = function(latitude,longitude) {
	var this1 = [longitude,latitude];
	return this1;
};
geojson_util_Coordinates.get_latitude = function(this1) {
	return this1[1];
};
geojson_util_Coordinates.get_longitude = function(this1) {
	return this1[0];
};
geojson_util_Coordinates.set_latitude = function(this1,v) {
	return this1[1] = v;
};
geojson_util_Coordinates.set_longitude = function(this1,v) {
	return this1[0] = v;
};
geojson_util_Coordinates.distanceTo = function(this1,that,radius) {
	var lat1 = this1[1] * 0.0174532925199444439;
	var lat2 = that[1] * 0.0174532925199444439;
	var long1 = this1[0] * 0.0174532925199444439;
	var long2 = that[0] * 0.0174532925199444439;
	var sdlat = Math.sin((lat1 - lat2) / 2);
	var sdlong = Math.sin((long1 - long2) / 2);
	var a = sdlat * sdlat + Math.cos(lat1) * Math.cos(lat2) * sdlong * sdlong;
	return 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1 - a)) * radius;
};
geojson_util_Coordinates.destination = function(this1,distance,bearing) {
	var lat1 = this1[1] * 0.0174532925199444439;
	var long1 = this1[0] * 0.0174532925199444439;
	var bearing1 = bearing * 0.0174532925199444439;
	var lat2 = Math.asin(Math.sin(lat1) * Math.cos(distance) + Math.cos(lat1) * Math.sin(distance) * Math.cos(bearing1));
	var long2 = long1 + Math.atan2(Math.sin(bearing1) * Math.sin(distance) * Math.cos(lat1),Math.cos(distance) - Math.sin(lat1) * Math.sin(lat2));
	var this1 = [long2 * 57.2957795130785499,lat2 * 57.2957795130785499];
	return this1;
};
geojson_util_Coordinates.initialBearingTo = function(this1,that) {
	var lat1 = this1[1] * 0.0174532925199444439;
	var lat2 = that[1] * 0.0174532925199444439;
	var long1 = this1[0] * 0.0174532925199444439;
	var long2 = that[0] * 0.0174532925199444439;
	var y = Math.sin(long2 - long1) * Math.cos(lat2);
	var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(long2 - long1);
	return Math.atan2(y,x) * 57.2957795130785499;
};
geojson_util_Coordinates.interpolate = function(points) {
	var lat = 0.;
	var long = 0.;
	var sum = 0.;
	var _g = 0;
	while(_g < points.length) {
		var point = points[_g];
		++_g;
		lat += point.coordinates[1] * point.weight;
		long += point.coordinates[0] * point.weight;
		sum += point.weight;
	}
	var this1 = [long / sum,lat / sum];
	return this1;
};
geojson_util_Coordinates.average = function(coordinates) {
	var _g = [];
	var _g1 = 0;
	while(_g1 < coordinates.length) {
		var c = coordinates[_g1];
		++_g1;
		_g.push({ coordinates : c, weight : 1});
	}
	return geojson_util_Coordinates.interpolate(_g);
};
geojson_util_Coordinates.is = function(v) {
	if(((v) instanceof Array) && v.length == 2 && typeof(v[0]) == "number") {
		return typeof(v[1]) == "number";
	} else {
		return false;
	}
};
var geojson_util_Line = {};
geojson_util_Line._new = function(points) {
	var this1 = points;
	return this1;
};
geojson_util_Line.get_points = function(this1) {
	return this1;
};
geojson_util_Line.set_points = function(this1,v) {
	this1 = v;
	return this1;
};
geojson_util_Line.is = function(v) {
	if(!((v) instanceof Array)) {
		return false;
	}
	if(v.length == 0) {
		return false;
	}
	var _g = 0;
	var _g1 = v;
	while(_g < _g1.length) {
		var v = _g1[_g];
		++_g;
		if(!geojson_util_Coordinates.is(v)) {
			return false;
		}
	}
	return true;
};
var geojson_util_Lines = {};
geojson_util_Lines._new = function(lines) {
	var this1 = lines;
	return this1;
};
geojson_util_Lines.get_lines = function(this1) {
	return this1;
};
geojson_util_Lines.set_lines = function(this1,v) {
	this1 = v;
	return this1;
};
geojson_util_Lines.is = function(v) {
	if(!((v) instanceof Array)) {
		return false;
	}
	if(v.length == 0) {
		return false;
	}
	var _g = 0;
	var _g1 = v;
	while(_g < _g1.length) {
		var v = _g1[_g];
		++_g;
		if(!geojson_util_Line.is(v)) {
			return false;
		}
	}
	return true;
};
var geojson_util_Liness = {};
geojson_util_Liness.fromCoordinates = function(v) {
	return v;
};
geojson_util_Liness._new = function(lines) {
	var this1 = lines;
	return this1;
};
geojson_util_Liness.get_lines = function(this1) {
	return this1;
};
geojson_util_Liness.set_lines = function(this1,v) {
	this1 = v;
	return this1;
};
geojson_util_Liness.toPolygonArray = function(this1) {
	var _g = [];
	var _g1 = 0;
	while(_g1 < this1.length) {
		var lines = this1[_g1];
		++_g1;
		var this2 = { type : "Polygon", coordinates : lines};
		_g.push(this2);
	}
	return _g;
};
geojson_util_Liness.is = function(v) {
	if(!((v) instanceof Array)) {
		return false;
	}
	if(v.length == 0) {
		return false;
	}
	var _g = 0;
	var _g1 = v;
	while(_g < _g1.length) {
		var v = _g1[_g];
		++_g;
		if(!geojson_util_Lines.is(v)) {
			return false;
		}
	}
	return true;
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var react_ReactComponent = function() { };
react_ReactComponent.__name__ = true;
var react_ReactContext = {};
react_ReactContext.toReactType = function(this1) {
	return this1;
};
var react_ReactRef = {};
react_ReactRef.get_current = function(this1) {
	return this1.current;
};
var react_ReactType = {};
react_ReactType.fromString = function(s) {
	return s;
};
react_ReactType.fromFunction = function(f) {
	return f;
};
react_ReactType.fromFunctionWithProps = function(f) {
	return f;
};
react_ReactType.fromComp = function(cls) {
	if(cls.__jsxStatic != null) {
		return cls.__jsxStatic;
	}
	return cls;
};
var react_ReactTypeOf = {};
react_ReactTypeOf._new = function(node) {
	var this1 = node;
	return this1;
};
react_ReactTypeOf.fromFunctionWithProps = function(f) {
	var this1 = react_ReactType.fromFunctionWithProps(f);
	return this1;
};
react_ReactTypeOf.fromComp = function(cls) {
	var this1 = react_ReactType.fromComp(cls);
	return this1;
};
react_ReactTypeOf.fromFunctionWithoutProps = function(f) {
	var this1 = react_ReactType.fromFunction(f);
	return this1;
};
react_ReactTypeOf.fromCompWithoutProps = function(cls) {
	var this1 = react_ReactType.fromComp(cls);
	return this1;
};
String.__name__ = true;
Array.__name__ = true;
js_Boot.__toStr = ({ }).toString;
var $$tre = (typeof Symbol === "function" && Symbol.for && Symbol.for("react.element")) || 0xeac7;
geojson_LineString.TO_RADIANS = 0.0174532925199444439;
geojson_LineString.TO_DEGREES = 57.2957795130785499;
geojson_util_Constants.TO_RADIANS = 0.0174532925199444439;
geojson_util_Constants.TO_DEGREES = 57.2957795130785499;
Playground.main();
})({});
