import React from 'react';

export function ReadVulnerabilities({ vulnerabilities, onUpdateStatus, onDelete }) {
  
  function handleDeleteClick(id) {
    const isConfirmed = window.confirm('Permanently delete this finding?');
    if (isConfirmed) {
      onDelete(id);
    }
  }

  if (vulnerabilities.length === 0) {
    return (
      <section className="vms-card">
        <h2 className="text-xl font-bold mb-4">View Vulnerabilities</h2>
        <div className="text-center py-6 text-sm text-[var(--color-text-secondary)]">
          No vulnerabilities found in database.
        </div>
      </section>
    );
  }

  return (
    <section className="vms-card">
      <h2 className="text-xl font-bold mb-4">View Vulnerabilities</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] text-xs font-bold uppercase tracking-wider">
              <th className="p-3">CVE ID</th>
              <th className="p-3">Title</th>
              <th className="p-3">Severity</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-primary)] text-sm text-[var(--color-text-secondary)]">
            {vulnerabilities.map((vuln) => {
              // Ensure we display CVE or fallback to ID
              const displayId = vuln.cve || vuln.id;

              return (
                <tr key={vuln.id} className="hover:bg-[var(--color-bg-primary)] transition-colors">
                  <td className="p-3 font-mono text-[var(--color-text-primary)]">
                    {displayId}
                  </td>
                  <td className="p-3 text-[var(--color-text-primary)] font-medium">
                    {vuln.title}
                  </td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-border-primary)]">
                      {vuln.severity}
                    </span>
                  </td>
                  <td className="p-3">
                    <select
                      value={vuln.status}
                      onChange={(e) => onUpdateStatus(vuln.id, e.target.value)}
                      className="bg-[var(--color-bg-primary)] border border-[var(--color-border-primary)] rounded text-xs font-semibold px-2 py-1 text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand)]"
                    >
                      <option value="Open">Open</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Retest Pending">Retest Pending</option>
                      <option value="Resolved">Resolved</option>
                      <option value="False Positive">False Positive</option>
                      <option value="Accepted Risk">Accepted Risk</option>
                    </select>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => handleDeleteClick(vuln.id)}
                      className="text-rose-500 hover:text-rose-700 font-bold text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
