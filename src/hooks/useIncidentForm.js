import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIncidents } from "./useIncidents";

const emptyForm = {
  incident_id: "", establishment: "", state: "",
  incident_date: "", incident_time: "",
  status: "Open", severity: "Low",
  hospitalized: false, fatalities: 0, description: "",
};

// All the form logic lives here, so the form component only shows fields
export function useIncidentForm() {
  const { addIncident } = useIncidents();
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setSaving(true);
      setError("");
      await addIncident({ ...form, fatalities: Number(form.fatalities) });
      navigate("/"); // go back home after saving
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return { form, error, saving, handleChange, handleSubmit };
}
