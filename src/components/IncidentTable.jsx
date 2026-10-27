export default function IncidentTable({ incidents }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Establishment</th><th>State</th><th>Date</th>
            <th>Severity</th><th>Status</th><th>Fatalities</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((item) => (
            <tr key={item._id}>
              <td>{item.incident_id}</td>
              <td>
                <strong>{item.establishment}</strong>
                <div className="small">{item.description}</div>
              </td>
              <td>{item.state}</td>
              <td>{new Date(item.incident_date).toLocaleDateString()}</td>
              <td><span className={"badge " + item.severity.toLowerCase()}>{item.severity}</span></td>
              <td>{item.status}</td>
              <td>{item.fatalities}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
