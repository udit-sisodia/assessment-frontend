import { useIncidents } from "../hooks/useIncidents";
import IncidentTable from "../components/IncidentTable";
import Message from "../components/Message";

export default function HomePage() {
  const { incidents, loading, error, loadIncidents } = useIncidents();

  // Simple counts for the summary cards
  const critical = incidents.filter((i) => i.severity === "Critical").length;
  const open = incidents.filter((i) => i.status === "Open").length;
  const fatalities = incidents.reduce((sum, i) => sum + i.fatalities, 0);

  return (
    <>
      <div className="page-head">
        <h1>All incidents</h1>
        <button className="btn secondary" onClick={loadIncidents}>Refresh</button>
      </div>

      <div className="stats">
        <div className="stat"><b>{incidents.length}</b><span>Total</span></div>
        <div className="stat"><b>{open}</b><span>Open</span></div>
        <div className="stat danger"><b>{critical}</b><span>Critical</span></div>
        <div className="stat danger"><b>{fatalities}</b><span>Fatalities</span></div>
      </div>

      {loading && <Message text="Loading incidents..." />}
      {error && <Message text={error} type="error" />}
      {!loading && !error && incidents.length === 0 && <Message text="No incidents yet. Add the first one." />}
      {incidents.length > 0 && <IncidentTable incidents={incidents} />}
    </>
  );
}
