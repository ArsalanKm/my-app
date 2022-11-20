
// import React from "react";

// import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

// let coords = [];

// class Map extends React.Component {
//   state = {
//     center: { lat: -33.867, lng: 151.195 },
//     coordsResult: []
//   };

//   onMapLoad = map => {
//     let request = {
//       query: "Museum of Contemporary Art Australia",
//       fields: ["name", "geometry"]
//     };

//     let service = new google.maps.places.PlacesService(map);

//     service.findPlaceFromQuery(request, (results, status) => {
//       if (status === google.maps.places.PlacesServiceStatus.OK) {
//         if (results && results.length > 0) {

//           for (var i = 0; i < results.length; i++) {
//             coords.push(results[i]);
//           }
//         }

//         this.setState({
//           center: results[0].geometry.location,
//           coordsResult: coords
//         });
//       }
//     });
//   };

//   render() {
//     return (
//       <div>
//         <GoogleMap
//           center={this.state.center}
//           zoom={13}
//           onLoad={map => this.onMapLoad(map)}
//           mapContainerStyle={{ height: "400px", width: "800px" }}
//         >
//           {this.state.coordsResult !== [] &&
//             this.state.coordsResult.map(function (results, i) {
//               return (
//                 <Marker key={i} position={results.geometry.location}>
//                   <InfoWindow
//                     options={{ maxWidth: 300 }}>

//                     <span>{results.name}</span>

//                   </InfoWindow>
//                 </Marker>
//               );
//             })}
//         </GoogleMap>
//       </div>
//     );
//   }
// }

// export default Map;

import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}