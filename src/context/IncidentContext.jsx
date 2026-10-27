import { createContext, useEffect, useState } from "react";
import * as incidentService from "../services/incidentService";

export const IncidentContext = createContext();

export function IncidentProvider({ children }) {
  // The data we share across pages
  const [incidents, setIncidents] = useState([]);
  const [stateResults, setStateResults] = useState([]);
  const [keywordResults, setKeywordResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // GET all incidents
  async function loadIncidents() {
    try {
      setLoading(true);
      setError("");
      setIncidents(await incidentService.getAllIncidents());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // POST create (error is thrown so the form can show it)
  async function addIncident(incident) {
    const created = await incidentService.createIncident(incident);
    setIncidents([created, ...incidents]);
  }

  // POST search by state + status
  async function findByState(state, status) {
    try {
      setLoading(true);
      setError("");
      setStateResults(await incidentService.searchByState(state, status));
    } catch (err) {
      setStateResults([]);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // POST keyword search
  async function findByKeyword(keyword) {
    try {
      setLoading(true);
      setError("");
      setKeywordResults(await incidentService.searchByKeyword(keyword));
    } catch (err) {
      setKeywordResults([]);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Load incidents once when the app opens
  useEffect(() => {
    loadIncidents();
  }, []);

  const value = {
    incidents, stateResults, keywordResults, loading, error,
    loadIncidents, addIncident, findByState, findByKeyword,
  };

  return <IncidentContext.Provider value={value}>{children}</IncidentContext.Provider>;
}
