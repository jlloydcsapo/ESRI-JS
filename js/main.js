function loadMap(){
    require(["esri/config",    
            "esri/Map",
            "esri/views/MapView",
            "esri/widgets/BasemapGallery",
            "esri/widgets/Expand",
            "esri/widgets/Locate",
            "esri/widgets/Search"], 
            
    function(esriConfig, Map, MapView, BasemapGallery, Expand, Locate, Search) {   
        
        esriConfig.apiKey = "AAPKdd7c255c653b4b2789e0123c1107c197dv1Ropz0dQZOy89fge9jPPo3WaNTVC2kYIVE-3jKjxEPlZIYYXI7-zrRXkKGPB-z"

        const map = new Map({
            basemap: "arcgis-imagery-standard" //basemap layer service   
        });

        const view = new MapView({
            map: map,
            center: [-83.366961,43.908978],
            zoom: 17,
            container:"viewDiv"
        });

        //add basemap gallery
        const basemapGallery = new BasemapGallery({
            view: view,
        });

        const bgExpand = new Expand({
            view,
            content: basemapGallery,
            expandIcon: "basemap"
          });

        view.ui.add(bgExpand, "top-right");

        //add locate button
        const locateButton = new Locate({
            view: view,
        });

        view.ui.add(locateButton, "top-left");

        //add search
        const searchTool = new Search({
            view: view,
        });

        view.ui.add(searchTool, {
            position: "top-left",
            index: 0
        });
    }); 
};

document.addEventListener('DOMContentLoaded', loadMap);