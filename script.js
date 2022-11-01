function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center:  { lat: 33.776534740607495, lng: -84.37404106911418 },
      mapId: "4897b758f7c8dca1",
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
    });
    const markers =  [
        [
            "Tiny Doors ATL",
            33.79581658948984, 
            -84.39770027344157,
            "../assets/Retro-Star.png",
            40,
            40
        ],
        [
            "Georgia Aquarium & The World of Coca-Cola",
            33.76378782758099, 
            -84.39405837376731,
            "../assets/greenpipe.png",
            40,
            40
        ],
        [
            "Zoo Atlanta",
            33.73423226607439, 
            -84.37169258848719,
            "../assets/Retro-Mushroom.png",
            30,
            30
        ],
        [
            "Atlanta Botanical Garden",
            33.789420194112004, 
            -84.37423418778195,
            "../assets/Retro-Flower-Fire.png",
            50,
            50
        ],
        [
            "Ponce City Market",
            33.79008101374229, 
            -84.3856592903405,
            "../assets/carnivorous-plant.png", 
            80,
            80
        ],
        [
            "SkyView Atlanta",
            33.75909833641952, 
            -84.3916491866323,
            "../assets/Shyguy.png", 
            50,
            50
        ],
        [
            "Trap Music Museum",
            33.77599514524924, 
            -84.4081715946056,
            "../assets/Shyguy-Yellow.png", 
            60,
            60
        ],
        [
            "Illuminarium Atlanta",
            33.77256068138115, 
            -84.36044975272964,
            "../assets/Shyguy-Green.png", 
            60,
            60
        ],
        [
            "Big Escape Rooms",
            33.76200865488439, 
            -84.37276647959764,
            "../assets/Yoshis-Egg.png", 
            50,
            50
        ],
        [
            "Fernbank Museum | 3D Theater | Forest",
            33.77467382647076, 
            -84.32782683815044,
            "../assets/block.png", 
            50,
            50
        ],
        [
            "Krog Street Tunnel",
            33.75671033678436, 
            -84.36405466483538,
            "../assets/Retro-Coin.png", 
            40,
            40
        ],
        
    ];

    for(let i = 0; i < markers.length; i++) {
        const currMarker = markers[i];

        const marker = new google.maps.Marker({
            position:  { lat: currMarker[1], lng: currMarker[2]},
            map,
            title: currMarker[0],
            icon: {
              url: currMarker[3],
              scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
            },
            Animation: google.maps.Animation.DROP,
          });
      
          const infoWindow = new google.maps.InfoWindow({
              content: currMarker[0],
          });
          marker.addListener("click", () => {
              infoWindow.open(map, marker);
          });
    }
  }
  
  window.initMap = initMap;
  