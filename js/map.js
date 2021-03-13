$(function () {

	// ------------------------------------------------------- //
	//  Styled Leaflet Map
	// ------------------------------------------------------ //

	var mapId = 'map',
		mapCenter = [39.07726,-9.259394],
		mapMarker = true;

	if ($('#' + mapId).length > 0) {

		var icon = L.icon({
			iconUrl: 'img/marker.png',
			iconSize: [25, 37.5],
			popupAnchor: [0, -18],
			tooltipAnchor: [0, 19]
		});

		var dragging = false,
			tap = false;

		if ($(window).width() > 700) {
			dragging = true;
			tap = true;
		}

		var map = L.map(mapId, {
			center: [39.085,-9.259394],
			zoom: 14,
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
				icon: icon
			}).addTo(map);

			marker.bindPopup("<div class='row'><div class='col'><img src='/img/local.jpg' class='img-fluid mh-75 rounded' style='object-fit:cover'></div></div><div class='row'><div class='col pt-3'><h3>Centro Social e Paroquial de Torres Vedras</h3></div></div><div class='row'><div class='col py-0'><a role='button' target='_blank' href='https://goo.gl/maps/mpmBb3NhLDdv8sVb9'><button class='shadow-sm btn btn-outline-primary btn-sm d-inline-block text-uppercase font-weight-bold h6'><span class='icon' style='color:inherit;'><i class='fas fa-map-marker-alt align-middle'></i></span> Ver coordenadas</button></a></div></div>", {
				minwidth: 200,
				maxWidth: 400,
				className: 'map-custom-popup'
			})

		}
	}

});