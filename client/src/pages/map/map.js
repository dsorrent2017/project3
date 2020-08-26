import React from 'react';
import {GoogleMap, withScriptsjs, withGoogleMap} from "google-map-react"



const WrappedMap = withScriptjs(withGooglemap(Map));

function Map (){
return(
<GoogleMap defaultZoom={10}
defaultcenter={{lat:26.714439, lng:-80.054947}}
/>
)
}
export default function Map() {
return(
<div style={{width: "100vw", height: "100vh"}}>

<WrappedMap 
googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key+"}
loadingElement={<div style={{height:"100%"}}/>}
containerElement={<div style={{height:"100%"}}/>}
mapElement={<div style={{height:"100%"}}/>}
/>
</div>
);

}


