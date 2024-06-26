
require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Directions",
    "esri/layers/RouteLayer",
    "esri/widgets/Expand",
    "esri/widgets/Search",
    "esri/widgets/Locate"
], function(esriConfig, Map, MapView, Directions, RouteLayer, Expand, Search, Locate) {
    
    // Insert the API Key here (inside the double quotes) to use it for ArcgGIS JS API Routing services:
    esriConfig.apiKey = "AAPKe742045c227d4d04a82b46d3a87b1c29jPAbYQYKE17tQDI6NMrDtCsbaalq0203i7XCxVLvoxpDAHB5D_90u5AYozeN1wLB";

    // Create a RouteLayer, required for Directions widget:
    const routeLayer = new RouteLayer();

    // Create a basemap and add the RouteLayer to it:
    const map = new Map({
        basemap: "arcgis-navigation",
        layers: [routeLayer]
    });

    // Create a MapView:
    const view = new MapView({
        center: [-40, 20],
        zoom: 2,
        container: "viewDiv",
        map: map
    });

    // Add the RouteLayer to the Directions widget:
    let directionsWidget = new Directions({
        layer: routeLayer,
        
        view
        
    });
    

    // Create a Search Widget to use it for searching for places:
    const searchWidget = new Search({
        view: view
       
    })

    // Create an Expand Widget to toggle the Directions Widget on and off:
     const expandDirections  = new Expand({
        view: view,
        content: directionsWidget
    });

    // Add the Expand Directions widget to the bottom right of the MapView:
    view.ui.add(expandDirections, "bottom-right");


    // Create an Expand Widget to toggle the Search Widget on and off:
    const expandSearch = new Expand({
        view: view,
        content: searchWidget
        
    });

    // Add the Expand Search widget to the top right of the MapView:
    view.ui.add(expandSearch, "top-right");

    // Create a Locate button to get the Geolocation of the user:
    const locate = new Locate({
        view: view
    });
    // Add the Locate button to the top left of the MapView:
    view.ui.add(locate, "top-left");
});
