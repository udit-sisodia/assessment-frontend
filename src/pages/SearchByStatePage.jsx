import { useState } from "react";
import { useIncidents } from "../hooks/useIncidents";
import { STATUSES } from "../constants";
import IncidentTable from "../components/IncidentTable";
import Message from "../components/Message";

export default function SearchByStatePage() {
  const { stateResults, findByState, loading, error } = useIncidents();
  const [state, setState] = useState("");
  const [status, setStatus] = useState("Open");
  const [searched, setSearched] = useState(false); // has the user pressed search yet?

  function handleSubmit(e) {
    e.preventDefault();
    setSearched(true);
    findByState(state, status);
  }

  return (
    <>
      <h1>Search by state</h1>
      <form className="card inline-form" onSubmit={handleSubmit}>
        <label>State
          <input value={state} onChange={(e) => setState(e.target.value)} placeholder="e.g. Maharashtra" required />
        </label>
        <label>Status
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            {STATUSES.map((s) => <option key={s}>{s}</option>)}
          </select>
        </label>
        <button className="btn">Search</button>
      </form>

      {loading && <Message text="Searching..." />}
      {searched && error && <Message text={error} type="error" />}
      {searched && !loading && stateResults.length > 0 && <IncidentTable incidents={stateResults} />}
    </>
  );
}
