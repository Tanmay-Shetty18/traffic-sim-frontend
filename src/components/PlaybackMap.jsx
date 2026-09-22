import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { DeckOverlay } from '@deck.gl-community/leaflet'; // imported class
import { TripsLayer } from '@deck.gl/geo-layers';
import { mockTrips } from '../mockTrips';

// Renamed from DeckOverlay to TripsOverlay to avoid conflict with the imported class
function TripsOverlay({ trips, currentTime }) {
  const map = useMap();
  const overlayRef = useRef(null);

  useEffect(() => {
    // Instantiate the DeckOverlay class directly (not LeafletLayer)
    const overlay = new DeckOverlay({
      layers: [
        new TripsLayer({
          id: 'trips',
          data: trips,
          getPath: (d) => d.path,
          getTimestamps: (d) => d.timestamps,
          getColor: (d) => (d.vehicleType === 'twoWheeler' ? [255, 140, 0] : [30, 144, 255]),
          opacity: 0.8,
          widthMinPixels: 3,
          trailLength: 20,
          currentTime,
        }),
      ],
    });

    map.addLayer(overlay);
    overlayRef.current = overlay;

    return () => map.removeLayer(overlay);
  }, [map, trips, currentTime]);

  return null;
}

export default function PlaybackMap({ trips }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const maxTime = Math.max(...trips.flatMap((t) => t.timestamps), 100);

  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      setCurrentTime((t) => (t + speed >= maxTime ? 0 : t + speed));
    }, 100);
    return () => clearInterval(interval);
  }, [playing, speed, maxTime]);

  return (
    <div>
      <div style={{ height: '75vh' }}>
        <MapContainer center={[19.076, 72.877]} zoom={13} style={{ height: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* Updated to use the renamed component */}
          <TripsOverlay trips={trips} currentTime={currentTime} />
        </MapContainer>
      </div>
      <div style={{ padding: 10 }}>
        <button onClick={() => setPlaying((p) => !p)}>{playing ? 'Pause' : 'Play'}</button>
        <input
          type="range"
          min={0}
          max={maxTime}
          value={currentTime}
          onChange={(e) => setCurrentTime(Number(e.target.value))}
          style={{ width: '60%', marginLeft: 10 }}
        />
        <select value={speed} onChange={(e) => setSpeed(Number(e.target.value))} style={{ marginLeft: 10 }}>
          <option value={1}>1x</option>
          <option value={2}>2x</option>
          <option value={4}>4x</option>
        </select>
      </div>
    </div>
  );
}