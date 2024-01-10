

        // Initialize the map
        var map = L.map('map').setView([51.23088912977668, 4.414297097705313], 13);

        // Add a tile layer (background map)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add a marker to the map
        var marker = L.marker([51.23088912977668, 4.414297097705313]).addTo(map);

        marker.bindPopup("AP Gebouw Noorderlaan").openPopup();

      
      