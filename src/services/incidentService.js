const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/incidents";

// One helper that every API function uses
async function callApi(path, method = "GET", body) {
  const response = await fetch(BASE_URL + path, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });

  const result = await response.json();
  if (!response.ok) throw new Error(result.message); // backend's error message
  return result.data;
}

// GET  /
export const getAllIncidents = () => callApi("");

// POST /
export const createIncident = (incident) => callApi("", "POST", incident);

// POST /search-by-state
export const searchByState = (state, status) =>
  callApi("/search-by-state", "POST", { state, status });

// POST /search
export const searchByKeyword = (search) => callApi("/search", "POST", { search });
