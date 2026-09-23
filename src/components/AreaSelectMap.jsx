import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';
import '@geoman-io/leaflet-geoman-free';

function DrawControls({ onAreaSelected }) {
  const map = useMap();

  useEffect(() => {
    map.pm.addControls({
      position: 'topright',
      drawMarker: false,
      drawCircleMarker: false,
      drawPolyline: false,
      drawCircle: false,
      drawRectangle: true,
      drawPolygon: true,
      editMode: true,
      dragMode: false,
      removalMode: true,
    });

    const handleCreate = (e) => {
      const bounds = e.layer.getBounds();
      onAreaSelected({
        north: bounds.getNorth(),
        south: bounds.getSouth(),
        east: bounds.getEast(),
        west: bounds.getWest(),
      });
    };

    map.on('pm:create', handleCreate);
    return () => {
      map.off('pm:create', handleCreate);
      map.pm.removeControls();
    };
  }, [map]);

  return null;
}

export default function AreaSelectMap({ onAreaSelected }) {
  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <MapContainer center={[19.076, 72.877]} zoom={12} style={{ height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <DrawControls onAreaSelected={onAreaSelected} />
      </MapContainer>
    </div>
  );
}