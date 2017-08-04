function initMap() {
	var msk = {
		lat: 55.790356,
		lng: 37.529812
	};
	var sbp = {
		lat: 59.937063,
		lng: 30.313908
	};
	var mapMsk = new google.maps.Map(document.getElementById('msk-map'), {
		center: msk,
		zoom: 17,
		styles: [
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e9e9e9"
            },
					{
						"lightness": 17
            }
        ]
    },
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f5f5f5"
            },
					{
						"lightness": 20
            }
        ]
    },
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
            },
					{
						"lightness": 17
            }
        ]
    },
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#ffffff"
            },
					{
						"lightness": 29
            },
					{
						"weight": 0.2
            }
        ]
    },
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
            },
					{
						"lightness": 18
            }
        ]
    },
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
            },
					{
						"lightness": 16
            }
        ]
    },
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f5f5f5"
            },
					{
						"lightness": 21
            }
        ]
    },
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dedede"
            },
					{
						"lightness": 21
            }
        ]
    },
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "on"
            },
					{
						"color": "#ffffff"
            },
					{
						"lightness": 16
            }
        ]
    },
			{
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"saturation": 36
            },
					{
						"color": "#333333"
            },
					{
						"lightness": 40
            }
        ]
    },
			{
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
            }
        ]
    },
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f2f2f2"
            },
					{
						"lightness": 19
            }
        ]
    },
			{
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#fefefe"
            },
					{
						"lightness": 20
            }
        ]
    },
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#fefefe"
            },
					{
						"lightness": 17
            },
					{
						"weight": 1.2
            }
        ]
    }
]
	});
	var markerMsk = new google.maps.Marker({
		position: msk,
		map: mapMsk
	});

	var mapSpb = new google.maps.Map(document.getElementById('spb-map'), {
		center: spb,
		zoom: 17,
		styles: [
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e9e9e9"
            },
					{
						"lightness": 17
            }
        ]
    },
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f5f5f5"
            },
					{
						"lightness": 20
            }
        ]
    },
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
            },
					{
						"lightness": 17
            }
        ]
    },
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#ffffff"
            },
					{
						"lightness": 29
            },
					{
						"weight": 0.2
            }
        ]
    },
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
            },
					{
						"lightness": 18
            }
        ]
    },
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
            },
					{
						"lightness": 16
            }
        ]
    },
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f5f5f5"
            },
					{
						"lightness": 21
            }
        ]
    },
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dedede"
            },
					{
						"lightness": 21
            }
        ]
    },
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "on"
            },
					{
						"color": "#ffffff"
            },
					{
						"lightness": 16
            }
        ]
    },
			{
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"saturation": 36
            },
					{
						"color": "#333333"
            },
					{
						"lightness": 40
            }
        ]
    },
			{
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
            }
        ]
    },
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f2f2f2"
            },
					{
						"lightness": 19
            }
        ]
    },
			{
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#fefefe"
            },
					{
						"lightness": 20
            }
        ]
    },
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#fefefe"
            },
					{
						"lightness": 17
            },
					{
						"weight": 1.2
            }
        ]
    }
]
	});
	var markerSpb = new google.maps.Marker({
		position: spb,
		map: mapSpb
	});
}