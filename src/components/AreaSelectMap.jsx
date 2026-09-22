import { useState } from 'react';
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';

export default function AreaSelectMap({ onAreaSelected }) {
  const [bounds, setBounds] = useState(null);

  const handleCreated = (e) => {
    const layer = e.layer;
    const b = layer.getBounds();
    const selected = {
      north: b.getNorth(),
      south: b.getSouth(),
      east: b.getEast(),
      west: b.getWest(),
    };
    setBounds(selected);
    onAreaSelected(selected);
  };

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <MapContainer center={[19.076, 72.877]} zoom={12} style={{ height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={handleCreated}
            draw={{
              rectangle: true,
              polygon: true,
              circle: false,
              circlemarker: false,
              marker: false,
              polyline: false,
            }}
          />
        </FeatureGroup>
      </MapContainer>
      {bounds && (
        <pre style={{ fontSize: 12 }}>{JSON.stringify(bounds, null, 2)}</pre>
      )}
    </div>
  );
}