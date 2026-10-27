import { useState } from "react";
import { useIncidents } from "../hooks/useIncidents";
import IncidentTable from "../components/IncidentTable";
import Message from "../components/Message";

export default function SearchPage() {
  const { keywordResults, findByKeyword, loading, error } = useIncidents();
  const [keyword, setKeyword] = useState("");
  const [searched, setSearched] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSearched(true);
    findByKeyword(keyword);
  }

  return (
    <>
      <h1>Search incidents</h1>
      <p className="small">Every word you type must match the description, establishment or severity.</p>
      <form className="card inline-form" onSubmit={handleSubmit}>
        <label className="grow">Keyword
          <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="e.g. fire critical" required />
        </label>
        <button className="btn">Search</button>
      </form>

      {loading && <Message text="Searching..." />}
      {searched && error && <Message text={error} type="error" />}
      {searched && !loading && !error && keywordResults.length === 0 && <Message text="No matching incidents found." />}
      {searched && keywordResults.length > 0 && <IncidentTable incidents={keywordResults} />}
    </>
  );
}
