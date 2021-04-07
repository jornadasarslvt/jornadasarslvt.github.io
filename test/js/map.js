$(function () {

	// ------------------------------------------------------- //
	//  Styled Leaflet Map
	// ------------------------------------------------------ //

	var mapId = 'map',
		mapCenter = [39.0831252,-9.260936],
		mapMarker = true;

	if ($('#' + mapId).length > 0) {

		var icon = L.icon({
			iconUrl: 'img/marker.png',
			iconSize: [25, 37.5],
		});

		var dragging = false,
			tap = false;

		if ($(window).width() > 700) {
			dragging = true;
			tap = true;
		}

		var map = L.map(mapId, {
			center: mapCenter,
			zoom: 18,
			dragging: dragging,
			tap: tap,
			scrollWheelZoom: false
		});

		var MapTile = L.tileLayer('https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=c0207c24e98b4b2484a61ae2652b9946', {
			attribution: '<small>Map tiles by <a href="https://www.thunderforest.com/">Thunderforest</a>&mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors</small>',
			subdomains: 'abcd',
			minZoom: 0,
			maxZoom: 20,
			ext: 'png'
		});
      
		MapTile.addTo(map);
      
		map.once('focus', function () {
			map.scrollWheelZoom.enable();
		});

		if (mapMarker) {
			var marker = L.marker(mapCenter, {
				icon: icon,
			}).addTo(map);

		}
	}

});