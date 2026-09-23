import { useNavigate } from 'react-router-dom';

const STEPS = [
  {
    number: '1',
    title: 'Select an area',
    description: 'Draw a rectangle or polygon over any Indian city or region on the map.',
  },
  {
    number: '2',
    title: 'Simulation runs',
    description:
      'The road network is pulled from OpenStreetMap automatically, and every vehicle is driven by a custom behavior engine calibrated on Indian traffic data — not generic lane-disciplined defaults.',
  },
  {
    number: '3',
    title: 'Review the results',
    description:
      'Watch an animated playback of the simulated traffic, check the statistics dashboard, and download a full report.',
  },
];

export default function LandingPage() {
  const navigate = useNavigate();

return (
  <div>
    <header className="app-header">
      <div className="app-header__brand">
        <span className="app-header__dot" />
        <span className="app-header__title">Traffic-Sim</span>
      </div>
    </header>

    <section className="landing-hero">
      <h1 className="landing-hero__title">
        Traffic simulation built for how Indian roads actually work
      </h1>
      <p className="landing-hero__subtitle">
        Most simulators assume lane discipline and uniform vehicles. This platform replaces that
        assumption entirely — a custom, India-calibrated behavior engine drives every vehicle,
        reproducing tight following gaps, two-wheeler lane-splitting, and negotiated junctions,
        on road networks generated automatically from OpenStreetMap.
      </p>
    </section>

    <section className="landing-steps">
      {STEPS.map((step) => (
        <div className="landing-step" key={step.number}>
          <span className="landing-step__number">{step.number}</span>
          <h3 className="landing-step__title">{step.title}</h3>
          <p className="landing-step__description">{step.description}</p>
        </div>
      ))}
    </section>

    <div className="landing-cta">
  <button className="start-btn" onClick={() => navigate('/select')}>
    Select an area
  </button>
  <button className="demo-btn" onClick={() => navigate('/simulation/demo')}>
    View a sample simulation
  </button>
</div>
  </div>
);
}