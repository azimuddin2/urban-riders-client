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
                style={{ height: '100vh', width: '100%', borderRadius: '10px' }}
                center={[23.811358633150626, 90.35266412539661]}
                zoom={13}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={[23.811358633150626, 90.35266412539661]}
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