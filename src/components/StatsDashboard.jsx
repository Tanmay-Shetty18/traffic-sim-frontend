import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Legend, ResponsiveContainer } from 'recharts';

export default function StatsDashboard({ speedOverTime, vehicleMix, validation }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
      <div style={{ width: 400 }}>
        <h4>Average Speed Over Time</h4>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={speedOverTime}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="avgSpeed" stroke="#1e90ff" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{ width: 400 }}>
        <h4>Vehicle Mix</h4>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={vehicleMix}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#ff8c00" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {validation && (
        <div style={{ width: 300 }}>
          <h4>Validation</h4>
          <p>MAPE: {validation.mape}%</p>
          <p>GEH: {validation.geh}</p>
        </div>
      )}
    </div>
  );
}