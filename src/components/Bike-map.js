import React, { useState } from 'react';
import './Bike-map.css';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


const BikeMap = (props) => {

    const [info, setInfo] = useState({
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    })

    const mapStyles = {
        width: '100%',
        height: '100%',
        border: '1px solid black'
    };

    const onMarkerClick = (props, marker, e) => {
        setInfo({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }

    return (
        <>
            <Map
                google={props.google}
                zoom={10.8}
                style={mapStyles}
                initialCenter={
                    {
                        lat: 28.614800,
                        lng: 77.216721
                    }
                } 
            >
                <Marker
                    title={'Battery:90%'}
                    name={'Saket'}
                    position={{lat: 28.5221, lng: 77.2102}} 
                    icon={{
                        url: "images/pin.png",
                        
                    }}
                    onClick={onMarkerClick}
                />
                <Marker
                    title={'Battery:85%'}
                    name={'Vasant Vihar'}
                    position={{lat: 28.5603, lng: 77.1617}} 
                    icon={{
                        url: "images/pin.png",
                        
                    }}
                    onClick={onMarkerClick}
                />
                <Marker
                    title={'Battery:60%'}
                    name={'Punjabi Bagh'}
                    position={{lat: 28.672936, lng: 77.145972}} 
                    icon={{
                        url: "images/pin.png",
                        
                    }}
                    onClick={onMarkerClick}
                />
                <Marker
                    title={'Battery:100%'}
                    name={'Lajpat Nagar'}
                    position={{lat: 28.5649, lng: 77.2403}} 
                    icon={{
                        url: "images/pin.png",
                        
                    }}
                    onClick={onMarkerClick}
                />
                <Marker
                    title={'Battery:50%'}
                    name={'Janakpuri'}
                    position={{lat: 28.6219, lng: 77.0878}} 
                    icon={{
                        url: "images/pin.png",
                        
                    }}
                    onClick={onMarkerClick}
                />
                <Marker
                    title={'Battery:90%'}
                    name={'Pragati Maidan'}
                    position={{lat: 28.6126, lng: 77.2434}} 
                    icon={{
                        url: "images/pin.png",
                        
                    }}
                    onClick={onMarkerClick}
                />
                <InfoWindow
                    marker={info.activeMarker}
                    visible={info.showingInfoWindow}>
                        <div>
                        <h3>{info.selectedPlace.name}</h3>
                        <h3>{info.selectedPlace.title}</h3>
                        </div>
                </InfoWindow>
   
              

            </Map>    
        </>
    )
}


export default GoogleApiWrapper({
    apiKey: `${process.env.REACT_APP_MAP_API}`,
  })(BikeMap);
