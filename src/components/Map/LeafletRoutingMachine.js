import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import marker from '../../assets/icons/marker-icon.png';


const LeafletRoutingMachine = () => {
    const map = useMap();
    let DefaultIcon = L.icon({
        iconUrl: marker,
        iconSize: [30, 30],
    });
    useEffect(() => {
        var marker1 = L.marker([23.52550546285533, 90.68983972633383], { icon: DefaultIcon }).addTo(
            map
        );
        map.on("click", function (e) {
            L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
            L.Routing.control({
                waypoints: [
                    L.latLng(23.52550546285533, 90.689839726333834),
                    L.latLng(e.latlng.lat, e.latlng.lng),
                ],
                lineOptions: {
                    styles: [
                        {
                            color: "blue",
                            weight: 4,
                            opacity: 0.7,
                        },
                    ],
                },
                routeWhileDragging: false,
                geocoder: L.Control.Geocoder.nominatim(),
                addWaypoints: false,
                draggableWaypoints: false,
                fitSelectedRoutes: true,
                showAlternatives: true,
            })
                .on("routesfound", function (e) {
                    e.routes[0].coordinates.forEach((c, i) => {
                        setTimeout(() => {
                            marker1.setLatLng([c.lat, c.lng]);
                        }, 1000 * i);
                    });
                })
                .addTo(map);
        });
    }, []);
    return null;
};

export default LeafletRoutingMachine;