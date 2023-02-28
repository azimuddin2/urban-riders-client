import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import marker from '../../assets/icons/marker-icon.png';


const Map = () => {

    const customIcon = new Icon({
        iconUrl: marker,
        iconSize: [30, 30],
    })

    return (
        <div>
            <MapContainer
                style={{ height: '100vh', width: '100%' }}
                center={[23.85751150970162, 89.93005409172508]}
                zoom={13}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={[23.85751150970162, 89.93005409172508]}
                    icon={customIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;