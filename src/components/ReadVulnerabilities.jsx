export function ReadVulnerabilities() {
  return (
    <section style={boxStyle}>
      <h2 style={headingStyle}>View Vulnerabilities</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '8px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5', textAlign: 'left' }}>
            <th style={cellStyle}>CVE ID</th>
            <th style={cellStyle}>Title</th>
            <th style={cellStyle}>Severity</th>
            <th style={cellStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cellStyle}>CVE-2024-0001</td>
            <td style={cellStyle}>SQL Injection in login page</td>
            <td style={cellStyle}>High</td>
            <td style={cellStyle}>Open</td>
          </tr>
          <tr>
            <td style={cellStyle}>CVE-2024-0002</td>
            <td style={cellStyle}>Outdated OpenSSL library</td>
            <td style={cellStyle}>Medium</td>
            <td style={cellStyle}>In Progress</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

const boxStyle = {
  border: '1px solid #cccccc',
  padding: '16px',
  marginBottom: '16px',
}

const headingStyle = {
  color: '#2563eb',
  marginTop: 0,
}

const cellStyle = {
  border: '1px solid #cccccc',
  padding: '8px',
}
