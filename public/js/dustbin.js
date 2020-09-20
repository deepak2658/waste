const platform = new H.service.Platform({
    'apikey': hereCredits.JSKEY
})

const defaultLayers = platform.createDefaultLayers()

    //Config. Maps
      

//Maps code
navigator.geolocation.getCurrentPosition(pos=>{

  let myPosition = {lat: pos.coords.latitude ,lng: pos.coords.longitude }    
    
    const map = new H.Map(
      document.getElementById('mapContainer'),
      defaultLayers.vector.normal.map,
      {
      zoom: 13,
      center: myPosition
      }
    )

 
    //Adding Behaviours to Maps
    const ui = H.ui.UI.createDefault(map, defaultLayers)
    const mapEvents = new H.mapevents.MapEvents(map)
    const behavior = new H.mapevents.Behavior(mapEvents)  
})