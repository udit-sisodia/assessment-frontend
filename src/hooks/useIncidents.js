import { useContext } from "react";
import { IncidentContext } from "../context/IncidentContext";

// Shortcut so pages write useIncidents() instead of useContext(IncidentContext)
export function useIncidents() {
  return useContext(IncidentContext);
}
