import { STATUSES, SEVERITIES } from "../constants";

export default function IncidentForm({
  form,
  saving,
  handleChange,
  handleSubmit,
  city
}) {
  console.log(city)
  const inputClasses =
    "w-full rounded-lg border border-[#D8DEE6] px-2.5 py-2 text-[15px] text-[#12203A] outline-none transition focus:border-[#F2A900] focus:ring-2 focus:ring-[#F2A900]/20";

  const labelClasses =
    "flex flex-col gap-[0.3rem] text-[0.85rem] font-medium text-[#5B6B82]";

  return (<div >
  <form
    className=" mb-5 grid grid-cols-1 gap-4 rounded-[10px] border border-[#D8DEE6] bg-white p-5 sm:grid-cols-2 lg:grid-cols-3"
    onSubmit={handleSubmit}
  > <label className={labelClasses}>
      Incident ID <input
        className={inputClasses}
        name="incident_id"
        value={form.incident_id}
        onChange={handleChange}
        required
      /> </label>

    <label className={labelClasses}>
      Establishment
      <input
        className={inputClasses}
        name="establishment"
        value={form.establishment}
        onChange={handleChange}
        required
      />
    </label>

    <label className={labelClasses}>
      State
      <input
        className={inputClasses}
        name="state"
        value={form.state}
        onChange={handleChange}
        required
      />
    </label>

    <label className={labelClasses}>
      Date
      <input
        className={inputClasses}
        type="date"
        name="incident_date"
        value={form.incident_date}
        onChange={handleChange}
        required
      />
    </label>

    <label className={labelClasses}>
      Time
      <input
        className={inputClasses}
        type="time"
        name="incident_time"
        value={form.incident_time}
        onChange={handleChange}
        required
      />
    </label>

    <label className={labelClasses}>
      Severity
      <select
        className={inputClasses}
        name="severity"
        value={form.severity}
        onChange={handleChange}
      >
        {SEVERITIES.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
    </label>

    <label className={labelClasses}>
      Status
      <select
        className={inputClasses}
        name="status"
        value={form.status}
        onChange={handleChange}
      >
        {STATUSES.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>
    </label>

    <label className={labelClasses}>
      Fatalities
      <input
        className={inputClasses}
        type="number"
        min="0"
        name="fatalities"
        value={form.fatalities}
        onChange={handleChange}
      />
    </label>

    <label className="flex flex-row items-center gap-2 self-end pb-2 text-[0.85rem] font-medium text-[#5B6B82]">
      <input
        className="h-4 w-4 accent-[#12203A]"
        type="checkbox"
        name="hospitalized"
        checked={form.hospitalized}
        onChange={handleChange}
      />
      Someone was hospitalized
    </label>

    <label className={`${labelClasses} col-span-full`}>
      What happened
      <textarea
        className={inputClasses}
        rows="4"
        name="description"
        value={form.description}
        onChange={handleChange}
        required
      />
    </label>

    <button
      className="col-span-full cursor-pointer rounded-lg bg-[#12203A] px-5 py-[0.65rem] text-[0.95rem] font-semibold text-white transition hover:bg-[#24395c] disabled:cursor-not-allowed disabled:opacity-50"
      disabled={saving}
    >
      {saving ? "Saving..." : "Save incident"}
    </button>
  </form>

  </div>

  );
}
